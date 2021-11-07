/*In this practise, I tried to implement. tail, but a lot of problems
showed up*/

class Node{
  constructor(data, next=null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(){
    this.head = null;
    //this.tail = null;
    let size = 0;
  }

  insertFirst(data){
    this.head = new Node(data, this.head);

    // //If the list is empty
    // if (this.head == null){
    //   this.head = new Node(data);
    //   this.tail = new Node(data);
    // }

    this.size++;
  }

  insertLast(data){
    //If the list is empty
    //if (this.head == null){
      //this.head = new Node(data);
      //this.tail = new Node(data);
    //}

    //If it is not empty -> NO DIFF IMPLEMENTED
    let current = this.head;
      
     while (current.next){
      current = current.next;
    }

    current.next = new Node(data);
    this.size++;
  }

  insertAt(data, index){
    if (index < 0 || index > this.size){
      return;
    }

    if (index == 0){
      this.insertFirst(data);
      return;
    }

    let current = this.head;
    let previous;
    let i = 0;

    while (i < index){
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = new Node(data, current);
    this.size++;
  }

  //Extra verifications are not necessary since this is a practise.
  getAt(index){
    let i=0, current=this.head, previous;

    while (i < index){
      previous = current;
      current = current.next;
      i++;
    }

    console.log(previous.next);
  }

  removeAt(index){
    let i=0, current=this.head, previous;

    while (i < index){
      previous = current;
      current = current.next;
      i++;
    }

    previous.next = current.next;
  }

  printList(){
    let current = this.head;
    while (current){
      console.log(current.data);
      current = current.next;
    }
  }
}

var ll = new LinkedList();
ll.insertFirst(1);
ll.insertLast(3);
ll.insertAt(2, 1);
//ll.getAt(2);
ll.removeAt(1);

ll.printList();
