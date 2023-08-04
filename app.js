// Dependencies
const fs = require("fs");
const heicConvert = require("heic-convert");

// set to true if you want to delete the .heic files after conversion
let deleteAfterConversion = false;

(async () => {
  try {
    // directory where the .heic files are located
    const DIR = `/Users/tahsinahmed/Pictures/[FOLDER_NAME]`;

    // fetch all files in the directory with .heic extension
    let heic = fs.readdirSync(DIR).filter((file) => file.endsWith(".heic"));
    let HEIC = fs.readdirSync(DIR).filter((file) => file.endsWith(".HEIC"));

    let files = [...heic, ...HEIC];

    const OUTPUT = `/Users/tahsinahmed/Pictures/[FOLDER_NAME]/output`;

    // create output directory if it doesn't exist
    if (!fs.existsSync(OUTPUT)) {
      fs.mkdirSync(OUTPUT);
    }

    // convert all .heic files to .jpg
    for (let i = 0; i < files.length; i++) {
      // read the .heic file
      const inputBuffer = fs.readFileSync(`${DIR}/${files[i]}`);

      // convert to .jpg
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: "JPEG",
      });

      // get the filename without extension
      let filename = files[i];
      filename = filename.split(".")[0];

      // write the .jpg file
      fs.writeFileSync(`${OUTPUT}/${filename}.jpg`, outputBuffer);
      console.log(`${filename} converted to ${filename}.jpg`);

      // delete the .heic file if deleteAfterConversion is set to true
      if (deleteAfterConversion) {
        fs.unlinkSync(`${DIR}/${files[i]}`);
        console.log(`${filename} deleted`);
      }
    }
  } catch (error) {
    console.log(error);
  }
})();
