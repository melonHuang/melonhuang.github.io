var path = require('path'),
  fontelloUpdate = require('fontello-update')

var configFile = './src/css/fontello/config.json'
var fontFile = './src/css/fontello/font'
var cssFile = './src/css/fontello/css'

var command = process.argv[2] || 'update'

switch(command) {
  case 'update':
    update()
    break
  case 'edit':
    edit()
    break;
}

function update() {
  fontelloUpdate({
    config: configFile,
    fonts: fontFile,
    css: cssFile
  })
}

function edit() {
  fontelloUpdate({
    config: configFile,
    open: true
  })
}
