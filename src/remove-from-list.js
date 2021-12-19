const { NotImplementedError } = require('../extensions/index.js');

module.exports = function removeKFromList(l, k ) {
  let head = l

  let previous = null

  while(l){
    if(l.value === k) {            
      if(previous===null) {
          head = l = l.next
          continue
      } 
      else {
          previous.next = l.next
          l = l.next
          continue
      }
    }
    else {
    previous = l
    l = l.next
  }
}
  return head
}


