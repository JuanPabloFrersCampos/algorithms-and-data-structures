class Node{
  constructor(data, next=null, prev=null){
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList{
  constructor(){
    this.tail = null;
    this.head = null;
    this.size = 0;
  }

  unshift(data){
    let newNode = new Node(data);
    //If the list is empty
    if (!this.head){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      let aux = this.head;
      this.head = newNode;
      newNode.next = aux;
      aux.prev = newNode;
    }
    this.size++;
  }

  shift(){
    //If the list is empty
    if (!this.head){
      console.log('No head!');
      return;
    }
    //If the tail and head are the same node.
    else if (!this.head.next){
      console.log('The hole list was erased');
      this.head = null;
      this.tail = null;
    }
    else{
      let aux = this.head.next;
      this.head.prev = null;
      this.head = aux;

      //In case that only one node was left, it will be tail and head, but
      //withouth references.
      if (this.head === this.tail){
        this.tail.prev = null;
        this.head.next = null;
      }
    }
    this.size--;
  }

  pop(){
    //If the list is empty
    if (!this.tail){
      console.log('List is empty!');
      return;
    }
    //If the LL has only one node
    else if (!this.tail.prev){
      console.log('The hole list was erased');
      this.head = null;
      this.tail = null;
    }
    else{
      let aux = this.tail.prev;
      aux.next = null;
      this.tail = aux;

      //If the head is the same than the tail.
      if (this.head === this.tail){
        this.head.next == null;
        this.tail.next == null;
      }
    }
    this.size--;
  }

  push(data){
    //If the list is empty
    if (!this.head){
      this.unshift(data);
    }
    else{
      let newNode = new Node(data);
      let aux = this.tail;
      this.tail = newNode;
      aux.next = newNode;
      newNode.prev = aux;
    }
  }

  // ---- Utilities -----

  //Prints the LL values.
  printList(){
    let current = this.head;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }

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
}

var ll = new DoublyLinkedList;
ll.unshift(2);
ll.unshift(1);
ll.push(4);
ll.unshift(3);
//console.log(ll.head === ll.tail);
console.log(ll);