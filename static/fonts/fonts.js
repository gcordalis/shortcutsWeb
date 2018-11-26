var fs = require("fs");

fs.readFile("WorkflowGlyphs.svg", "utf8", function read(err, data) {
  if (err) {
    throw err;
  }
  content = data;

  // Invoke the next step here however you like
  processFile(); // Or put the next step in a function and invoke it
});

function processFile() {
  console.log(content);
}
