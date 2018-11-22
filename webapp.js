const express = require('express')
var path = require('path')
var fs = require('fs')
var qr = require('qr-image');
const cors = require('cors')

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

var rootserver = require('http').createServer(root);
var webapp_io = require('socket.io')(rootserver,{});

var root = express()
root.use(cors())

// Setup our web app
root.use('/',express.static(path.join(__dirname, 'dist')));

// Merge everything together
root.get('/hey',function(req,res){
    return res.send('Hello')
})
root.use('/',express.static(path.join(__dirname, 'dist')))

root.get('*',function(req,res){
    console.log('Catch all')
    return res.redirect('/')
})


webapp_io.on('connection', function(socket){
    console.log('New connection to the webapp socket')
    socket.on('createShortcut',function(data){
        console.log('Creating a shortcut')
        console.log(data)

        const actions = []
        
        for (i in data.actions) {
          actions.push(actionMap[data.actions[i].actionName](data.actions[i]))
        }
        console.log('Building Shortcut', data.shortcutName)
        
        const shortcut = buildShortcut(actions);
        var shortcutPath = 'dist/static/shortcuts/'+data.shortcutName+'.shortcut'
        
        fs.writeFile(shortcutPath, shortcut, (err) => {
          if (err) {
            console.error('Something went wrong :(', err);
            return;
        }
        console.log(data.shortcutName+'.shortcut'+' created!');

        // Generating QR Code
        console.log('Generating QR code for ', data.shortcutName, '.shortcut')
        var shortcutQr = qr.image('shortcuts://import-workflow?url=http://45.76.114.106/static/shortcuts/'  +data.shortcutName+'.shortcut&name=' + data.shortcutName, { type: 'svg' });
        shortcutQr.pipe(require('fs').createWriteStream('dist/static/shortcuts/qr/'+data.shortcutName+'.svg'));
        console.log('QR code generated and saved to: ', 'dist/static/shortcuts/qr/'+data.shortcutName+'.svg')

        socket.emit('shortcut-result', data.shortcutName+'.shortcut')
    });
    })

})

rootserver.listen(8086)
console.log('WebApp successfully started')

const actionMap = {
   comment: (action) => comment({text: action.text}),
   number: (action) => number({number: parseInt(action.number)}),
   calculate: (action) => calculate({operand: parseInt(action.operand), operation: action.operation}),
   showResult: (action) => showResult({text: action.text}),
   url: (action) => url({url: action.url}),
   getContentsOfUrl: (action) => getContentsOfUrl({headers: '', method: action.method, requestBodyType: action.requestBodyType, requestBody: action.requestBody}),
}
