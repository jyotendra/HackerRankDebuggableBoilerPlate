'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function (inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function () {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}


function getDiagonal(arr, firstElementPosition, kernel) {
    let currentPosition = firstElementPosition;
    const diagonalElements = [];
    while (currentPosition[1] >= 0) {
        diagonalElements.push(arr[currentPosition[0]][currentPosition[1]]);
        currentPosition = [currentPosition[0] + kernel[0], currentPosition[1] + kernel[1]]
    }
    return diagonalElements;
}

function getSum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
}

/*
 * Complete the 'diagonalDifference' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY arr as parameter.
 */

function diagonalDifference(arr) {
    // Write your code here
    const squareSize = arr.length - 1;
    const topDiagonal = getDiagonal(arr, [0, squareSize], [1, -1]);
    const bottomDiagonal = getDiagonal(arr, [squareSize, squareSize], [-1, -1]);
    return Math.abs(getSum(topDiagonal) - getSum(bottomDiagonal));
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    let arr = Array(n);

    for (let i = 0; i < n; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }

    const result = diagonalDifference(arr);

    ws.write(result + '\n');

    ws.end();
}
