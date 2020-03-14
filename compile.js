'use strict';

const fs = require('fs');
const exec = require('child_process').exec;

const indexTemplate = fs.readFileSync('index.template.html').toString();

var totalJokes = 1;

exec('ls db', function (err, stdout, stderr) {
    if (stdout) {
        var listOfJokes = stdout.trim().split('\n');
        var totalJokes = stdout.trim().split('\n').length;
        console.log('Total jokes: ' + totalJokes);
        fs.writeFileSync('index.html', indexTemplate.replace(/__TOTAL_JOKES__/g, totalJokes).replace(/__TOP_JOKE_ID__/g, totalJokes-1));
    } else {
        console.error('Error!');
        exit(1);
    };
});
