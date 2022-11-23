import Node from "./LinkedListNode";

class LinkedList {
  constructor() {
    this.list = null;
  }
  append(value) {
    if (!this.list) {
      this.list = new Node(value);
    } else {
      let node = this.tail();
      node.nextNode = new Node(value);
    }
  }
  prepend(value) {
    if (this.list) {
      let node = new Node(value);
      node.nextNode = this.list;
      this.list = node;
    } else {
      this.list = new Node(value);
    }
  }
  size() {
    if (!this.list) return 0;
    let size = 1;
    let node = this.list;
    while (node.nextNode) {
      node = node.nextNode;
      size++;
    }
    return size;
  }
  head() {
    return this.list ? this.list : "The list is empty!";
  }
  tail() {
    if (!this.list) return "The list is empty";
    let node = this.list;
    while (node.nextNode) {
      node = node.nextNode;
    }
    return node;
  }
  at(index) {
    if (!this.list) return "The list is empty";
    if (index > this.size() || index < 1) return "No node at given index";
    let node = this.list;
    for (let i = 1; i < index; i++) {
      node = node.nextNode;
    }
    return node;
  }
  pop() {
    if (!this.list) return "The list is empty";
    let node = this.list;
    let nodeAfter = node.nextNode;
    if (!nodeAfter) {
      delete this.list;
      return;
    }
    while (nodeAfter.nextNode) {
      node = nodeAfter;
      nodeAfter = node.nextNode;
    }
    node.nextNode = null;
  }
  contains(value) {
    if (!this.list) return "The list is empty";
    let node = this.list;
    for (let i = 1; i <= this.size(); i++) {
      if (node.value === value) return true;
      node = node.nextNode;
    }
    return false;
  }
  find(value) {
    if (!this.list) return "The list is empty";
    let node = this.list;
    for (let i = 1; i <= this.size(); i++) {
      if (node.value === value) return i;
      node = node.nextNode;
    }
    return null;
  }
  toString() {
    if (!this.list) return "The list is empty";
    let node = this.list;
    let string = "";
    for (let i = 1; i <= this.size(); i++) {
      string = string + `( ${node.value} ) -> `;
      node = node.nextNode;
    }
    return string + "null";
  }
  insertAt(value, index) {
    if (index > this.size() + 1 || index < 1) return "Wrong index";
    if (index === 1) {
      this.prepend(value);
      return;
    }
    if (index === this.size() + 1) {
      this.append(value);
      return;
    }
    let newNode = new Node(value);
    let node = this.list.nextNode;
    let previousNode = this.list;
    for (let i = 2; i < index; i++) {
      previousNode = node;
      node = previousNode.nextNode;
    }
    newNode.nextNode = node;
    previousNode.nextNode = newNode;
  }
  removeAt(index) {
    if (index > this.size() || index < 1) return "No node at given index";
    if (index === this.size()) {
      this.pop();
      return;
    }
    if (index === 1) {
      this.list = this.list.nextNode;
      return;
    }
    let node = this.list.nextNode;
    let previousNode = this.list;
    for (let i = 2; i < index; i++) {
      previousNode = node;
      node = previousNode.nextNode;
    }
    previousNode.nextNode = node.nextNode;
  }
}
