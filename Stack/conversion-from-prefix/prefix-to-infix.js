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
  const postfixStr = prefixString.split("").reverse();
  let stack = new Stack();
  const postfixStrArr = postfixString.split("");
  postfixStrArr.forEach((char, index) => {
    if (!isOperator(char)) {
      stack.push(char);
    } else if (isOperator(char)) {
      let str1 = stack.pop();
      let str2 = stack.pop();
      const newStr = `(${str1}${char}${str2})`;
      stack.push(newStr);
    }
  });
  return stack.top().split().reverse().join("");
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