//In this first exercise, the hash table will be conformed by linked-list nodes.
//The hash-table will not resize for now.

class Node{
  constructor (key, value, next=null){
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable{
  constructor(maxSize){
    this.maxSize = maxSize;
    //To track the amount of current entries (will be used in other exercises)
    this.currentSize = 0;
    //Hash table inicialization. Initially all index = null
    this.hashTable = new Array(maxSize);
    for (let i=0; i<maxSize; i++){
      this.hashTable[i] = null;
    }
  }

  hash(key){
    var hash = 0;
    for (let i = 0; i < key.length; i++){
      hash += key.charCodeAt(i);
    }

    return hash % this.maxSize
  }

  add(key, value){
    const hash = this.hash(key);
    //If the index of the array does NOT have a node stored.
    if(!this.hashTable[hash]){
      this.hashTable[hash] = new Node(key, value);
    }
    //If the index of the array does HAVE a node stored.
    else{
      let current = this.hashTable[hash];
      while (current.next){
        current = current.next;
      }
      current.next = new Node(key, value);
    }
    this.currentSize += 1;
  }
}

var lt = new HashTable(10);
lt.add('Pedro', '18');
lt.add('ordeP', '18');
console.log(lt);