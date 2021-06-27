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

const infixToPrefix = (infixString) => {
  const revInfixString = infixString.split("").reverse();
  revInfixString.forEach((char, index) => {
    if (char === ")") revInfixString[index] = "(";
    if (char === "(") revInfixString[index] = ")";
  });
  // create empty stack
  let stack = new Stack();
  // create empty result string
  let prefixStr = "";

  revInfixString.forEach((char) => {
    if ( (char >= "a" && char <= "z") || (char >= "A" && char <= "Z") || (char >= "0" && char <= "9") ) {
      prefixStr += char;
    } else if (char === "(") {
      stack.push(char);
    } else if (char === ")") {
      while (stack.top() !== "(") {
        prefixStr += stack.pop();
      }
      stack.pop();
    } else if ( char === "^" || char === "/" || char === "*" || char === "+" || char === "-" ) {
      while ( char !== "^" && !stack.isEmpty() && getPrecendence(char) <= getPrecendence(stack.top()) ) {
        prefixStr += stack.pop();
      }
      stack.push(char);
    }
  });

  while (!stack.isEmpty()) {
    prefixStr += stack.pop();
  }

  return prefixStr.split("").reverse("").join("");
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

console.log(infixToPrefix("(A - B/C) * (A/K-L)"));

// output : *-A/BC-/AKL