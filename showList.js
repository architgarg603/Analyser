function showFileListfn() {
    let src = pathName;
    // make ul that contains all li
    let ul = document.createElement("ul");
    ul.classList.add("filesUL")
    let li = document.createElement("li");      // creating first li that contain heading
    li.innerHTML = `<div class="fName">File Name</div>
                    <div class="fDate">Date</div>
                    <div class="fSize">Size</div>`
    ul.appendChild(li);
    showFileListHelperfn(src, ul)       // fn that make li for each file in the folder and add in ul 
    setEvent();



    lowerDiv.appendChild(ul);
    // creating show more and less btns
    let more = document.createElement("div");
    more.classList.add("loadMore");
    more.innerHTML = 'Show More';

    let less = document.createElement("div");
    less.classList.add("loadLess");
    less.innerHTML = 'Show Less';


    // adding click event on show more btn
    more.addEventListener("click", function () {
        let allLi = ul.querySelectorAll('li');
        // show only 8 li that have "dikha" class
        for (let i = 8; i < allLi.length; i++) {
            if (allLi[i].classList.contains("dikha")) {
                allLi[i].style.display = 'flex';
            }
        }

        more.style.display = 'none';
        less.style.display = 'flex'
        setHeight();
    })

    // adding click event on show less btn
    less.addEventListener("click", function () {
        let allLi = ul.querySelectorAll('li');

        let cnt = 0;
        for (let i = 1; i < allLi.length; i++) {
            // show all li that have "dikha" class
            if (allLi[i].classList.contains("dikha")) {
                cnt++;

            }

            if (allLi[i].classList.contains("dikha") && cnt < 8) {
                allLi[i].style.display = "flex";
            } else {

                allLi[i].style.display = "none";
            }


        }

        less.style.display = 'none';
        more.style.display = 'flex';
        if (allLi.length < 8) {
            more.style.display = 'none';
        }
        setHeight();
    })
    less.click();

    // set file cnt and size of each type in filter btns.
    printDetails();
    lowerDiv.appendChild(more);
    lowerDiv.appendChild(less);
}
function showFileListHelperfn(src, ul) {
    if (checkWhetherFile(src) == true) {
        let ext = getExtension(src);

        let category = getCategory(ext);

        if (category == null) {
            category = "others";
        }

        // check file type and add size to their respective type and increament cnt by 1
        if (category == 'documents') {
            docCnt++;
            docSize += fs.statSync(src).size;
        } else if (category == 'audio') {
            audioCnt++;
            audioSize += fs.statSync(src).size;
        } else if (category == 'video') {
            videoCnt++;
            videoSize += fs.statSync(src).size;
        } else if (category == 'img') {
            imgCnt++;
            imgSize += fs.statSync(src).size;
        } else {
            otherCnt++;
            otherSize += fs.statSync(src).size;
        }

        addList(category, src, ul)

    } else {

        let childNames = getContent(src);

        for (let i = 0; i < childNames.length; i++) {
            if (childNames[i] == "This PC" || childNames[i] == "Recycle Bin") {
                continue;
            }
            let childPath = path.join(src, childNames[i]);
            showFileListHelperfn(childPath, ul);
        }
    }
}

// make li of file
function addList(category, src, ul) {
    let li = document.createElement("li");
    li.classList.add("dikha");
    let fName = path.basename(src);
    let fSize = getSizeAndUnit(fs.statSync(src).size);
    let fDate = fs.statSync(src).birthtime.getDate() + '-' + fs.statSync(src).birthtime.getMonth() + '-' + fs.statSync(src).birthtime.getFullYear();

    let cat = 'other';
    if (category == 'documents') {
        cat = 'document'
    } else if (category == 'audio') {
        cat = 'audio'
    } else if (category == 'video') {
        cat = 'video'
    } else if (category == 'img') {
        cat = 'img'
    }


    li.innerHTML = `<div class="fName"><span class="${cat}"></span>${fName}</div>
                    <div class="fDate">${fDate}</div>
                    <div class="fSize">${fSize.size} ${fSize.sizeUnit}</div>`

    ul.appendChild(li);

}

// set file cnt and size of each type in filter btns.
function printDetails() {


    chartDoc = docSize;
    chartAudio = audioSize;
    chartVideo = videoSize;
    chartImg = imgSize;
    chartOther = otherSize;

    docSize = getSizeAndUnit(docSize);
    imgSize = getSizeAndUnit(imgSize);
    audioSize = getSizeAndUnit(audioSize);
    videoSize = getSizeAndUnit(videoSize);
    otherSize = getSizeAndUnit(otherSize);

    docStat.querySelector(".fileCnt").innerHTML = docCnt;
    docStat.querySelector(".statsSize").innerHTML = docSize.size + ' ' + docSize.sizeUnit

    imgStat.querySelector(".fileCnt").innerHTML = imgCnt;
    imgStat.querySelector(".statsSize").innerHTML = imgSize.size + ' ' + imgSize.sizeUnit;

    audioStat.querySelector(".fileCnt").innerHTML = audioCnt;
    audioStat.querySelector(".statsSize").innerHTML = audioSize.size + ' ' + audioSize.sizeUnit;

    videoStat.querySelector(".fileCnt").innerHTML = videoCnt;
    videoStat.querySelector(".statsSize").innerHTML = videoSize.size + ' ' + videoSize.sizeUnit

    otherStat.querySelector(".fileCnt").innerHTML = otherCnt;
    otherStat.querySelector(".statsSize").innerHTML = otherSize.size + ' ' + otherSize.sizeUnit;

}

// function that convert byte to suitable type
function getSizeAndUnit(size) {
    size = size / 1000;
    let sizeUnit = 'KB'

    if (size / 1000 > 1) {
        size /= 1000;
        sizeUnit = 'MB'
    }
    if (size / 1000 > 1) {
        size /= 1000;
        sizeUnit = 'GB'
    }


    size = size + '';
    if (size.includes('.')) {
        let x = size.split('.');
        size = x[0] + '.' + x[1].substring(0, 2);
    }

    return { size, sizeUnit };

}


showFileListfn();
