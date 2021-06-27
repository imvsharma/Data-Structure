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

const prefixToInfix = (prefixString) => {
  let stack = new Stack();
  const revPrefixString = prefixString.split("").reverse();

  revPrefixString.forEach((char) => {
    if (!isOperator(char)) {
      stack.push(char);
    } else {
      let operand1 = stack.pop();
      let operand2 = stack.pop();
      const str = `${operand1}${operand2}${char}`;
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

console.log(prefixToInfix("*-A/BC-/AKL"));

//output: ABC/-AK/L-*