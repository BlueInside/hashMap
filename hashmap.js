const { LinkedList } = require('./linkedList');

function HashMap() {
  let capacity = 16;
  let loadFactor = 0.75;
  let entriesCount = 0;
  let buckets = Array(capacity);

  function isTooBig() {
    return entriesCount > capacity * loadFactor;
  }

  function grow() {
    capacity *= 2;
    const oldBuckets = buckets;
    buckets = Array(capacity);
    entriesCount = 0;

    oldBuckets.forEach((bucket) => {
      if (bucket) {
        let current = bucket.getHead();
        while (current) {
          set(current.data[0], current.data[1]);
          current = current.next;
        }
      }
    });
  }

  function hash(key) {
    let hashCode = 0;
    index = 0;

    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      index = hashCode % capacity;
    }

    return index;
  }

  function set(key, value) {
    // If key exist old value is overwritten.

    const index = hash(key);

    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    if (!buckets[index]) {
      buckets[index] = LinkedList();
    }

    const bucket = buckets[index];
    let current = bucket.getHead();

    // Check if key exist in linked list
    while (current) {
      if (current.data[0] === key) {
        current.data[1] = value; // Update existing value
        return;
      }
      current = current.next;
    }

    bucket.add([key, value]);
    entriesCount++;

    if (isTooBig()) {
      grow();
    }
  }

  function get(key) {
    // Returns value of the key
    const index = hash(key);

    if (index < 0 || index >= buckets.length) {
      throw new Error('Trying to access index out of bound');
    }

    const bucket = buckets[index];

    if (bucket) {
      let current = bucket.getHead();

      while (current) {
        if (current.data[0] === key) {
          return current.data[1];
        }
        current = current.next;
      }
    }
    return null;
  }

  function has(key) {
    // Returns true or false if key is or is not in hasMap
    const index = hash(key);

    const bucket = buckets[index];

    if (bucket) {
      let current = bucket.getHead();
      while (current) {
        if (current.data[0] === key) {
          return true;
        }
        current = current.next;
      }
    }

    return false;
  }

  function remove(key) {
    //Removes entry with key and return true or false

    const index = hash(key);

    const bucket = buckets[index];

    if (bucket) {
      let current = bucket.getHead();
      let i = 0;
      while (current) {
        if (current.data[0] === key) {
          bucket.removeFrom(i);
          entriesCount--;
          return true;
        }
        current = current.next;
        i++;
      }
    }

    return false;
  }

  function length() {
    // Returns number of stored keys
    return entriesCount;
  }

  function clear() {
    // Removes all entries from hash map
    capacity = 16;
    entriesCount = 0;
    buckets = Array(capacity);
  }

  function keys() {
    const result = [];
    buckets.forEach((bucket) => {
      if (bucket) {
        let current = bucket.getHead();
        while (current) {
          result.push(current.data[0]);
          current = current.next;
        }
      }
    });

    return result;
  }

  function values() {
    // Returns array containing all the values

    const result = [];
    buckets.forEach((bucket) => {
      if (bucket) {
        let current = bucket.getHead();
        while (current) {
          result.push(current.data[1]);
          current = current.next;
        }
      }
    });
    return result;
  }

  function entries() {
    // Returns array of arrays with key value pairs

    const result = [];

    buckets.forEach((bucket) => {
      if (bucket) {
        let current = bucket.getHead();
        while (current) {
          result.push(current.data);
          current = current.next;
        }
      }
    });
    return result;
  }

  function getCapacity() {
    return capacity;
  }
  return {
    getCapacity,
    set,
    get,
    has,
    remove,
    length,
    clear,
    keys,
    values,
    entries,
  };
}

module.exports = { HashMap };
