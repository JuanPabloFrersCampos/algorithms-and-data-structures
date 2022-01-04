class HashTable{
  constructor(){
    this._maxSize = 4;
    this._currentSize = 0;
    this.hashTable = new Array(this.maxSize);
  }

  _hash(key){
    let hash;
    for (let i=0; i < key.length; i++){
      //Left shit operator. Avoid a 32+ bit interger + Helps avoid collisions
      hash = ((hash << 5) + key.charCodeAt(i));
      //Bitwise and operator. Avoid a 32+ bit interger + Helps avoid collisions
      hash = (hash & hash);
    }
    return Math.abs(hash) % this._maxSize;
  }

  add(key, value){
    const hash = this._hash(key);
    if (key.length == 0) return console.log('Invalid key');
    //Check if the index of the hash table is not being used (if empty)
    if (!this.hashTable[hash]){
      let obj = {};
      obj[key] = value;
      //Computed property. Check CT for more info
      this.hashTable[hash] = obj;
    }
    //If that hash table index is being used already
    else{
    this.hashTable[hash][key] = value;
    }

    this._currentSize++;

    //Determines if the hash list must be resized or not
    if (this._currentSize >= this._maxSize * 0.75){
      this.resize(this._maxSize * 2);
    }
  }

  resize(newMaxSize){
    console.log('ENTERING');
    this._maxSize = newMaxSize;
    let temporalHashTable = this.hashTable;
    this.hashTable = new Array(newMaxSize);
    this._currentSize = 0;
    temporalHashTable.forEach(obj => {
      temporalHashTable.add(obj.key, obj.value);
    })
  }

  printAll(){
    console.log(this.hashTable);
  }
}

var ht = new HashTable;
ht.add('Hello', 'Dog');
ht.add('Helol', 'pip');
ht.add('bycicle', 'llen');
ht.add('chan', 'cho');
ht.printAll();
//console.log(ht);