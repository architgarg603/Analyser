let path = require("path");
let fs = require("fs");


let refresh = document.querySelector(".refresh")
let organize = document.querySelector(".organize");
let changeLocation = document.querySelector(".changeLocation");
let fileDetails = document.querySelector(".lower ul");
let showLess = document.querySelector(".loadLess");
let showMore = document.querySelector(".loadMore");
let docStat = document.querySelector(".docStats")
let imgStat = document.querySelector(".imgStats")
let audioStat = document.querySelector(".audioStats")
let videoStat = document.querySelector(".videoStats")
let otherStat = document.querySelector(".otherStats")
let upperDiv = document.querySelector(".upper");
let lowerDiv = document.querySelector(".lower");
let hide = document.querySelector(".hide");
let p1 = document.querySelector(".p1")
let p2 = document.querySelector(".p2")
let p3 = document.querySelector(".p3")
let p4 = document.querySelector(".p4")



let docCnt = 0;
let docSize = 0;
let audioSize = 0;
let audioCnt = 0;
let videoCnt = 0;
let videoSize = 0;
let otherCnt = 0;
let otherSize = 0;
let imgCnt = 0;
let imgSize = 0;
let pathName = ''
let chartDoc = 0;
let chartAudio = 0;
let chartVideo = 0;
let chartImg = 0;
let chartOther = 0;



function setHeight(){
    let lowerDiv = document.querySelector(".lower");
    let height = lowerDiv.offsetHeight + 197;
    let rightDiv = document.querySelector(".right");
    rightDiv.style.height = `${height}px`;    
}

setHeight();