import Node  from "./Node.js"

class BST {
    #root

    constructor() {
        this.#root = null
    }

    add(value) {
        if (this.#root == null){
            this.#root = new Node(value)
            if (this.#root != null) return true
        }
        else
            return this.insertNode(this.#root, value)
    }

    insertNode(node, value){
        if (value.lastName < node.value.lastName){
            if (node.left == null){
                node.left = new Node(value)
                if (node.left != null) return true
            }
            else
                return this.insertNode(node.left, value)
        } else {
            if (node.right == null){
                node.right = new Node(value)
                if (node.right != null) return true
            }
            else
                return this.insertNode(node.right, value)
        }
    }

    search(apellido) {
        return this.searchNode(this.#root, apellido);
    }

    searchNode(node, apellido) {
        if (node === null || node.value.lastName === apellido) {
            return node
        } else if (apellido < node.value.apellido) {
            return this.searchNode(node.left, apellido)
        } else {
            return this.searchNode(node.right, apellido)
        }
    }

    inOrder(callback) {
        this.inOrderNode(this.#root, callback);
    }

    inOrderNode(node, callback) {
        if (node === null) { 
           return 
        } else {
            this.inOrderNode(node.left, callback)
            callback(node.value)
            this.inOrderNode(node.right, callback)
        }
    }

    findMax() {
        return this.findMaxNode(this.#root);
    }
    
    findMaxNode(node) {
        if (node === null) {
            return null;
        } else if (node.right === null) {
            return node.value;
        } else {
            return this.findMaxNode(node.right);
        }
    }

    finMin(node) {
        return this.findMinNode(this.#root)
    }

    findMinNode(node) {
        if (node === null) {
            return null;
        } else if (node.left === null) {
            return node.value;
        } else { 
            return this.findMinNode(node.left)
        }
    }
}







export default BST