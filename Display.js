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
      const newNode = new Node(value, this.head);
      this.head = newNode;
      return this.head;
    }
    display() {
      let current = this.head;
      let result = "";
      while (current) {
        result += `Node { data: ${current.data}, next: `;
        if (current.next) {
          result += `Node { data: ${current.next.data}, next: `;
        } else {
          result += "null";
        }
        result += " } ";
        current = current.next;
      }
  
      return result;
    }
  }
  const SLL1 = new SLL();
  SLL1.addFront(11.41);
  SLL1.addFront(2);
  SLL1.addFront(76);
  console.log(SLL1.display());
  