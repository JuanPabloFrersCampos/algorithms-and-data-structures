class Node{
  constructor(key, value, next=null){
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable{
  constructor(maxSize=10){
    this.maxSize = maxSize;
    this.currentSize = 0;
    this.hashTable = new Array(maxSize);
    for (let i=0; i<maxSize; i++){
      this.hashTable[i] = null;
    }
  }

  //Returns the corresponding hash to each key
  hash(key){
    let hash = 0, i = 0;
    
    for (i=0; i<key.length; i++){
      hash += key.charCodeAt(i);
    }

    return hash % this.maxSize;
  }

  add(key, value){
    const hash = this.hash(key);

    //If that space in the hashTable is free
    if (this.hashTable[hash] == null){
      this.hashTable[hash] = new Node(key, value);
    }
    //If it is busy, iterates the ll until finding a free spot. Interceptions
    else{
      let current = this.hashTable[hash];
      while(current.next){
        current = current.next;
      }
      current.next = new Node(key, value);
    }
    this.currentSize += 1;
  }

  /*
  1er caso: No existe la key especificada
  2do caso: El nodo es el primer elemento del arreglo, y no hay relación next
  3er caso: EL nodo es el primer elemento del arreglo, y hay relacion next
  3er caso: El nodo tiene relación prev, pero NO next.
  4to caso: El nodo tiene relaciones prev y next
  5to (no) utilizado: La key se repite, hay más de un nodo.
  */
  delete(key){
    const hash = this.hash(key);
    //1st case: Check if the array space is being used
    if (this.hashTable[hash] == null) return console.log('Not found');

    //2nd case: If the node to delete is the first one
    if (this.hashTable[hash].key == key && !this.hashTable[hash].next){
      this.hashTable[hash] = null;
    }
    else if (this.hashTable[hash].key == key && this.hashTable[hash].next){
      this.hashTable[hash] = this.hashTable[hash].next;
    }

    //3rd and 4th case: If the node todo delete is not the first one.
    else{
      let prev, current=this.hashTable[hash], next;
      while (current.key != key){
        prev = current;
        current = current.next;
        next = current.next;
      }
      //The iteration will stop when 'current' holds the node to delete

      //3rd case:
      //If the node to delete does not have a .next (prev will be the tail)
      if (!current.next) prev.next = null;
      //4th case: If the node to delete does have .next
      else if (current.next){
        prev.next = next;
        next.prev = prev;
      }
    }
    this.currentSize--;
  }

  search(key){
    const hash = this.hash(key);
    //Assigns and checks that the hash space in the array exists
    let current = this.hashTable[hash];
    if (current == null) return console.log('Not found');

    //In case that the searched key is not the first element in the LL
    while(key != current.key){
      current = current.next;
      if (current == null){
        return console.log('Not found');
      }
    }
    return console.log(current);
  }
}

var ht = new HashTable(10);
ht.add('Paquito', 12);
ht.add('otiuqaP', 24);
ht.delete('otiuqaP');
//ht.delete('otiuqaP')
ht.search('otiuqaP');
console.log(ht);