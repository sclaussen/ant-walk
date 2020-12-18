'use strict'


var solutions = [];
var transitions = {
    'BEG': [ 1, 2 ],
    1: [ 3 ],
    2: [ 4 ],
    3: [ 4, 5 ],
    4: [ 3, 6 ],
    5: [ 6, 7 ],
    6: [ 5, 8 ],
    7: [ 8, 9 ],
    8: [ 7, 10 ],
    9: [ 10, 11 ],
    10: [ 9, 12 ],
    11: [ 'END' ],
    12: [ 'END' ],
};


main();


function main() {
    console.log(transitions);

    for (let target of transitions.BEG) {
        let path = walk(target, transitions[target], [ target ]);
    }

    for (let i in solutions) {
        console.log(parseInt(i) + 1 + ': ' + solutions[i]);
    }
}


function walk(source, targets, path) {

    for (let target of targets) {

        // Found a solution
        if (target === 'END') {
            solutions.push(path);
            return;
        }

        // Don't hit a node twice
        if (path.includes(target)) {
            continue;
        }

        let newPath = JSON.parse(JSON.stringify(path));
        newPath.push(target);
        walk(target, transitions[target], newPath);
    }
}
