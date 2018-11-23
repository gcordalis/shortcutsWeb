const express = require('express')
const cors = require('cors')
const app = express()
const port = 8086
const bodyParser = require('body-parser')
var path = require('path')
var fs = require('fs')
var qr = require('qr-image');

const {
  buildShortcut,
  withVariables,
} = require('@joshfarrant/shortcuts-js')
const {
  calculate,
  comment,
  number,
  showResult,
  url,
  getContentsOfUrl
} = require('@joshfarrant/shortcuts-js/actions')

app.use(express.static(__dirname + '/dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors())

app.post('/createShortcut', (req, res) => {
  console.log('Request to create shortcut')
  console.log('Creating a shortcut')

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
    var shortcutQr = qr.image('shortcuts://import-workflow?url='+process.env.SERVER_URL+'/static/shortcuts/'  +req.body.shortcutName+'.shortcut&name=' + req.body.shortcutName, { type: 'svg' });
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
console.log('Started on', process.env.PORT)
// app.listen(port, () => console.log(`Editcuts is listening on port ${port}!`))

const actionMap = {
   comment: (action) => comment({text: action.text}),
   number: (action) => number({number: parseInt(action.number)}),
   calculate: (action) => calculate({operand: parseInt(action.operand), operation: action.operation}),
   showResult: (action) => showResult({text: action.text}),
   url: (action) => url({url: action.url}),
   getContentsOfUrl: (action) => getContentsOfUrl({headers: '', method: action.method, requestBodyType: action.requestBodyType, requestBody: action.requestBody}),
}