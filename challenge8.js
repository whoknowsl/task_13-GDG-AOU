//## Challenge 8: The LRU Cache

class nodeList {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.size = this.size;

    this.head = new nodeList(0, 0);
    this.tail = new nodeList(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
  }
  _addNode(node) {
    node.prev = this.head;
    node.next = this.head.next;

    this.head.next.prev = node;
    this.head.next = node;
  }
  _removeNode(node) {
    const prevNode = node.prev;
    const nextNode = node.next;
    prevNode.next = nextNode;
    nextNode.prev = prevNode;
  }
  _addToHead(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
  }
  get(key) {
    if (!this.map.has(key)) return -1;

    const node = this.map.get(key);
    this._removeNode(node);
    this._addToHead(node);
    return node.value;
  }
  put(key, value) {
    if (this.map.has(key)) {
      const node = this.map.get(key);
      node.value = value;
      this._removeNode(node);
      this._addToHead(node);
    } else {
      const newNode = new nodeList(key, value);
      this.map.set(key, newNode);
      this._addToHead(newNode);

      if (this.map.size > this.capacity) {
        const lruNode = this.tail.prev;
        this._removeNode(lruNode);
        this.map.delete(lruNode.key);
      }
    }
  }
}

const cache = new LRUCache(2);
cache.put(1, "A");
cache.put(2, "B");
cache.put(3, "C");

module.exports = LRUCache;