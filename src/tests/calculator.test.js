const { add, subtract, multiply, divide } = require('../calculator');

describe('Calculator Functions', () => {
  
  describe('Addition', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(add(10, -4)).toBe(6);
    });

    test('should add two negative numbers', () => {
      expect(add(-5, -3)).toBe(-8);
    });

    test('should add zero to a number', () => {
      expect(add(7, 0)).toBe(7);
    });

    test('should add two zeros', () => {
      expect(add(0, 0)).toBe(0);
    });

    test('should add decimal numbers', () => {
      expect(add(2.5, 3.7)).toBeCloseTo(6.2, 1);
    });

    test('should handle large numbers', () => {
      expect(add(1000000, 2000000)).toBe(3000000);
    });
  });

  describe('Subtraction', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should subtract negative from positive', () => {
      expect(subtract(10, -5)).toBe(15);
    });

    test('should subtract positive from negative', () => {
      expect(subtract(-5, 3)).toBe(-8);
    });

    test('should subtract a number from itself', () => {
      expect(subtract(7, 7)).toBe(0);
    });

    test('should subtract zero from a number', () => {
      expect(subtract(15, 0)).toBe(15);
    });

    test('should subtract from zero', () => {
      expect(subtract(0, 5)).toBe(-5);
    });

    test('should subtract decimal numbers', () => {
      expect(subtract(10.5, 3.2)).toBeCloseTo(7.3, 1);
    });

    test('should handle large numbers', () => {
      expect(subtract(5000000, 2000000)).toBe(3000000);
    });
  });

  describe('Multiplication', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should multiply positive and negative numbers', () => {
      expect(multiply(6, -3)).toBe(-18);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-4, -5)).toBe(20);
    });

    test('should multiply by zero', () => {
      expect(multiply(100, 0)).toBe(0);
    });

    test('should multiply by one', () => {
      expect(multiply(7, 1)).toBe(7);
    });

    test('should multiply decimal numbers', () => {
      expect(multiply(2.5, 4)).toBe(10);
    });

    test('should multiply fractional numbers', () => {
      expect(multiply(0.5, 0.5)).toBeCloseTo(0.25, 2);
    });

    test('should handle large numbers', () => {
      expect(multiply(1000, 2000)).toBe(2000000);
    });
  });

  describe('Division', () => {
    test('should divide two positive numbers', () => {
      expect(divide(20, 5)).toBe(4);
    });

    test('should divide positive by negative', () => {
      expect(divide(12, -3)).toBe(-4);
    });

    test('should divide negative by positive', () => {
      expect(divide(-12, 3)).toBe(-4);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-20, -5)).toBe(4);
    });

    test('should divide by one', () => {
      expect(divide(8, 1)).toBe(8);
    });

    test('should divide zero by a number', () => {
      expect(divide(0, 5)).toBe(0);
    });

    test('should result in decimal for uneven division', () => {
      expect(divide(10, 3)).toBeCloseTo(3.333, 2);
    });

    test('should throw error when dividing by zero', () => {
      expect(() => divide(20, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw error when dividing zero by zero', () => {
      expect(() => divide(0, 0)).toThrow('Cannot divide by zero');
    });

    test('should throw correct error type', () => {
      expect(() => divide(5, 0)).toThrow(Error);
    });

    test('should divide decimal numbers', () => {
      expect(divide(10.5, 2.1)).toBeCloseTo(5, 0);
    });

    test('should handle large numbers', () => {
      expect(divide(1000000, 1000)).toBe(1000);
    });
  });

  describe('Integration Tests - Image Examples', () => {
    test('should calculate 2 + 3 = 5', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should calculate 10 - 4 = 6', () => {
      expect(subtract(10, 4)).toBe(6);
    });

    test('should calculate 45 * 2 = 90', () => {
      expect(multiply(45, 2)).toBe(90);
    });

    test('should calculate 20 / 5 = 4', () => {
      expect(divide(20, 5)).toBe(4);
    });
  });

  describe('Edge Cases and Special Scenarios', () => {
    test('should handle very small numbers', () => {
      expect(add(0.0001, 0.0002)).toBeCloseTo(0.0003, 4);
    });

    test('should handle negative zero', () => {
      expect(add(-0, 5)).toBe(5);
    });

    test('should handle Infinity correctly (multiply)', () => {
      expect(multiply(Number.MAX_VALUE, 2)).toBe(Infinity);
    });

    test('should preserve order in subtraction', () => {
      expect(subtract(5, 3)).not.toBe(subtract(3, 5));
    });

    test('should preserve order in division', () => {
      expect(divide(10, 2)).not.toBe(divide(2, 10));
    });
  });
});
