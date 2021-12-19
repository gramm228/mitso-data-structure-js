const { NotImplementedError } = require("../extensions/index.js");

module.exports = class Stack {

  constructor()
  {
      this.items = [];
  }

  push(element)
  {
      this.items.push(element);
  }
 
  pop()
  {
      if (this.items.length == 0)
          return "undefind";
      return this.items.pop();
  }
 
  peek()
{
    return this.items[this.items.length - 1];
}
}



