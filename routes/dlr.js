const fs = require("fs");

function dynamicallyLoadRoutes(app) {
  let filenames = fs.readdirSync(__dirname);
  console.log(filenames.length);
  filenames.forEach((filename) => {
    if (
      filename === "DLR.js" ||
      filename.split(".")[1] !== "js"
    ) {
      return;
    }
    let jsModule = filename.split(".")[0];
    require("./" + jsModule)(app);
  });
}

module.exports = dynamicallyLoadRoutes;