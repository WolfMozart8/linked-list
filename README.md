# Linked List

Project from The Odin Project

## Node structure
```javascript
// Node { value: 10, nextNode: null }
class Node {
  value = null;
  nextNode = null;
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}
```


## Using the list
```javascript
const list = new LinkedList();

list.append(10) // ( 10 ) -> null
list.append(20) // ( 10 ) -> ( 20 ) -> null
list.append(30) // ( 10 ) -> ( 20 ) -> ( 30 ) -> null

list.toString() // ( 10 ) -> ( 20 ) -> ( 30 ) -> null

list.prepend(40) // ( 40 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null
list.prepend(50) // ( 50 ) -> ( 40 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

list.head // Node { value: 50, nextNode: [Node] }
list.tail // Node { value: 30, nextNode: null }
list.size() // 5

list.pop() // ( 50 ) -> ( 40 ) -> ( 10 ) -> ( 20 ) -> null

list.at(2) // Node { value: 40, nextNode: [Node] }

list.contains(20) // true
list.contains(70) // false

list.find(10) // 3 (index)

list.instertAt(100000, 3)
// ( 50 ) -> ( 40 ) -> ( 100000 ) -> ( 10 ) -> ( 20 ) -> null

list.removeAt(4) 
// ( 50 ) -> ( 40 ) -> ( 100000 ) -> ( 20 ) -> null
```
