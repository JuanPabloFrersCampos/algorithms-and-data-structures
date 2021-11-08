//This practise aims to get a better understanding of linked lists.

class Node{
    constructor(data,next=null){
        this.data = data,
        this.next = next
    }
}

class LinkedList{
    constructor (){
        this.head = null;
        this.size = 0;
    }

    addFirst(data){
        this.head = new Node(data, this.head);
        this.size++;
    }

    addLast(data){
        let current = this.head;
        //If the list is empty
        if(!current){
            this.addFirst(data);
        }
        else{
            while(current.next){
                current = current.next;
            }
            current.next = new Node(data);
        }
    }

    //Counts from 0, like an array.
    insertAt(data, index){
        if (index==0){
            this.addFirst(data);
        }
        else{
            let current = this.head;
            let previous, i=0;
            
            while(i<index){
                previous = current;
                current = current.next;
                i++;
            }

            previous.next = new Node(data, current);
        }
    }

    //A, B, and C. B will be skipped.
    deleteAt(index){
        if (index==0){
            let currentHead = this.head
            this.head = currentHead.next;
        }
        else{
            let current = this.head;
            let previous, i=0;
            
            while(i<index){
                previous = current;
                current = current.next;
                i++;
            }
            previous.next = current.next;
        }
    }

    /*It's crucial that the while only validates that current is true. 
    One-node LL will fail if current.next is checked instead*/
    printList(){
        let current = this.head;
        while(current){
            console.log(current);
            current = current.next;
        }
    }
}

var ll = new LinkedList();
ll.addFirst(1);
ll.addLast(3);
ll.insertAt(2, 1);
ll.printList();
ll.addLast(4);
ll.printList();
ll.deleteAt(3);
ll.printList();