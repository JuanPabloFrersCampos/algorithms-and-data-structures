For examples, is strongly suggested to check practise 2.

A doubly linked list is like a linked list, but each node also has a pointer to the previous one. We will also track the tail.

Even not being the fansciest way of doing it, the easiest way to insert a node, is creating the node first and assigning it to a variable. Once created, assign it to the position, and configure the .prevs and .nexts

Proof that .next and .prev prop are a memory reference:

//.next and .prev prop are a memory reference, or an object copy?
  //(third and fourth item must have the same value)
  areEqual(){
    let secondNode = this.head.next;
    let thirdNode = secondNode.next;
    let bool = secondNode === thirdNode ? true : false;
    return bool;
  }
  //RETURNS: FALSE
  //.next and .prev store a memory reference, not an object copy.

// ANother proof:
else if (this.head === this.tail){
      this.increaseSizeByOne();
      let aux = this.head;
      newNode.pre = aux;
      this.head.next = newNode;
      this.tail = newNode;
      console.log(this.head === newNode.pre); 
    }
    //RETURNS: TRUE



Special considerations:
Shift() and pop are () tricky (both are more or less the same), a lot of considerations must be done. Example available in practise 2.