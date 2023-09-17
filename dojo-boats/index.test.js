const { main, minBoats, minBoatsOptimal } = require('./index');

test('main function should return 25', () => {
    expect(main()).toBe(25);
});

test('should return 2', () => {
    expect(minBoats([20, 20, 20, 20], 100)).toBe(2)
});

test('should return 3, for min boats', () => {
    expect(minBoats([70, 50, 80, 50], 100)).toBe(3);
});

test('should return 4, for min boats', () => {
    expect(minBoats([70, 50, 80, 50], 90)).toBe(4);
});

test('should return 3, with optimal solution', () => {
    expect(minBoatsOptimal([70, 50, 80, 50], 100)).toBe(3)
});



