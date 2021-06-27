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

const postfixToPrefix = (postfixString) => {
  let stack = new Stack();
  let arr = postfixString.split("");
  arr.forEach((char) => {
    if (!isOperator(char)) {
      stack.push(char);
    } else {
      let operand1 = stack.pop();
      let operand2 = stack.pop();
      let str = `${char}${operand2}${operand1}`;
      stack.push(str);
    }
  });
  return stack.top();
};

const isOperator = (char) => {
  if (
    char === "+" ||
    char === "-" ||
    char === "*" ||
    char === "/" ||
    char === "^"
  )
    return true;
  return false;
};

console.log(postfixToPrefix("ABC/-AK/L-*"));

//output: *-A/BC-/AKL