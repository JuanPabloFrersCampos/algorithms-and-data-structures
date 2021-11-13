A linked list is a linear collection of data elements (NODES), in which linear order is not given by their physical placement in memory. Instead, each element points to the next.

Keywords:
Nodes: Data, next.
Linkedlist: Head, tail, size.

Each node have:
Data, and a reference to the next node. The last node reference to null.

Important linked list methods:
insertFirst - PrintList - insertLast - insertAt -getAt - removeAt

Wikipedia: https://en.wikipedia.org/wiki/Linked_list

FAQ

LL are objects in JS

---

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

  ---

insertAt personal explanation:
Think it as A, bis(insertion), C 

removeAt:
Think it as A, B, C.

PrintList: It's crucial that the while only validates that current is true. 
One-node LL will fail if current.next is checked instead.
Check practise-2 for an example.