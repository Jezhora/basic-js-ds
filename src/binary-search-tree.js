const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this.addNode(this.rootNode, data);
  }

  addNode(node, data) {
    if (node === null) {
      return { data, left: null, right: null };
    }

    if (data < node.data) {
      node.left = this.addNode(node.left, data);
    } else if (data > node.data) {
      node.right = this.addNode(node.right, data);
    }

    return node;
  }

  has(data) {
    return this.hasNode(this.rootNode, data);
  }

  hasNode(node, data) {
    if (node === null) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this.hasNode(node.left, data);
    } else {
      return this.hasNode(node.right, data);
    }
  }

  find(data) {
    return this.findNode(this.rootNode, data);
  }

  findNode(node, data) {
    if (node === null || data === node.data) {
      return node;
    }

    if (data < node.data) {
      return this.findNode(node.left, data);
    } else {
      return this.findNode(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this.removeNode(this.rootNode, data);
  }

  removeNode(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minRightNode = this.findMin(node.right);
        node.data = minRightNode.data;
        node.right = this.removeNode(node.right, minRightNode.data);
        return node;
      }
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
    } else {
      node.right = this.removeNode(node.right, data);
    }

    return node;
  }

  findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }

  min() {
    const minNode = this.findMin(this.rootNode);
    return minNode ? minNode.data : null;
  }

  findMax(node) {
    while (node.right !== null) {
      node = node.right;
    }
    return node;
  }

  max() {
    const maxNode = this.findMax(this.rootNode);
    return maxNode ? maxNode.data : null;
  }
}

module.exports = {
  BinarySearchTree
};