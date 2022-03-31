// const graph = {
//     a: ['b', 'c'],
//     b: ['d'],
//     c: ['b', 'e'],
//     d: [],
//     e: [],
//     f: ['c']
// };

// // given a direct acyclic graph determine a path btwn 2 nodes
// // Is this cyclic or acyclic
// // is start in graph 

// const hasPathDepth = (graph, start, end) => {
//     if (start === end) return true;

//     for (let neighbor of graph[start]) {
//         const res = hasPathDepth(graph, neighbor, end);
//         if (res) return true; 
//     };

//     return false;
// };

// const hasPathBreadth = (graph, start, end) => {
//     const queue = [start];

//     while (queue.length) {
//         const current = queue.shift();
//         // check start v end quality
//         // iterate through neighbors
//         if (current === end) return true;

//         for (let node of graph[current]) {
//             queue.push(node);
//         };
//     };

//     return false;
// };

// const edges = [
//     ['d', 'e'],
//     ['a', 'd'],
//     ['b', 'a'],
//     ['a', 'c'],
//     ['f', 'g']
// ];

// // toGraph
// // path traversal

// const hasUndirectedPath = (edges,a, b) => {
//     const graph = toGraph(edges);
//     const visited = new Set();
//     console.log(traverse(graph, a, b, visited))
// };

// const traverse = (graph, start, end, visited) => {
//     if (visited.has(start)) return false;
//     if (start === end) return true;

//     visited.add(start);

//     for (let neighbor of graph[start]) {
//         const res = traverse(graph, neighbor, end, visited);
//         if (res) return true; 
//     };

//     return false;
// };


// const toGraph = edges => {
//     const graph = {};
//     edges.forEach(edge => {
//         const [a, b] = edge;
//         a in graph ? graph[a].push(b) : graph[a] = [b];
//         b in graph ? graph[b].push(a) : graph[b] = [a];
//     })
//     return graph;
// };

// hasUndirectedPath(edges, 'a', 'b')

const grid = [
    ['W', 'S', 'W', 'W', 'W'],
    ['W', 'S', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'W', 'W'],
    ['W', 'W', 'W', 'S', 'S'],
    ['S', 'W', 'W', 'S', 'S'],
    ['S', 'W', 'W', 'W', 'W'],
];

const grid2 = [
    ['S', 'S', 'S', 'S', 'S'],

];

const shipCount = grid => {
    let result = 0
    const visited = new Set();

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            // traverse grid find ships
            const coords = `${row},${col}`
            if (!visited.has(coords)) {
                const res = traverse(grid, row, col, visited);
                if (res) result++
            };
        };
    };

    console.log(visited)
    return result;
};

const inBound = (grid, row, col) => {
    const isInRow = 0 <= row && row < grid.length;
    const isInCol = 0 <= col && col < grid[0].length;

    return isInRow && isInCol;
};

// const traverse = (grid, row, col, visited) => {
//     // Ignore water && check bounds
//     if (!inBound(grid, row, col) || grid[row][col] === 'W') return false;

//     // dont visit nodes twice
//     const coords = `${row},${col}`
//     if (visited.has(coords)) return false;
//     visited.add(coords);

//     //check surrounding nodes
//     traverse(grid, row-1, col, visited);   
//     traverse(grid, row+1, col, visited);   
//     traverse(grid, row, col-1, visited);   
//     traverse(grid, row, col+1, visited);   

//     // return
//     return true
// }; 

const traverse = (grid, row, col, visited) => {
    const coords = `${row},${col}`
    if (visited.has(coords) || grid[row][col] === 'W') return false;
    
    const stack = [[row, col]];

    while (stack.length) {
        const [r, c] = stack.pop();
        const curCoords = `${r},${c}`;

        if (!inBound(grid, r, c) || visited.has(curCoords) || grid[r][c] === 'W') continue; 

        visited.add(curCoords);

        stack.push([row-1, col])
        stack.push([row+1, col])
        stack.push([row, col+1])
        stack.push([row, col-1])
    };

    return true;
};

console.log(shipCount(grid));