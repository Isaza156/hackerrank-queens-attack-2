'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the queensAttack function below.
var N = 0;
var NE = 1;
var E = 2;
var SE = 3;
var S = 4;
var SW = 5;
var W = 6;
var NW = 7;

function getDirectionAndDistance(rQueen, cQueen, rObstacle, cObstacle) {
    if (rObstacle === rQueen) {
        return cObstacle < cQueen ? [W, cQueen - cObstacle] : [E, cObstacle - cQueen];
    } else if (cObstacle === cQueen) {
        return rObstacle < rQueen ? [S, rQueen - rObstacle] : [N, rObstacle - rQueen];
    } else if (Math.abs(rObstacle - rQueen) === Math.abs(cObstacle - cQueen)) {
        if (rObstacle < rQueen) {
            return cObstacle < cQueen ? [SW, cQueen - cObstacle] : [SE, cObstacle - cQueen];
        } else {
            return cObstacle < cQueen ? [NW, cQueen - cObstacle] : [NE, cObstacle - cQueen];
        }
    }

    return null;
}

function getDefaultDistances(n, rQueen, cQueen) {
    return [
        n - rQueen,
        Math.min(n - rQueen, n - cQueen),
        n - cQueen,
        Math.min(n - cQueen, rQueen - 1),
        rQueen - 1,
        Math.min(rQueen - 1, cQueen - 1),
        cQueen - 1,
        Math.min(cQueen - 1, n - rQueen)
    ];
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var k = parseInt(n_temp[1]);
    var rQueen_temp = readLine().split(' ');
    var rQueen = parseInt(rQueen_temp[0]);
    var cQueen = parseInt(rQueen_temp[1]);
    var closestObstacles = getDefaultDistances(n, rQueen, cQueen);
    for (var a0 = 0; a0 < k; a0++) {
        var rObstacle_temp = readLine().split(' ');
        var rObstacle = parseInt(rObstacle_temp[0]);
        var cObstacle = parseInt(rObstacle_temp[1]);
        var dnd = getDirectionAndDistance(rQueen, cQueen, rObstacle, cObstacle);
        if (dnd !== null) {
            var direction = dnd[0];
            var distance = dnd[1] - 1;
            closestObstacles[direction] = Math.min(closestObstacles[direction], distance);
        }
    }

    process.stdout.write(closestObstacles.reduce(function (a, b) { return a + b; }).toString());
}