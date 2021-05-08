function setEvent() {
    docStat.addEventListener("click", function () {
        if (docStat.classList.contains("active")) {

            docStat.classList.remove("active");

            let allLi = document.querySelectorAll("li");

            for (let i = 1; i < allLi.length ; i++) {

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();
            if (allLi.length < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight();


        } else {
            imgStat.classList.remove("active");
            audioStat.classList.remove("active");
            videoStat.classList.remove("active");
            otherStat.classList.remove("active");
            docStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");

            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("document")) {
                   allLi[i].classList.add("dikha");
                   cnt++;
                } else {
                    allLi[i].classList.remove("dikha");
                }

            }
            document.querySelector(".loadLess").click();
            
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

    imgStat.addEventListener("click", function () {
        if (imgStat.classList.contains("active")) {

            imgStat.classList.remove("active");

            let allLi = document.querySelectorAll("li");

            for (let i = 1; i < allLi.length; i++) {

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();

            if (allLi.length < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight();


        } else {
            docStat.classList.remove("active");
            audioStat.classList.remove("active");
            videoStat.classList.remove("active");
            otherStat.classList.remove("active");
            imgStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");

            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("img")) {
                    allLi[i].classList.add("dikha");
                    cnt++;
                 } else {
                     allLi[i].classList.remove("dikha");
                 }
 
             }
             document.querySelector(".loadLess").click();
             

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

    otherStat.addEventListener("click", function () {
        if (otherStat.classList.contains("active")) {

            otherStat.classList.remove("active");

            let allLi = document.querySelectorAll("li");

          
            for (let i = 1; i < allLi.length; i++) {

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();
            if (allLi.length < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight();


        } else {
            docStat.classList.remove("active");
            audioStat.classList.remove("active");
            videoStat.classList.remove("active");
            imgStat.classList.remove("active");
            otherStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");

            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("other")) {
                    allLi[i].classList.add("dikha");
                   cnt++;
                } else {
                    allLi[i].classList.remove("dikha");
                }

            }
            document.querySelector(".loadLess").click();
            

            if (cnt < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadLess").style.display = "none";
                document.querySelector(".loadMore").style.display = "flex";

            }

        }
        setHeight();
    })

    audioStat.addEventListener("click", function () {
        if (audioStat.classList.contains("active")) {

            audioStat.classList.remove("active");

            let allLi = document.querySelectorAll("li");

            for (let i = 1; i < allLi.length; i++) {

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();
            if (allLi.length < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";
            }

            document.querySelector(".loadLess").style.display = "none";
            setHeight();


        } else {
            docStat.classList.remove("active");
            otherStat.classList.remove("active");
            videoStat.classList.remove("active");
            imgStat.classList.remove("active");
            audioStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");

            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("audio")) {
                    allLi[i].classList.add("dikha");
                   cnt++;
                } else {
                    allLi[i].classList.remove("dikha");
                }

            }
            document.querySelector(".loadLess").click();
            

            if (cnt < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadLess").style.display = "none";
                document.querySelector(".loadMore").style.display = "flex";

            }

        }
        setHeight();
    })
    videoStat.addEventListener("click", function () {
        if (videoStat.classList.contains("active")) {

            videoStat.classList.remove("active");

            let allLi = document.querySelectorAll("li");

           
            for (let i = 1; i < allLi.length; i++) {

                allLi[i].classList.add("dikha");

            }
            document.querySelector(".loadLess").click();
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
            docStat.classList.remove("active");
            otherStat.classList.remove("active");
            audioStat.classList.remove("active");
            imgStat.classList.remove("active");
            videoStat.classList.add("active");
            let cnt = 0;

            let allLi = document.querySelectorAll("li");

            for (let i = 1; i < allLi.length; i++) {

                if (allLi[i].querySelector("span").classList.contains("video")) {
                    allLi[i].classList.add("dikha");
                   cnt++;
                } else {
                    allLi[i].classList.remove("dikha");
                }

            }
            document.querySelector(".loadLess").click();
            

            if (cnt < 8) {
                document.querySelector(".loadMore").style.display = "none";
                document.querySelector(".loadLess").style.display = "none";
            } else {
                document.querySelector(".loadMore").style.display = "flex";

            }

        }
        setHeight();
    })
}