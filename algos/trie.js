class Node {
	constructor(key) {
		this.key = key;
		this.parent = null;
		this.children = {}; // this.children = {'A': { key: 'A', parent: root, children: { P: {key: p, parent 'A', ...}}, isEnd: false} }
		this.isEnd = false;
	}

    // iterate backwords through the parents of our ultimate node to return our fetched word.
	getWord() {
		let completeWord = [];
		let node = this;
		
		while (node.key !== null) {
			completeWord.unshift(node.key);
			node = node.parent; 
		}
		console.log(completeWord)
		return completeWord.join('');
	}
}

class Trie {
    // init our Trie with a null node
	constructor() {
		this.root = new Node(null);
	}

	insert(word) { 
		let node = this.root;

		for (let char of word) { 
			if (!node.children[char]) {
				node.children[char] = new Node(char);
				node.children[char].parent = node;
			}

			node = node.children[char];


		}

		node.isEnd = true;

	}

	search(word) {
		let node = this.root;

		for (let char of word) {
			if (node.children[char]) {
				node = node.children[char];
			} else {
				return 'Word Not Found'
			}
		}

		return `String contained. End of word: ${node.isEnd}`;
	}

	searchPrefix(prefix) {
		let node = this.root;
		let words = [];

		for (let char of prefix) {
			if (node.children[char]) {
				node = node.children[char]
			} else {
				return 'No Words with this Prefix'
			}
		}

		this.digDeeper(node, words)
		
		return words;

	}


	digDeeper(node, words) {
		if (node.isEnd) {
			words.push(node.getWord())
		}

		for (let child in node.children) {
			this.digDeeper(node.children[child], words);
		}
	}


}


const trie = new Trie()

trie.insert('foo')
trie.insert('bar')
trie.insert('barcade')
trie.insert('football')

trie.search('ba') // String contained. End of word: False
trie.search('bar') // String contained. End of word: True
trie.searchPrefix('f') // ['foo', 'football'] 
trie.searchPrefix('barc') // ['barcade']


