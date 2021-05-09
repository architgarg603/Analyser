//  ===============================================   Creating CHart =====================================================================

function setChart() {
    document.querySelector("#myChart").remove();        // removing canvas node before making new chart
    let canvas = document.createElement("canvas");
    canvas.setAttribute("id","myChart");
    document.querySelector(".chart").appendChild(canvas);
    let ctx = canvas.getContext('2d');
    

    //  ======================================= chart.js setup for making chart ====================================================
    let myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                label: 'Memory Percentage',
                data: [chartDoc, chartImg, chartAudio, chartVideo, chartOther],
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


    //========================================== Calculating total size of folder that shown in middle of chart ==================================

    let totalSize = document.querySelector(".totalSize");
    let tempSize = chartDoc+ chartImg+ chartAudio+ chartVideo+ chartOther;
    let tSize = getSizeAndUnit(tempSize);

    totalSize.innerHTML = `<span>Total </span><span>${tSize.size} ${tSize.sizeUnit}</span>`


}

setChart();