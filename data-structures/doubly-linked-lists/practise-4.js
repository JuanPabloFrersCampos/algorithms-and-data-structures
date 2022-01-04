class Node{
  constructor (data, next=null, pre=null){
    this.data = data;
    this.next = next;
    this.pre = pre;
  }
}

class DoublyLinkedList{
  #head;
  #tail;
  #size;
  constructor (){
    this.#head = null;
    this.#tail = null;
    this.#size = 0;
  }

  get head(){
    return this.#head;
  }

  set head(node){
    this.#head = node;
  }

  get tail(){
    return this.#tail;
  }

  set tail(node){
    this.#tail = node;
  }

  get size(){
    return this.#size;
  }

  increaseSizeByOne(){
    this.#size++;
  }

  decreaseSizeByOne(){
    this.#size--;
  }

  //1st case: List is empty
  //2nd case: "" is not empty
  unshift(data){
    if (!data) return console.log('No data was specified');
    let newNode = new Node(data);
    this.increaseSizeByOne();

    if (this.head === null){
      this.head = newNode;
      this.tail = newNode;
    }
    else{
      let aux = this.head;
      newNode.next = aux;
      aux.pre = newNode;
      this.head = newNode;
    }
  }

  //1st case: The list is empty -> unshift is called.
  //2nd case: The list has only one node, which is head and tail.
  //3rd case: The list has more than one node.
  push(data){
    if (!data) return console.log('No data was specified');
    this.increaseSizeByOne();
    let newNode = new Node(data);
    //1st case
    if (this.head === null){
      this.unshift(data);
    }
    //2nd case
    else if (this.head === this.tail){
      newNode.pre = this.head;
      this.head.next = newNode;
      this.tail = newNode;
    }
  }

  print(){
    let current = this.head;
    while(current){
      console.log(current);
      current = current.next;
    }
    console.log(this.size);
  }
}

var ll = new DoublyLinkedList();
ll.unshift(10);
ll.push(20);
ll.unshift(5);
ll.print();