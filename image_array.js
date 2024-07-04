
const fs = require('fs');
const dir = 'C:\Users\skate\Documents\GitHub\site_main\art';

fs.readdir(dir, (err, files) => {
  console.log(files.length);
});
//get the number of images in the folder
//for each image in the folder, grab its path

