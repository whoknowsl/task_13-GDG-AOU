const LRUCache = require("./challenge8");

describe('LRUCache', () => {
  let cache;

  beforeEach(() => {
    // Fresh cache with a capacity of 2 for testing eviction
    cache = new LRUCache(2);
  });

  test('should return -1 for a key that does not exist', () => {
    expect(cache.get(99)).toBe(-1);
  });

  test('should store and retrieve values correctly', () => {
    cache.put(1, 'A');
    cache.put(2, 'B');
    
    expect(cache.get(1)).toBe('A');
    expect(cache.get(2)).toBe('B');
  });

  test('should update the value of an existing key', () => {
    cache.put(1, 'A');
    cache.put(1, 'Updated A');
    
    expect(cache.get(1)).toBe('Updated A');
  });

  test('should evict the least recently used item when capacity is exceeded', () => {
    cache.put(1, 'A');
    cache.put(2, 'B');
    cache.put(3, 'C'); // Overflows capacity (2). Key 1 should be evicted.

    expect(cache.get(1)).toBe(-1); // Evicted
    expect(cache.get(2)).toBe('B');
    expect(cache.get(3)).toBe('C');
  });

  test('should refresh the priority of an item when it is read (get)', () => {
    cache.put(1, 'A');
    cache.put(2, 'B');
    
    // Reading 1 makes it the Most Recently Used item
    cache.get(1); 
    
    cache.put(3, 'C'); // Overflows capacity. Key 2 should be evicted instead of 1.

    expect(cache.get(2)).toBe(-1); // Evicted
    expect(cache.get(1)).toBe('A');  // Preserved
    expect(cache.get(3)).toBe('C');  // Preserved
  });

  test('should refresh the priority of an item when it is updated (put)', () => {
    cache.put(1, 'A');
    cache.put(2, 'B');
    
    // Updating 1 makes it Most Recently Used
    cache.put(1, 'New A'); 
    
    cache.put(3, 'C'); // Overflows capacity. Key 2 should be evicted.

    expect(cache.get(2)).toBe(-1); // Evicted
    expect(cache.get(1)).toBe('New A');
    expect(cache.get(3)).toBe('C');
  });
});