refresh.addEventListener("click", function () {
    let driveCards = document.querySelectorAll(".driveCard");
    let filesUL = document.querySelector(".filesUL")
    if (filesUL) {
        filesUL.remove();
    }
    let moreBtn = document.querySelector(".loadMore");
    if (moreBtn) moreBtn.remove();
    let lessBtn = document.querySelector(".loadLess");
    if (lessBtn) lessBtn.remove();
    docCnt = 0;
    docSize = 0;
    audioSize = 0;
    audioCnt = 0;
    videoCnt = 0;
    videoSize = 0;
    otherCnt = 0;
    otherSize = 0;
    imgCnt = 0;
    imgSize = 0;

    driveCards.forEach(x => {
        x.remove();
    })

    showFileListfn();
    getDrive();
    setChart();
})
organize.addEventListener("click", function () {
    organizefn();
})
changeLocation.addEventListener("click", function () {

    hide.style.display = "flex";
    const prompt = require('electron-prompt');
    prompt({
        title: 'Change folder location',
        label: 'Add Path (Drives are not allowed for Security)  ',
        value: '',
        inputAttrs: {
            type: 'text'
        },
        type: 'input',
        height: 180,
        width: 400,
        menuBarVisible: true,
        skipTaskbar: false,
        alwaysOnTop: true

    })
        .then(promptFn)
        .catch(console.error);

})

function promptFn(r) {
    if (r === null || r == undefined) {
        if (pathName == "") {
            hide.style.display = "flex";
            const prompt = require('electron-prompt');
            prompt({
                title: 'Change folder location',
                label: 'Re Enter Path (Drives are not allowed for Security)',
                value: '',
                inputAttrs: {
                    type: 'text'
                },
                type: 'input',
                height: 180,
                width: 400,
                menuBarVisible: true,
                skipTaskbar: false,
                alwaysOnTop: true

            })
                .then(promptFn)
                .catch(console.error);
        } else {
            hide.style.display = "none";
            console.log('user cancelled');
        }
    } else {
        r = r + ''


        let x = r.split("\\");
        let paths = x[0];
        for (let i = 1; i < x.length; i++) {
            paths = path.join(paths, x[i]);
        }

        if (fs.existsSync(paths) && !fs.lstatSync(paths).isFile() && !(x[1] == "") && x[1]) {
            hide.style.display = "none";
            pathName = paths;
            let driveCards = document.querySelectorAll(".driveCard");
            let filesUL = document.querySelector(".filesUL")
            if (filesUL) {
                filesUL.remove();
            }
            let moreBtn = document.querySelector(".loadMore");
            if (moreBtn) moreBtn.remove();
            let lessBtn = document.querySelector(".loadLess");
            if (lessBtn) lessBtn.remove(); ``
            docCnt = 0;
            docSize = 0;
            audioSize = 0;
            audioCnt = 0;
            videoCnt = 0;
            videoSize = 0;
            otherCnt = 0;
            otherSize = 0;
            imgCnt = 0;
            imgSize = 0;

            driveCards.forEach(x => {
                x.remove();
            })

            showFileListfn();
            getDrive();
            setChart();

        } else {
            hide.style.display = "flex";
            const prompt = require('electron-prompt');
            prompt({
                title: 'Change folder location',
                label: 'Re Enter Path (Drives are not allowed for Security)',
                value: '',
                inputAttrs: {
                    type: 'text'
                },
                type: 'input',
                height: 180,
                width: 400,
                menuBarVisible: true,
                skipTaskbar: false,
                alwaysOnTop: true

            })
                .then(promptFn)
                .catch(console.error);

        }
    }

}

window.addEventListener("load", function () {
    document.querySelector(".changeLocation").click()

})