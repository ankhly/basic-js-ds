const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
	constructor(value) {
		this.value = value;
		this.left = null;
		this.right = null;
	}
}

class BinarySearchTree {
	constructor() {
		this.rootTree = null;
	}
	root() {
		return this.rootTree;

	}

	add(value) {
		this.rootTree = add(this.rootTree, value)
		function add(node, value) {
			if (!node) {
				return new Node(value);
			}
			if (node.value === value) {
				return node;
			}
			if (value < node.value) {
				node.left = add(node.left, value)
			} else {
				node.right = add(node.right, value)
			}
			return node;
		}
		//	throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	has(value) {
		return search(this.rootTree, value);
		function search(node, value) {
			if (!node) {
				return false;
			}
			if (node.value === value) {
				return true;
			}
			if (value < node.value) {
				return search(node.left, value);
			} else {
				return search(node.right, value);
			}
		}
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	find(value) {
		return search(this.rootTree, value);
		function search(node, value) {
			if (!node) {
				return null;
			}
			if (node.value === value) {
				return true;
			}
			if (value < node.value) {
				return search(node.left, value);
			} else {
				return search(node.right, value);
			}
		}
		//	throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	remove(value) {
		this.rootTree = rem(this.rootTree, value)
		function rem(node, value) {
			if (!node) {
				return null;
			}
			if (value < node.value) {
				node.left = rem(node.left, value);
				return node;
			} else if (value > node.value) {
				node.right = rem(node.right, value);
				return node;
			} else {
				if (!node.left && !node.right) {
					return null;
				}
				if (!node.left) {
					node = node.right;
					return node;
				}
				if (!node.right) {
					node = node.left;
					return node;
				}
				let minRight = node.right;
				while (minRight.left) {
					minRight = minRight.left;
				}
				node.value = minRight.value;
				node.right = rem(node.right, minRight.value);
				return node;
			}
		}
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	min() {
		if (!this.rootTree) {
			return;
		}
		let node = this.rootTree;
		while (node.left) {
			node = node.left;
		}
		return node.value;
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	max() {
		if (!this.rootTree) {
			return;
		}
		let node = this.rootTree;
		while (node.right) {
			node = node.right;
		}
		return node.value;
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}

module.exports = {
	BinarySearchTree
};