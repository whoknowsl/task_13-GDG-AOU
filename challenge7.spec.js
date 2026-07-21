const EventEmitter = require("./challenge7");

describe('EventEmitter', () => {
  let emitter;

  beforeEach(() => {
    // Fresh instance before each test ensures isolation
    emitter = new EventEmitter();
  });

  test('should register and trigger listeners with arguments', () => {
    const greetMock = jest.fn();
    
    // Register the listener
    emitter.on('greet', greetMock);
    
    // Emit the event
    emitter.emit('greet', 'Youssef');
    
    // Assert it was called correctly
    expect(greetMock).toHaveBeenCalledTimes(1);
    expect(greetMock).toHaveBeenCalledWith('Youssef');
  });

  test('should support multiple listeners for the same event', () => {
    const log1 = jest.fn();
    const log2 = jest.fn();

    emitter.on('update', log1);
    emitter.on('update', log2);
    emitter.emit('update', 'data');

    expect(log1).toHaveBeenCalledWith('data');
    expect(log2).toHaveBeenCalledWith('data');
  });

  test('should pass multiple arguments to listeners', () => {
    const mockListener = jest.fn();

    emitter.on('multi', mockListener);
    emitter.emit('multi', 'arg1', 'arg2', 42);

    expect(mockListener).toHaveBeenCalledWith('arg1', 'arg2', 42);
  });

  test('should remove a specific listener using off()', () => {
    const listenerToKeep = jest.fn();
    const listenerToRemove = jest.fn();

    emitter.on('test', listenerToKeep);
    emitter.on('test', listenerToRemove);

    // Remove one listener
    emitter.off('test', listenerToRemove);
    
    // Emit event
    emitter.emit('test');

    expect(listenerToKeep).toHaveBeenCalledTimes(1);
    expect(listenerToRemove).not.toHaveBeenCalled();
  });

  test('should handle emitting an event that has no listeners without crashing', () => {
    expect(() => {
      emitter.emit('nonExistentEvent', 'someData');
    }).not.toThrow();
  });

  test('should handle removing a listener from a non-existent event safely', () => {
    expect(() => {
      emitter.off('ghostEvent', () => {});
    }).not.toThrow();
  });
});
