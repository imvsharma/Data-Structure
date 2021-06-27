class Stack {
  constructor() {
    this.items = [];
  }

  push(data) {
    this.items.push(data);
  }

  pop() {
    return this.items.pop();
  }

  isEmpty() {
    return this.items.length === 0 ? true : false;
  }

  top() {
    return this.items[this.items.length - 1];
  }
}