class Node{
    constructor(data, next=null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        //this.tail = null; > won't be used, but it's really useful.
        this.size = 0;
    }

    insertFirst(data){
        this.head = new Node(data, this.head);
        this.size += 1;
    }

    //This method approach would be useful if we don't have the "tail" prop
    insertLast(data){
        //If list is empty:
        if (!this.head){
            this.head = new Node(data);
            this.size++;
        }
        //If it is not empty. 
        else{
            let current = this.head;
          
            //Loop will continue until find the node that .next == null
            while(current.next){
              current = current.next;
            }
            
            current.next = new Node(data);
            this.size++;
        }
    }

    insertAt(data, index){
        //If it is negative, or out of range (first index == 0)
        if (index < 0 || index > this.size){
            console.log('Out of range');
            return;
        }

        if (index == 0){
            this.insertFirst(data);
        }

        /*All we have to do is to modify the .next property from the previous
        node, to point the new node. And the new node points to the node that
        was pointed by the previous one*/
        let i=0;
        let current = this.head;
        let previous;

        while (i<index){
            previous = current;
            i++;
            current = current.next;
        }

        let originalNext = previous.next;

        previous.next = new Node(data, originalNext);
    }

    getAt(index){
        if (index > this.size || index < 0){
            console.log('Error');
            return;
        }

        let current = this.head;
        let i=0;

        while(i < index){
            i++;
            current = current.next;
        }

        console.log(`On index ${index} the value is ${current.data}.`);
    }

    removeAt(index){
        if (index < 0 || index > this.size){
            console.log('Error');
            return;
        }

        let current = this.head;

        if (index == 0){    
            this.head = current.next; 
        }

        let previous;
        let i = 0;

        /*Think this as A, B, and C.
        We wanna delete B. Then, we loop until A, and assign that node to
        'previous', then in current we assign 'B'
        In order to delete B, we point A (previous.next) to what B is pointing
        to (current.next)*/
        
        while (i < index){
            i++;
            previous = current;
            current = current.next;
        }

        previous.next = current.next;
        current.data = null;
        this.size--;
    }

    printList(){
        let current = this.head;

        while(current){
            console.log(current.data);
            current = current.next;
        }
    }
}

var ll = new LinkedList();

ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertLast(4);
ll.insertAt(100, 2)
ll.removeAt(3);

ll.printList();