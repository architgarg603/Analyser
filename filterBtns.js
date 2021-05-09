// =============================================  documents, imagr, audio, video, other btns in right div below chart ================================================

function setEvent() {

    // ==============================================================  documents Stats =============================================================================

    docStat.addEventListener("click", function () {
        if (docStat.classList.contains("active")) {     // checking filter is already applied or not

            docStat.classList.remove("active");         // if already applied remove active class

            let allLi = document.querySelectorAll("li"); // bring all LI's

            for (let i = 1; i < allLi.length ; i++) {   // add dikha class ( dikha class means li that is shown file list option)

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();    // click on loadless btn so that only 8 lis show initially
            if (allLi.length < 8) {                         //check condition if want to show "show more or less btn"
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight(); //set height of right div


        } else {
            // Remove active class from all other filters and add on selected one
            imgStat.classList.remove("active");
            audioStat.classList.remove("active");
            videoStat.classList.remove("active");
            otherStat.classList.remove("active");
            docStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");    // bring all LI's


            // add dihka class on all li of document list and remove other type of li
            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("document")) {        
                   allLi[i].classList.add("dikha");
                   cnt++;
                } else {
                    allLi[i].classList.remove("dikha");
                }

            }
            document.querySelector(".loadLess").click();    // click on loadless btn so that only 8 lis show initially
                                                            //check condition if want to show "show more or less btn"
            if (cnt < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
                document.querySelector(".loadLess").style.display = "none";

            }

        }
        setHeight();
    })

    // ==============================================================  image Stats =============================================================================

    imgStat.addEventListener("click", function () {
        if (imgStat.classList.contains("active")) { // checking filter is already applied or not
            
            imgStat.classList.remove("active");     // if already applied remove active class

            let allLi = document.querySelectorAll("li");// bring all LI's

            for (let i = 1; i < allLi.length; i++) {     // add dikha class ( dikha class means li that is shown file list option)

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();  // click on loadless btn so that only 8 lis show initially
            //check condition if want to show "show more or less btn"
            if (allLi.length < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight();


        } else {
            // Remove active class from all other filters and add on selected one
            docStat.classList.remove("active");
            audioStat.classList.remove("active");
            videoStat.classList.remove("active");
            otherStat.classList.remove("active");
            imgStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");     // bring all LI's
             
            // add dihka class on all li of image list and remove other type of li
            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("img")) {
                    allLi[i].classList.add("dikha");
                    cnt++;
                 } else {
                     allLi[i].classList.remove("dikha");
                 }
 
             }
             document.querySelector(".loadLess").click();   // click on loadless btn so that only 8 lis show initially

            //check condition if want to show "show more or less btn"
            if (cnt < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
                document.querySelector(".loadLess").style.display = "none";

            }

        }
        setHeight();//set height of right div
    })

    // ==============================================================  others Stats =============================================================================

    otherStat.addEventListener("click", function () {
        if (otherStat.classList.contains("active")) {   // checking filter is already applied or not

            otherStat.classList.remove("active");   // if already applied remove active class

            let allLi = document.querySelectorAll("li");    // bring all LI's

          
            for (let i = 1; i < allLi.length; i++) {    // add dikha class ( dikha class means li that is shown file list option)

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();    // click on loadless btn so that only 8 lis show initially

            //check condition if want to show "show more or less btn"
            if (allLi.length < 8) { 
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight(); //set height of right div


        } else {
            // Remove active class from all other filters and add on selected one
            docStat.classList.remove("active");
            audioStat.classList.remove("active");
            videoStat.classList.remove("active");
            imgStat.classList.remove("active");
            otherStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");     // bring all LI's

             // add dihka class on all li of other list and remove other type of li
            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("other")) {
                    allLi[i].classList.add("dikha");
                   cnt++;
                } else {
                    allLi[i].classList.remove("dikha");
                }

            }
            document.querySelector(".loadLess").click();    // click on loadless btn so that only 8 lis show initially
            
            //check condition if want to show "show more or less btn"
            if (cnt < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadLess").style.display = "none";
                document.querySelector(".loadMore").style.display = "flex";

            }

        }
        setHeight(); //set height of right div
    })

    // ==============================================================  Audio Stats =============================================================================

    audioStat.addEventListener("click", function () {
        if (audioStat.classList.contains("active")) {   // checking filter is already applied or not

            audioStat.classList.remove("active");   // if already applied remove active class

            let allLi = document.querySelectorAll("li");    // bring all LI's

            for (let i = 1; i < allLi.length; i++) {    // add dikha class ( dikha class means li that is shown file list option)

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();    // click on loadless btn so that only 8 lis show initially
            
            //check condition if want to show "show more or less btn"
            if (allLi.length < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight();


        } else {
            // Remove active class from all other filters and add on selected one
            docStat.classList.remove("active");
            otherStat.classList.remove("active");
            videoStat.classList.remove("active");
            imgStat.classList.remove("active");
            audioStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");     // bring all LI's
            
            // add dihka class on all li of document list and remove other type of li
            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("audio")) {
                    allLi[i].classList.add("dikha");
                   cnt++;
                } else {
                    allLi[i].classList.remove("dikha");
                }

            }
            document.querySelector(".loadLess").click();    // click on loadless btn so that only 8 lis show initially
            
            //check condition if want to show "show more or less btn"
            if (cnt < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadLess").style.display = "none";
                document.querySelector(".loadMore").style.display = "flex";

            }

        }
        setHeight();    //set height of right div
    })

    // ==============================================================  Video Stats =============================================================================

    videoStat.addEventListener("click", function () {
        if (videoStat.classList.contains("active")) {   // checking filter is already applied or not

            videoStat.classList.remove("active");   // if already applied remove active class

            let allLi = document.querySelectorAll("li");    // bring all LI's

           
            for (let i = 1; i < allLi.length; i++) {    // add dikha class ( dikha class means li that is shown file list option)

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();    // click on loadless btn so that only 8 lis show initially

            //check condition if want to show "show more or less btn"
            if (allLi.length < 8) { 
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadLess").style.display = "none";
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight();


        } else {
            // Remove active class from all other filters and add on selected one
            docStat.classList.remove("active");
            otherStat.classList.remove("active");
            audioStat.classList.remove("active");
            imgStat.classList.remove("active");
            videoStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");     // bring all LI's
             // add dihka class on all li of document list and remove other type of li
            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("video")) {
                    allLi[i].classList.add("dikha");
                   cnt++;
                } else {
                    allLi[i].classList.remove("dikha");
                }

            }
            document.querySelector(".loadLess").click();    // click on loadless btn so that only 8 lis show initially

            //check condition if want to show "show more or less btn"
            if (cnt < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";

            }

        }
        setHeight(); //set height of right div
    })
}