A linked list is a linear collection of data elements (NODES), in which linear order is not given by their physical placement in memory. Instead, each element points to the next.

Keywords:
Nodes: Data, next.
Linkedlist: Head, tail, size.

Each node have:
Data, and a reference to the next node. The last node reference to null.

Important linked list methods:
insertFirst - PrintList - insertLast - insertAt -getAt - removeAt

Wikipedia: https://en.wikipedia.org/wiki/Linked_list

FAQ

LL are objects in JS

.next property IS A POINTER? > Honestly I think that it is not in JS.

insertAt personal explanation:
/*All we have to do is to modify the .next property from the previous
        node, to point the new node. And the new node points to the node that
        was pointed by the previous one*/

removeAt:
Think it as A, B, C.