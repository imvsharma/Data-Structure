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

const infixToPostfix = (infixString) => {
  // create empty stack
  let stack = new Stack();
  // create empty result string
  let postfixStr = "";
  // convert string into array
  const infixStrArr = infixString.split("");

  infixStrArr.forEach((char) => {
    if ( (char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9") ) {
      postfixStr += char;
    } else if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (stack.top() !== "(") {
        postfixStr += stack.pop();
      }
      stack.pop();
    } else if ( char === "^" || char === "/" || char === "*" || char === "+" || char === "-" ) {
      while ( char !== "^" && !stack.isEmpty() && getPrecendence(char) <= getPrecendence(stack.top()) ) {
        postfixStr += stack.pop();
      }
      stack.push(char);
    }
  });

  while (!stack.isEmpty()) {
    postfixStr += stack.pop();
  }

  return postfixStr;
};

const getPrecendence = (operator) => {
  switch (operator) {
    case "^":
      return 3;
    case "/":
    case "*":
      return 2;
    case "+":
    case "-":
      return 1;
    default:
      return 0;
  }
};

console.log(infixToPostfix("a+b*(c^d-e)^(f+g*h)-i"));

// output : abcd^e-fgh*+^*+i-