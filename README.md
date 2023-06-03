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
const node = new LinkedList();

node.append(10) // ( 10 ) -> null
node.append(20) // ( 10 ) -> ( 20 ) -> null
node.append(30) // ( 10 ) -> ( 20 ) -> ( 30 ) -> null

node.toString() // ( 10 ) -> ( 20 ) -> ( 30 ) -> null

node.prepend(40) // ( 40 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null
node.prepend(50) // ( 50 ) -> ( 40 ) -> ( 10 ) -> ( 20 ) -> ( 30 ) -> null

node.head // Node { value: 50, nextNode: [Node] }
node.tail // Node { value: 30, nextNode: null }
node.size() // 5

node.pop() // ( 50 ) -> ( 40 ) -> ( 10 ) -> ( 20 ) -> null

node.at(2) // Node { value: 40, nextNode: [Node] }

node.contains(20) // true
node.contains(70) // false

node.find(10) // 3 (index)

node.instertAt(100000, 3)
// ( 50 ) -> ( 40 ) -> ( 100000 ) -> ( 10 ) -> ( 20 ) -> null

node.removeAt(4) 
// ( 50 ) -> ( 40 ) -> ( 100000 ) -> ( 20 ) -> null
```
