// Only used to create the .shortcut file
const fs = require('fs');

const {
  buildShortcut,
  withVariables,
} = require('@joshfarrant/shortcuts-js');
const {
  calculate,
  comment,
  number,
  showResult
} = require('@joshfarrant/shortcuts-js/actions');

// We'll use this later to reference the output of a calculation
let calcId;

// Define our list of actions
const actions = [
  comment({
    text: 'Hello, world!',
  }),
  number({
    number: 42,
  }),
  calculate({
    operand: 3,
    operation: '/',
  }, (id) => {
    // We'll use this again in a moment
    calcId = id;
  }),
  showResult({
    /**
     * We can use the result of the calculation in this Shortcuts's input
     * by passing the string to the 'withVariables' tag function
     */
    text: withVariables`Total is ${calcId}!`,
  }),
];

var shortcutIcon = {
  color: 463140863,
  glyph: 59479
}

// Generate the Shortcut data
const shortcut = buildShortcut(actions, shortcutIcon);

// Write the Shortcut to a file in the current directory
fs.writeFile('My Fancy Shortcut.shortcut', shortcut, (err) => {
  if (err) {
    console.error('Something went wrong :(', err);
    return;
  }
  console.log('Shortcut created!');
});