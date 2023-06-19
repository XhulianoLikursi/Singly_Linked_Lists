// Add//
class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  class SLL {
    constructor() {
      this.head = null;
    }
    addFront(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
      return this.head;
    }
  }
  const SLL1 = new SLL();
  console.log(SLL1.addFront(18));
// remove//+ 2-11
    removeFront() {
      if (!this.head) {
        return null;
      }
      const newHead = this.head.next;
      this.head = newHead;
      return this.head;
    }
  }
  const SLL1 = new SLL();
  SLL1.addFront(18);
  SLL1.addFront(5);
  console.log(SLL1.removeFront());
  
//   fonts//
  front() {
    if (!this.head) {
      return null;
    }
    return this.head.data;
  }
}
const SLL1 = new SLL();
SLL1.addFront(18);
console.log(SLL1.front());