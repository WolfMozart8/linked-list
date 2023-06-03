class LinkedList { 
  length = 0
  head = null
  tail = null 

  // add at last
  append(value) {
    const node = new Node(value, null)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.tail.nextNode = node
      this.tail = node
    }
    this.length++
  }
  // add at first
  prepend(value) {
    const node = new Node(value, null)

    if (!this.head) {
      this.head = node
      this.tail = node
    } else {
      this.head = new Node(value, this.head)
    }
    this.length++
  }
  // return size
  size() {
    return this.length
  }
  // return head
  head() {
    return this.head
  }
  // return tail
  tail() {
    return this.tail
  }
  // return at(index)
  at(index) {
    if (this.length === 0) {
      console.log("no items");
      return null
    }
    else if (index < 1) {
      console.log("Must be 1 or higher");
    }
    else if (index > this.length){
      console.log("max index is: " + this.length)
    }
    else if (index === 1) {
      return this.head
    } else {

      let actual = this.head
      let counter = 1;

      while(counter <= index) {
        if (counter === index) {
          return actual
        }
  
        actual = actual.nextNode
  
        if (actual === null) {
          return null
        }
        counter++
      }

      // remplaced code: (still working)
      // const head = "this.head"
      // const howMany = ".nextNode".repeat(index - 1)

      // const code = head.concat(howMany)
      // return eval(code)

    }
  }
  // pop remove last item
  pop() {
      if (this.head === null || this.tail === null) {
        return
      }
      else if (this.tail) {
        const newTail = this.at(this.length - 1)

        this.tail = newTail
        newTail.nextNode = null

        this.length--
      }
    }
  // contains(value)
  contains(value) {
    let actual = this.head

    while(actual !== null) {
      if (actual.value === value) {
        return true
      }

      actual = actual.nextNode

      if (actual === null) {
        return false
      }
    }

  }
  // find(value) return index
  find(value) {
    let actual = this.head
    let index = 1

    while(actual !== null) {
      if (actual.value === value) {
        return index
      }

      actual = actual.nextNode

      if (actual === null) {
        return undefined
      }

      index++
    }

  }
  // to string -> ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    let actual = this.head
    let string = ""

    while(actual !== null) {

      const value = `( ${actual.value} ) -> `
      string += value
      
      actual = actual.nextNode

      if (!actual) {
        string += `null`
      }
    }

    
    return string
  }

  // insert using index 
  insertAt(value, index) {
    const actual = this.head

    if (index < 1) {
      return console.log("error")
    }
    if (index === 1) {
      this.prepend(value)
      this.length++
      return
    }

    const inIndex = this.at(index)
    const prevIndex = this.at(index - 1)

    const newNode = new Node(value, inIndex)

    prevIndex.nextNode = newNode
    this.length++
  }

  // remove using index
  removeAt(index) {
    if (index > this.length) {
      console.log("index not found. Max index is: " + this.length)
    }
    else if (index < 1) {
      console.log("Min index is 1")
    }
    else if (index === this.length) {
      this.pop()
    }
    else if (index === 1) {
      this.head = this.head.nextNode
      this.length--
    }
    else {
      const prevIndex = this.at(index - 1)
      const nextIndex = this.at(index + 1)
      prevIndex.nextNode = nextIndex

      this.length--
    }
  }
}

// Node { value: 10, nextNode: null }
class Node {
  value = null;
  nextNode = null;
  constructor(value, nextNode) {
    this.value = value;
    this.nextNode = nextNode;
  }
}