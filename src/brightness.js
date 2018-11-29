// Only used to create the .shortcut file
const fs = require("fs");

const { buildShortcut } = require("@joshfarrant/shortcuts-js");
const { setBrightness } = require("@joshfarrant/shortcuts-js/actions");

// Define our list of actions
const actions = [
  setBrightness({
    brightness: 25
  })
];

// Generate the Shortcut data
const shortcut = buildShortcut(actions);

// Write the Shortcut to a file in the current directory
fs.writeFile("Brightness.shortcut", shortcut, err => {
  if (err) {
    console.error("Something went wrong :(", err);
    return;
  }
  console.log("Shortcut created!");
});
