import * as fs from 'fs-extra';
import * as path from 'path';

const dirPath = path.resolve(`$(__dirname)`, '../paths/');
console.log(dirPath);
const reader = new FileReader();
reader.readAsText("")
fs.readdir(dirPath, function (err, files) {
    if (err) {
        return console.log("err" + err);
    }

    files.forEach(function (fileName: string) {
        console.log("file-", fileName);
        console.log(files);
    });
});

