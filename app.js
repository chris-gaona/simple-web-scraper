var fs = require('fs');
var Xray = require('x-ray');
var xray = new Xray();

// xray('http://google.com', 'a',
//     [{
//         a: '',
//         href: '@href',
//         css: '@class'
//     }]
// )
//     .write('results.json');

xray('https://en.wikipedia.org/wiki/Pluto', 'img',
    [{
        img: '',
        src: '@src',
        width: '@width',
        height: '@height'
    }]
)
(function(err, results){
    results = results.filter(function(image){
        return image.width > 100;
    });
    fs.writeFile("./results.json", JSON.stringify(results, null, '\t'));
});
