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


const PostfixToInfix = (postfixString) => {
  let stack = new Stack();
  const postfixStrArr = postfixString.split("");
  postfixStrArr.forEach((char, index) => {
    if (!isOperator(char)) {
      stack.push(char);
    } else if (isOperator(char)) {
      let str1 = stack.pop();
      let str2 = stack.pop();
      const newStr = `(${str2}${char}${str1})`;
      stack.push(newStr);
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

console.log(PostfixToInfix("ab*c+"));