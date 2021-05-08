const nodeDiskInfo = require('node-disk-info');

function getDrive(){
    try {
        const disks = nodeDiskInfo.getDiskInfoSync();
        printResults(disks);
    } catch (e) {
        console.error(e);
    }
}

function printResults(disks) {
    let cnt = 1;
    for (const disk of disks) {
        let driveDiv = document.createElement("div");
        driveDiv.classList.add(`p${cnt}`);
        driveDiv.classList.add(`driveCard`);
        cnt++;

        let driveSize = disk.used / (1000 * 1000 * 1000);
        driveSize = '' + driveSize;
        let x = driveSize.split(".");
        driveSize = x[0] + '.' + x[1].substring(0, 2)

        let width = disk.used / disk.blocks
        width = (width*100)+'';
        x = width.split('.');
        width = x[0] + '.' + x[1].substring(0,2);

        driveDiv.innerHTML = ` <div class="logo"><i class="fas fa-file"></i></div>
                                <div class="name">${disk.mounted} Drive</div>
                                <div class="bar">
                                    <div class="percentage"></div>
                                </div>
                                <div class="info">
                                    <div class="size">${driveSize} GB</div>
                                    <div class="file">${width}%</div>
                                </div>`

        let percentage = driveDiv.querySelector(".percentage");
        percentage.style.width = `${width}%`
        upperDiv.appendChild(driveDiv);

    }

}

getDrive();

