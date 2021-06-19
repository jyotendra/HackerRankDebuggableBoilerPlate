# HackerRank JS Practice Boilerplate

Do you find it difficult to debug problem sets offered in HackerRank ? It certainly is difficult to debug the program of web IDE they provide, using just console statements.
Hoping to solve that simple problem with this project.

# HackerRank working mechanism

[Here's](https://www.hackerrank.com/challenges/a-very-big-sum/problem) a code snippet from their JS template, which I find to be common among most of the problem sets:

```
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'aVeryBigSum' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER_ARRAY ar as parameter.
 */

function aVeryBigSum(ar) {
    // Write your code here

}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const arCount = parseInt(readLine().trim(), 10);

    const ar = readLine().replace(/\s+$/g, '').split(' ').map(arTemp => parseInt(arTemp, 10));

    const result = aVeryBigSum(ar);

    ws.write(result + '\n');

    ws.end();
}
```

It can be understood that their automated test runner provides inputs over "stdin" which are then split, parsed and transferred to the function which you need to code.
This entire environment has been stimulated on local where a runner.js takes input test cases from text files, spawns a new process with your test code and transfers the args to it. The results that your test-code generates are written back to results folders, in txt format again.

## How To Use

Simply paste your code template inside of "testScript.js", write your test-cases in text files under "cases" folder, with ".txt" extension and you should be good to go.
Finally use `npm run test`

## How to debug

If using VsCode, simply apply your breakpoints, go to the debug tab and "launch program".
