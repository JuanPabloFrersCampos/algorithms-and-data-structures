class Node{
  constructor(data, next=null, pre=null){
    this.data = data;
    this.next = next;
    this.pre = pre;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  //Some steps could be skipped. But this is the easiest way to understand
  insertFirst(data){
    let newNode = new Node(data);
    //If LL is empty
    if (!this.tail){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      let temp = this.head;
      this.head = newNode;
      newNode.next = temp;
      temp.pre = newNode;
    }
    this.size++;
  }

  insertLast(data){
    //If LL is empty
    let newNode = new Node(data);
    if (!this.tail){
      this.insertFirst(data);
    }
    else{
      let aux = this.tail;
      this.tail = newNode;
      newNode.pre = aux;
      aux.next = newNode;
    }
    this.size++;
  }

  insertAt(data, index){
    if (index == 0){
      this.insertFirst(data);
    }   
    //If it is the last one. 
    else if (index == this.size){
      this.insertLast(data);
    }
    else{
      let current = this.head, previous, i=0;
      while(i<index){
        previous = current;
        current = current.next;
        i++;
      }
      let newNode = new Node(data, current, previous);
      previous.next = newNode;
      current.previous = newNode;
    }
    this.size++;
  }

  printList(){
    let current = this.head;
    while (current){
      console.log(current.data);
      current = current.next;
    }
  }
}

var ll = new LinkedList;
ll.insertFirst(3);
ll.insertFirst(2);
ll.insertLast(5)
ll.insertFirst(1);
ll.insertAt(4, 3); //Add '4' after the '3'
//ll.insertAt(6, 5); //Add '6' to the tail
//console.log(ll);
ll.printList();
//console.log(ll.tail);