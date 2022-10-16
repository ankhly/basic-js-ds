const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
	constructor() {
		this.rootTree = null;
	}
	root() {
		return this.rootTree;
	}

	add(data) {
		this.rootTree = add(this.rootTree, data)
		function add(node, data) {
			if (!node) {
				return new Node(data);
			}
			if (node.data === data) {
				return node;
			}
			if (data < node.data) {
				node.left = add(node.left, data)
			} else {
				node.right = add(node.right, data)
			}
			return node;
		}
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	has(data) {
		return search(this.rootTree, data);
		function search(node, data) {
			if (!node) {
				return false;
			}
			if (node.data === data) {
				return true;
			}
			if (data < node.data) {
				return search(node.left, data);
			} else {
				return search(node.right, data);
			}
		}
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	find(data) {
		return searchF(this.rootTree, data);
		function searchF(node, data) {
			if (!node) {
				return null;
			}
			if (node.data === data) {
				return node;
			}
			if (data < node.data) {
				return searchF(node.left, data);
			} else {
				return searchF(node.right, data);
			}
		}
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}

	remove(data) {
		this.rootTree = rem(this.rootTree, data)
		function rem(node, data) {
			if (!node) {
				return null;
			}
			if (data < node.data) {
				node.left = rem(node.left, data);
				return node;
			} else if (data > node.data) {
				node.right = rem(node.right, data);
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
				node.data = minRight.data;
				node.right = rem(node.right, minRight.data);
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
		return node.data;
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
		return node.data;
		//throw new NotImplementedError('Not implemented');
		// remove line with error and write your code here
	}
}

module.exports = {
	BinarySearchTree
};