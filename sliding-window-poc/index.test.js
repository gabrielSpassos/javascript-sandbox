const { main, slidingWindow } = require('./index');

test('main function should return Hello World', () => {
    expect(main()).toBe('Hello World!');
});

test('slidingWindow function should throw error for invalid input array', () => {
    expect(() => {slidingWindow("foo")}).toThrow("Invalid array");
});

test('slidingWindow function should return windows', () => {
    expect(slidingWindow([1, 2, 3, 4])).toEqual([[1, 2, 3], [2, 3, 4]]);
});