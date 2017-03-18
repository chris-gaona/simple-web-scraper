const fs = require('fs');
const Xray = require('x-ray');
const xray = new Xray();
const Nightmare = require('nightmare');

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

// // XRAY NEW.YCOMBINATOR
// xray('https://news.ycombinator.com/', '.athing',
//     [{
//         rank: '.rank',
//         title: 'td:nth-child(3) a',
//         link: 'td:nth-child(3) a@href'
//     }]
// )
//     .paginate('a[rel="nofollow"]:last-child@href')
//     .limit(3)
//     .write('./results.json');

// Use nightmare to scrape angular type app
new Nightmare()
    .goto('http://weather.com')
    .evaluate(function(){
        return document.querySelector('.temperature').innerText;
    }, function(temperature){
        console.log(temperature);
    })
    .run();