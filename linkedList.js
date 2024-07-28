function Node(nodeData) {
  return { data: nodeData, next: null };
}

function LinkedList() {
  let head = null;
  let size = 0;

  function add(data) {
    const newNode = Node(data);

    if (!head) {
      head = newNode;
    } else {
      let current = head;

      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }

    size++;
  }

  function insertAt(data, index) {
    if (index < 0 || index > size) {
      throw new RangeError('Index out of range');
    }

    const newNode = Node(data);
    let current = head;
    let previous;

    if (index === 0) {
      newNode.next = head;
      head = newNode;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = newNode;
      newNode.next = current;
    }

    size++;
  }

  function removeFrom(index) {
    if (index < 0 || index > size) {
      throw new RangeError('Index out of range');
    }

    let current = head;
    let previous;

    if (index === 0) {
      head = current.next;
    } else {
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    size--;
    return current.data;
  }

  function getAt(index) {
    if (index < 0 || index >= size) {
      throw new RangeError('Index out of range');
    }

    let current = head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }
  function print() {
    let current = head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  function getSize() {
    return size;
  }

  function getHead() {
    return head;
  }

  return { getHead, add, insertAt, removeFrom, print, getSize, getAt };
}

module.exports = { LinkedList };
