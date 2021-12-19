const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {
  constructor() {
    this.head = null; 
}

  root() {
      return this.head;
  }

  add(data) {
    const node = this.head;
    if (node === null) {
      this.head = new Node(data);
      return;
    } else {
      const searchTree = function(node) {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else if (node.left !== null) {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else if (node.right !== null) {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(node);
    }
}


  has(data) {
    let current = this.head;
    while (current) {
      if (data === current.data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }

  find(data) {
    let current = this.head;
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }

  remove(data)
  {
    const removeNode = function(node, data) {
        if (node == null) {
          return null;
        }
        if (data == node.data) {
         
          if (node.left == null && node.right == null) {
            return null;
          }
          
          if (node.left == null) {
            return node.right;
          }
          
          if (node.right == null) {
            return node.left;
          }
          
          var tempNode = node.right;
          while (tempNode.left !== null) {
            tempNode = tempNode.left;
          }
          node.data = tempNode.data;
          node.right = removeNode(node.right, tempNode.data);
          return node;
        } else if (data < node.data) {
          node.left = removeNode(node.left, data);
          return node;
        } else {
          node.right = removeNode(node.right, data);
          return node;
        }
      }
      this.head = removeNode(this.head, data);
  }


  min()
  {
    let current = this.head;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }

  max() 
  {
    let current = this.head;
    while (current.right !== null) {
      current = current.right;
}
return current.data;
  }
};

