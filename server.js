const express = require('express')
const cors = require('cors')
const app = express()
const port = 8086
const bodyParser = require('body-parser')
var path = require('path')
var fs = require('fs')
var qr = require('qr-image');

var serverUrl = 'https://editcuts.herokuapp.com'

const {
  buildShortcut,
  withVariables,
} = require('@joshfarrant/shortcuts-js')
const {
  addToVariable,
  ask,
  calculate,
  comment,
  continueShortcutInApp,
  count,
  getContentsOfUrl,
  getVariable,
  number,
  setLowPowerMode,
  setName,
  setTorch,
  setVariable,
  showResult,
  text,
  url,
  vibrateDevice,
  viewContentGraph,
  wait,
  waitToReturn

} = require('@joshfarrant/shortcuts-js/actions')

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.post('/createShortcut', (req, res) => {
  console.log('Request to create shortcut')
  console.log('Creating a shortcut')
  // console.log(req.body)

  const actions = []
  
  for (i in req.body.actions) {
    actions.push(actionMap[req.body.actions[i].actionName](req.body.actions[i]))
  }
  console.log('Building Shortcut', req.body.shortcutName)
  
  const shortcut = buildShortcut(actions);
  var shortcutPath = 'dist/static/shortcuts/'+req.body.shortcutName+'.shortcut'
  
  fs.writeFile(shortcutPath, shortcut, (err) => {
    if (err) {
      console.error('Something went wrong :(', err);
      return;
    }
    console.log(req.body.shortcutName+'.shortcut'+' created!');

    // Generating QR Code
    console.log('Generating QR code for ', req.body.shortcutName, '.shortcut')
    console.log('QR URL: shortcuts://import-workflow?url='+serverUrl+'/static/shortcuts/'+req.body.shortcutName+'.shortcut&name=' + req.body.shortcutName)
    var shortcutQr = qr.image('shortcuts://import-workflow?url='+serverUrl+'/static/shortcuts/'  +req.body.shortcutName+'.shortcut&name=' + req.body.shortcutName, { type: 'svg' });
    shortcutQr.pipe(require('fs').createWriteStream('dist/static/shortcuts/qr/'+req.body.shortcutName+'.svg'));
    shortcutQr.pipe(require('fs').createWriteStream('static/shortcuts/qr/'+req.body.shortcutName+'.svg'));
    console.log('QR code generated and saved to: ', 'dist/static/shortcuts/qr/'+req.body.shortcutName+'.svg')

  })

  res.send({
    "shortcutsResult": {
    "shortcutName": req.body.shortcutName,
    "shortcutPath": 'static/shortcuts/'+req.body.shortcutName+'.shortcut',
    "qrPath": 'static/shortcuts/qr/'+req.body.shortcutName+'.svg'
    }
  })
});

app.listen(process.env.PORT || 8086)
console.log('Shortcuts Web has started on port', process.env.PORT)
// app.listen(port, () => console.log(`Editcuts is listening on port ${port}!`))

const actionMap = {
   addToVariable: (action) => addToVariable({name: action.text}),
   ask: (action) => ask({inputType: action.inputType, defaultAnswer: action.defaultAnswer, question: action.text}),
   calculate: (action) => calculate({operand: parseInt(action.operand), operation: action.operation}),
   comment: (action) => comment({text: action.text}),
   continueShortcutInApp: (action) => continueShortcutInApp({}),
   count: (action) => count({type: action.text}),
   getContentsOfUrl: (action) => getContentsOfUrl({headers: '', method: action.method, requestBodyType: action.requestBodyType, requestBody: action.requestBody}),
   getVariable: (action) => getVariable({variable: action.text}),
   number: (action) => number({number: parseInt(action.number)}),
   setLowPowerMode: (action) => setLowPowerMode({value: action.value}),
   setName : (action) => setName({name: action.text, dontIncludeFileExtension: action.dontIncludeFileExtension}),
   setTorch: (action) => setTorch({setting: action.setting}),
   setVariable: (action) => setVariable({name: action.text}),
   showResult: (action) => showResult({text: action.text}),
   text: (action) => text({text: action.text}),
   url: (action) => url({url: action.url}),
   vibrateDevice: (action) => vibrateDevice({}),
   viewContentGraph: (action) => viewContentGraph({}),
   wait: (action) => wait({time: parseInt(action.time)}),
   waitToReturn: (action) => waitToReturn({})
}