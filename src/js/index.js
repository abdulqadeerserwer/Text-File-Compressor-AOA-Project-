import {findFreq, getBinaryCodes, assignCodes, binaryCodes, peek} from './model/encrypting.js';
import PriorityQueue from './model/PriorityQueue.js';
import Tree from './model/Tree.js';

var str = `aaabbbbcccccdddddddddd`;

let o = findFreq(str);

var obj = new PriorityQueue();

obj.enqueueObj(o);

var l = new Tree();

var root = l.constructTree(obj);

assignCodes(root);

var lo = getBinaryCodes(root);

console.log(`For the given String (${str}) the binary codes for their alphabets are : `);
lo.forEach((value) => {
    console.log(`${value[0]} : ${value.value}`);
});


