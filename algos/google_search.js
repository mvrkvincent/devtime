class Node {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

const a = new Node('a'); // {val: 'a', left: null, right: null}
const b = new Node('b');
const c = new Node('c');
const d = new Node('d');
const e = new Node('e');
const f = new Node('f');


a.left = b;
a.right = c; 
b.left = d;
b.right = e;
c.right = f;

const allNodesDepth = root => {
    if (!root) return [];
    const result = [];

    const stack = [root]; //  stack = []

    while (stack.length) {
        const cur = stack.pop(); // cur = f, val = f
        result.push(cur.val) // res = [a,b,d,e,c,f]
        if (cur.right) stack.push(cur.right);
        if (cur.left) stack.push(cur.left);
    };

    return result; // [a,b, d, e, c, f]
};

const allNodesDepthRec = (root) => { // a
    if (!root) return [];
    // root.val = b
    const left = allNodesDepthRec(root.left); // []
    // root.val = c
    const right = allNodesDepthRec(root.right); // []

    return [root.val, ...left, ...right] // [a, b, c]
};

const allNodeBreadth = root => {
    if (!root) return [];
    // <= [] <= 
    const res = [];
    const queue = [root];

    while (queue.length) {
        const cur = queue.shift();
        res.push(cur.val);
        if (cur.left) queue.push(cur.left)
        if (cur.right) queue.push(cur.right)
    }

    return res;
};



console.log(allNodesDepth(a))
console.log(allNodeBreadth(a))


const bottomRight = root => {
    const queue = [root];
    let cur = null;
    while (queue.length) {
        cur = queue.shift();
        if (cur.left) queue.push(cur.left); 
        if (cur.right) queue.push(cur.right); 
    }
    return cur.val
};

console.log(bottomRight(a))