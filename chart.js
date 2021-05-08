function setChart() {
    document.querySelector("#myChart").remove();
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id","myChart");
    document.querySelector(".chart").appendChild(canvas);
    let ctx = canvas.getContext('2d');
    
    let myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Memory Percentage',
                data: [docSize.size, imgSize.size, audioSize.size, videoSize.size, otherSize.size],
                backgroundColor: ['#008BFA', 'darkorange', 'rgb(253, 47, 47)', 'cyan', 'lawngreen'],
                borderColor: 'transparent'
            }]
        },
        options: {
            cutout: '60%',
            radius: "100%",
            animation: {
                animateRotate: true
            }
        }
    });

    let totalSize = document.querySelector(".totalSize");
    let tempSize = parseInt(docSize.size) + parseInt(imgSize.size)+ parseInt(audioSize.size)+ parseInt(videoSize.size)+ parseInt(otherSize.size);
    let tSize = getSizeAndUnit(tempSize);

    totalSize.innerHTML = `<span>Total </span><span>${tSize.size} ${tSize.sizeUnit}</span>`


}

setChart();