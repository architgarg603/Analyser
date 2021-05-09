// ============================================= set src and destination of folders ========================================================

function organizefn() {

    let src = pathName;
    let dest = path.join(src, "organized_files");

    if (fs.existsSync(dest) == false) {
        fs.mkdirSync(dest);
    }

    organizer(src, dest)
}

//============================================= Recursive function that sort files ============================================================
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

        //send file from src to dest
        sendFile(dest, category, src);
    } else {

        // get all files in the folder
        let childNames = getContent(src);

        for (let i = 0; i < childNames.length; i++) {
            if (childNames[i] == "organized_files" || childNames[i] == "This PC" || childNames[i] == "Recycle Bin") {  //folders to be avoided during sorting
                continue;
            }

            let childPath = path.join(src, childNames[i]);
            organizer(childPath, dest); // recursive  call to sort inner folder
        }
    }
}

//============================================= check src is file or not ============================================================

function checkWhetherFile(src) {
    return fs.lstatSync(src).isFile()
}

//============================================= get all files of src ============================================================

function getContent(src) {
    return fs.readdirSync(src);
}

//============================================= get extension of the file ============================================================
function getExtension(src) {
    let ext = src.split(".").pop();
    return ext;
}

//============================================= send file to dest ============================================================
function sendFile(dest, category, src) {
    let categoryPath = path.join(dest, category);
    // does category exist
    if (fs.existsSync(categoryPath) == false) {
        fs.mkdirSync(categoryPath);
    }

    let fName = path.basename(src);
    let cPath = path.join(categoryPath, fName);
    fs.rename(src, cPath, function (err) {  //Fn to move file
        if (err) throw err
    });
}

//============================================= get category of the file ============================================================
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



