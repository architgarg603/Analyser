function organizefn() {
    let src = pathName;
    let dest = path.join(src, "organized_files");

    if (fs.existsSync(dest) == false) {
        fs.mkdirSync(dest);
    }

    organizer(src, dest)
}
function organizer(src, dest) {
    // checkwhether file or directory
    if (checkWhetherFile(src) == true) {
        // copy with newname
        let ext = getExtension(src);

        //getcategory => category ,null
        let category = getCategory(ext);

        // others case
        if (category == null) {
            category = "others";
        }

        sendFile(dest, category, src);
    } else {

        let childNames = getContent(src);

        for (let i = 0; i < childNames.length; i++) {
            if (childNames[i] == "organized_files" || childNames[i] == "This PC" || childNames[i] == "Recycle Bin") {
                continue;
            }

            let childPath = path.join(src, childNames[i]);
            organizer(childPath, dest);
        }
    }
}
function checkWhetherFile(src) {
    return fs.lstatSync(src).isFile()
}
function getContent(src) {
    return fs.readdirSync(src);
}
function getExtension(src) {
    let ext = src.split(".").pop();
    return ext;
}
function sendFile(dest, category, src) {
    let categoryPath = path.join(dest, category);
    // does category exist
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }

    let fName = path.basename(src);
    let cPath = path.join(categoryPath, fName);
    fs.rename(src, cPath, function (err) {
        if (err) throw err
    });
}
function getCategory(ext) {
    let types = utility.types;
    for (let category in types) {
        for (let i = 0; i < types[category].length; i++) {
            if (ext == types[category][i]) {
                return category;
            }
        }
    }
    return "others";
}



