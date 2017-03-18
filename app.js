var fs = require('fs');
var Xray = require('x-ray');
var xray = new Xray();

// XRAY GOOGLE.COM
// xray('http://google.com', 'a',
//     [{
//         a: '',
//         href: '@href',
//         css: '@class'
//     }]
// )
//     .write('results.json');

// XRAY WIKIPEDIA
// xray('https://en.wikipedia.org/wiki/Pluto', 'img',
//     [{
//         img: '',
//         src: '@src',
//         width: '@width',
//         height: '@height'
//     }]
// )
// (function(err, results){
//     results = results.filter(function(image){
//         return image.width > 100;
//     });
//     fs.writeFile("./results.json", JSON.stringify(results, null, '\t'));
// });

// XRAY NEW.YCOMBINATOR
xray('https://news.ycombinator.com/', '.athing',
    [{
        rank: '.rank',
        title: 'td:nth-child(3) a',
        link: 'td:nth-child(3) a@href'
    }]
)
    .paginate('a[rel="nofollow"]:last-child@href')
    .limit(3)
    .write('./results.json');