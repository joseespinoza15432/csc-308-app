const myFunctions = require('./target-functions.js');

test('div function - basic division', () => {
    expect(myFunctions.div(6, 2)).toBe(3);
});

test('div function - division by 1', () => {
    expect(myFunctions.div(10, 1)).toBe(10);
});

test('div function - division by a negative number', () => {
    expect(myFunctions.div(10, -2)).toBe(-5);
});

test('div function - division by 0 (should return Infinity)', () => {
    expect(myFunctions.div(10, 0)).toBe(Infinity);
});

test('containsNumbers function - contains a number', () => {
    expect(myFunctions.containsNumbers('hello1world')).toBe(true);
});

test('containsNumbers function - no numbers', () => {
    expect(myFunctions.containsNumbers('helloworld')).toBe(false);
});

test('containsNumbers function - only numbers', () => {
    expect(myFunctions.containsNumbers('12345')).toBe(true);
});

test('containsNumbers function - empty string', () => {
    expect(myFunctions.containsNumbers('')).toBe(false);
});

test('containsNumbers function - bug detection (handles incorrect logic)', () => {
    expect(myFunctions.containsNumbers('hello')).toBe(false);
});

