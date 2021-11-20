class Node{
  constructor(key, value=null, next=null){
    this.key = key;
    this.value = value;
    this.next = next;
  }
}

class HashTable{
  constructor(maxSize=10){
    this.maxSize = maxSize;
    this.actualSize = 0;
    this.hashTable = new Array(maxSize);
    //Initializes all the array elements to = null
    for (let i=0; i < this.maxSize; i++){
      this.hashTable[i] = null;
    }
  }

  hash(key){
    let hash = 0;
    for (let i=0; i<key.length; i++){
      hash += key.charCodeAt(i);
    }
    return hash % this.maxSize;
  }

  add(key, value){
    const hash = this.hash(key);
    //If that hashTable index is not being used.
    if (this.hashTable[hash] == null){
      this.hashTable[hash] = new Node(key, value);
    }
    //If it is being used
    else{
      let current = this.hashTable[hash];
      while(current.next){
        current = current.next;
      }
      current.next = new Node(key, value);
    }
    this.actualSize++;
  }

  //1st: The hash according to the key is not under use.
  // --- In all the following cases, key == element.key will be checked.
  //2nd: It's the first element of that array index., and it doesn't have .next prop
  //3rd: It's the first element of that array index, and it has a .next prop
  //4th: It's not the first element of the array index, and it doesn't have a .next prop
  //5th: It's not the ''''. And it has a .next prop
  //6th: Not found
  remove(key){
    const hash = this.hash(key);
    let current = this.hashTable[hash];
    //1st:
    if (current == null) return console.log('Not found');
    //2nd
    else if (current && !current.next && current.key == key){
      this.hashTable[hash] = null;
    }
    //3rd
    else if (current && current.next && current.key == key){
      this.hashTable[hash] = current.next;
    }
    //4th, 5th, and 6th begining
    else{
      let prev;
      while (current.key != key){
        prev = current;
        current = current.next;
        if (current == null) break; //To avoid infinite loops in case actual.key != key 
      }
      //6th case: The node was not found
      if (current == null) return console.log('Not found');

      //4th
      if (!current.next) prev.next = null;

      //5th
      if (current.next) prev.next = current.next;
    }

    this.actualSize--;
  }
}


var ht = new HashTable;
ht.add('aaab');
ht.add('aaba');
ht.add('abaa');
ht.add('baaa');
ht.remove('baaa');
current = ht.hashTable[9];
while (current){
  console.log(current);
  current = current.next;
}
//console.log(ht);