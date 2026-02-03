const fs = require('fs');

// fs.writeFile("hey.txt", "Hello everyone.", function(err) {
//     if(err) console.error(err);
//     else console.log('Done.');
// })

// fs.appendFile("hey.txt", " My Name is Yash Mahajan.", function(err) {
//     if(err) console.error(err);
//     else console.log("Done.");
// })

// fs.rename("hey.txt", "yash.txt", function(err) {
//     if(err) console.error(err);
//     else console.log("Done - File name are changed.");
// })

// fs.copyFile("yash.txt", "./copy/copy02.txt", function(err) {
//     // if(err) console.error(err.message);
//     if(err) console.error(err);
//     else console.log("Done.");
// })

// fs.unlink("./copy/copy01.txt", function(err) {
//     if(err) console.error(err);
//     else console.log("Removed");
// })

// fs.rmdir("./copy02", function(err) {
//     if(err) console.error(err);
//     else console.log("removed..")
// })

// fs.rmdir("./copy03", {recursive: true}, function(err) {
//     if(err) console.error(err);
//     else console.log("removed..")
// })

// fs.rm("./copy2", {recursive: true}, function(err) {
//     if(err) console.error(err);
//     else console.log("removee..");
// })

// fs.readFile("yash.txt", "utf-8", function (err, data) {
//     if (err) console.error(err);
//     else console.log("File Content :", data);
// })