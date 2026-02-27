const { add, subtract, multiply, divide, modulo, power, squareRoot } = require('../calculator');

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

  describe('Modulo', () => {
    test('should return remainder of two positive numbers', () => {
      expect(modulo(10, 3)).toBe(1);
    });

    test('should return 0 when dividend is divisible', () => {
      expect(modulo(10, 5)).toBe(0);
    });

    test('should handle negative dividend', () => {
      expect(modulo(-10, 3)).toBe(-1);
    });

    test('should handle negative divisor', () => {
      expect(modulo(10, -3)).toBe(1);
    });

    test('should handle both negative numbers', () => {
      expect(modulo(-10, -3)).toBe(-1);
    });

    test('should throw error when divisor is zero', () => {
      expect(() => modulo(10, 0)).toThrow('Cannot calculate modulo with zero');
    });

    test('should work with decimal numbers', () => {
      expect(modulo(10.5, 3)).toBeCloseTo(1.5, 1);
    });
  });

  describe('Exponentiation (Power)', () => {
    test('should raise positive number to positive power', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should raise number to power of 0', () => {
      expect(power(5, 0)).toBe(1);
    });

    test('should raise number to power of 1', () => {
      expect(power(7, 1)).toBe(7);
    });

    test('should handle negative exponent', () => {
      expect(power(2, -1)).toBe(0.5);
    });

    test('should handle negative base', () => {
      expect(power(-2, 3)).toBe(-8);
    });

    test('should handle negative base with even exponent', () => {
      expect(power(-2, 2)).toBe(4);
    });

    test('should handle fractional exponents', () => {
      expect(power(4, 0.5)).toBe(2);
    });

    test('should handle large exponents', () => {
      expect(power(10, 6)).toBe(1000000);
    });
  });

  describe('Square Root', () => {
    test('should calculate square root of positive number', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate square root of perfect square', () => {
      expect(squareRoot(25)).toBe(5);
    });

    test('should calculate square root of 0', () => {
      expect(squareRoot(0)).toBe(0);
    });

    test('should calculate square root of 1', () => {
      expect(squareRoot(1)).toBe(1);
    });

    test('should handle non-perfect squares', () => {
      expect(squareRoot(2)).toBeCloseTo(1.414, 2);
    });

    test('should handle decimal input', () => {
      expect(squareRoot(2.25)).toBe(1.5);
    });

    test('should throw error for negative number', () => {
      expect(() => squareRoot(-1)).toThrow('Cannot calculate square root of negative number');
    });

    test('should throw correct error type for negative', () => {
      expect(() => squareRoot(-4)).toThrow(Error);
    });

    test('should handle large numbers', () => {
      expect(squareRoot(1000000)).toBe(1000);
    });

    test('should handle very small positive numbers', () => {
      expect(squareRoot(0.0001)).toBe(0.01);
    });

    test('should handle square root of very large numbers', () => {
      expect(squareRoot(Math.pow(10, 10))).toBeCloseTo(100000, -1);
    });
  });

  describe('Integration Tests - Extended Operations (Image Examples)', () => {
    test('should calculate modulo: 5 % 2 = 1', () => {
      expect(modulo(5, 2)).toBe(1);
    });

    test('should calculate power: 2 ^ 3 = 8', () => {
      expect(power(2, 3)).toBe(8);
    });

    test('should calculate square root: √16 = 4', () => {
      expect(squareRoot(16)).toBe(4);
    });

    test('should calculate 20 % 7 = 6', () => {
      expect(modulo(20, 7)).toBe(6);
    });

    test('should calculate 3 ^ 4 = 81', () => {
      expect(power(3, 4)).toBe(81);
    });

    test('should calculate √100 = 10', () => {
      expect(squareRoot(100)).toBe(10);
    });

    test('should calculate 17 % 5 = 2', () => {
      expect(modulo(17, 5)).toBe(2);
    });

    test('should calculate 10 ^ 2 = 100', () => {
      expect(power(10, 2)).toBe(100);
    });

    test('should calculate √144 = 12', () => {
      expect(squareRoot(144)).toBe(12);
    });

    test('should handle chained operations: (√16 + 2) * 3 = 18', () => {
      const sqrtResult = squareRoot(16);
      const addResult = add(sqrtResult, 2);
      const multiplyResult = multiply(addResult, 3);
      expect(multiplyResult).toBe(18);
    });

    test('should handle chained operations: 2 ^ 3 + 5 % 2 = 9', () => {
      const powerResult = power(2, 3);
      const moduloResult = modulo(5, 2);
      const addResult = add(powerResult, moduloResult);
      expect(addResult).toBe(9);
    });

    test('should handle modulo with large numbers', () => {
      expect(modulo(1000000, 7)).toBe(1000000 % 7);
    });

    test('should handle power with negative base and odd exponent', () => {
      expect(power(-3, 3)).toBe(-27);
    });

    test('should handle power with decimal base', () => {
      expect(power(2.5, 2)).toBe(6.25);
    });
  });

  describe('Edge Cases and Error Handling', () => {
    test('should throw error when taking square root of -5', () => {
      expect(() => squareRoot(-5)).toThrow('Cannot calculate square root of negative number');
    });

    test('should throw error when taking square root of -0.5', () => {
      expect(() => squareRoot(-0.5)).toThrow('Cannot calculate square root of negative number');
    });

    test('should throw error for modulo by zero', () => {
      expect(() => modulo(100, 0)).toThrow('Cannot calculate modulo with zero');
    });

    test('should throw error for modulo by negative zero', () => {
      expect(() => modulo(50, -0)).toThrow('Cannot calculate modulo with zero');
    });

    test('should handle power of 0 raised to 0', () => {
      expect(power(0, 0)).toBe(1);
    });

    test('should handle modulo with very small numbers', () => {
      expect(modulo(0.5, 0.2)).toBeCloseTo(0.1, 1);
    });

    test('should handle square root with floating point precision', () => {
      expect(squareRoot(9)).toBe(3);
      expect(squareRoot(0.25)).toBe(0.5);
    });
  });
});
