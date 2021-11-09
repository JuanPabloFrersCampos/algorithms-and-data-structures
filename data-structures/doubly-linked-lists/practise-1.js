class Node{
  constructor(data, next=null, prev=null){
    this.data = data;
    this.next = next;
    this.prev = prev;
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  unshift(data){
    //If list is empty
    let newNode = new Node(data);
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

  //Insert a node to the tail
  push(data){
    let newNode = new Node(data);
    //If the list is empty
    if (!this.head){
      this.insertFirst(newNode);
    }
    else{
      let aux = this.tail;
      this.tail = newNode;
      newNode.prev = aux;
      aux.next = newNode;
    }
    this.size++;
  }

  //Deletes the first node.
  shift(){
    let aux = this.head.next;
    this.head = aux;
    aux.pre = null;
  }

  //Deletes the last node.
  pop(){
    let aux = this.tail.prev;
    this.tail = aux;
    aux.next = null;
  }

  removeAt(index){
    //If the node is the head
    if (index == 0){
      this.shift();
    }
    //If the node is the tail. A = 0, B = 1, C = 2. Size = 3
    else if (index == this.size - 1){
      this.pop();
    }
    else{
      let i = 0;
      let current = this.head;
      let previous, next;
      
      //It if would be a while, and the index == 1, the first iteration
      //would never happen.
      do{
        current = current.next;
        //console.log(current);
        i++;
      } while (i < index)

      previous = current.prev;
      next = current.next; //This variable is unnecesary, but it is easier to understand this way
      previous.next = next;
      next.prev = previous;
    }
    this.size -= 1;
  }

  printList(){
    let current = this.head;
    while(current){
      console.log(current.data);
      current = current.next;
    }
  }
}

var ll = new DoublyLinkedList;
ll.unshift(2);
ll.push(3);
ll.unshift(1);
//console.log(ll);
ll.removeAt(2);
ll.printList();
console.log(ll);