class Node{
  constructor(data, pre=null, next=null){
    this._data = data;
    this._pre = pre;
    this._next = next;
  }
}

class DoublyLinkedList{
  constructor(){
    this._size = 0;
    this._head = null,
    this._tail = null;
  }

  /*Add a node to the head.
  1st case: List is empty (node will be head + tail)
  2nd case: List is not empty*/
  unshift(data){
    if (!data) return console.log('No data was specified');
    let newNode = new Node(data);
    this._size++;
    if (!this._head){
      this._head = newNode;
      this._tail = newNode;
    }
    else{
      let aux = this._head;
      newNode._next = aux;
      aux._pre = newNode;
      this._head = newNode;
    }
  }

  /*Add a node to the head.
  1st case: List is empty -> this.unshift() will be invoked
  2nd case: List is not empty*/
  push(data){
    if (!data) return console.log('No data was specified');
    if (!this._head) this.unshift(data);
    else{
      let newNode = new Node(data);
      this._size++;
      let aux = this._tail;
      aux._next = newNode;
      newNode._pre = aux;
      this._tail = newNode;
    }
  }

  print(){
    if (!this._head) return console.log('List is empty');
    else{
      let current = this._head;
      while(current){
        console.log(current);
        current = current._next;
      }
    }
  }
}

var ll = new DoublyLinkedList;
ll.push(1);
ll.unshift(2);
//ll.print();
console.log(ll);