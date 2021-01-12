'use strict'

// This is a simple data structure for the graph.  Each node in the
// graph has a name (eg BEG, 1, 2, ...).  Each node is then followed
// by an array of nodes that it can walk to (eg the BEG node can walk
// to the nodes 1 or 2, node 1 can walk to node 3, et al).
var graph = {
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
    'END': []
};

// Solutions contains all the possible ways to traverse the graph
var solutions = [];

main();

function main() {
    console.log(graph);

    // Start walking the graph using the nodes that the BEG node can
    // traverse to.  The subsequent transitions will all be handled
    // using recursion within the traverse function.
    for (let target of graph.BEG) {
        traverse(graph[target], [ target ]);
    }

    // Print out all the possible solutions (with a counter)
    for (let i in solutions) {
        console.log(parseInt(i) + 1 + ': ' + solutions[i]);
    }
}

function traverse(targetNodes, traversedNodes) {

    for (let targetNode of targetNodes) {

        // The next node is the goal node, so the current set of
        // traversedNodes represents a valid traversal path
        if (targetNode === 'END') {
            solutions.push(traversedNodes);
            return;
        }

        // This isn't a valid path because we cannot visit a node
        // twice
        if (traversedNodes.includes(targetNode)) {
            continue;
        }

        // In this situation, the target node is a valid option, so...
        // 1. Create a copy of the traversed nodes (representing a
        //    potentially new partial solution)
        // 2. Add the target node to the new traversed nodes array
        // 3. Make a recurive call to traverse, pass the new set of
        //    target nodes to consider walking, and the copy of the
        //    traversed nodes (including the new node we just added)
        let traversedNodesCopy = JSON.parse(JSON.stringify(traversedNodes));
        traversedNodesCopy.push(targetNode);
        traverse(graph[targetNode], traversedNodesCopy);
    }
}
