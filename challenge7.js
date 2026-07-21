//## Challenge 7: The Event Emitter (Build From Scratch)

class EventEmitter {
  constructor() {
    this._events = {};
  }
  on(eventName, listener) {
    if (!this._events[eventName]) {
      this._events[eventName] = [];
    }
    this._events[eventName].push(listener);
  }
  off(eventName, listenerToRemove) {
    if (!this._events[eventName]) return;
    this._events[eventName] = this._events[eventName].filter(
      (listener) => listener !== listenerToRemove,
    );
  }
  emit(eventName, ...arg) {
    if (!this._events[eventName]) return;
    this._events[eventName].forEach((listener) => {
      listener(...arg);
    });
  }
}

module.exports = EventEmitter;