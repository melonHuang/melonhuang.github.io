var inline = require('inline-source')
  , fs = require('fs')
  , path = require('path')
  , htmlpath = path.resolve('build/index.html');

var destPath = path.resolve('build/index.html')

inline(htmlpath, {
  attribute: false,
  compress: true,
  rootpath: path.resolve('./build'),
  // Skip all css types and png formats
}, function (err, html) {
  // Do something with html
  if(err) {
    console.error(err)
  } else {
    fs.writeFile(destPath, html, err => {
      if(err) {
        console.error(err)
      }
      console.log('Inline build success')
    })
  }
});
