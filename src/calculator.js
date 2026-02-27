#!/usr/bin/env node

/**
 * Node.js CLI Calculator Application
 * 
 * Supported Operations:
 * - Addition (+)
 * - Subtraction (-)
 * - Multiplication (*)
 * - Division (/)
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

module.exports = { add, subtract, multiply, divide };

if (require.main === module) {
  function performOperation(num1, operator, num2) {
    switch (operator) {
      case '+':
        return add(num1, num2);
      case '-':
        return subtract(num1, num2);
      case '*':
        return multiply(num1, num2);
      case '/':
        return divide(num1, num2);
      default:
        throw new Error(`Invalid operator: ${operator}. Supported operators: +, -, *, /`);
    }
  }

  function promptUser() {
    console.log('\n=== Node.js CLI Calculator ===');
    console.log('Supported operations: + - * /\n');

    rl.question('Enter first number: ', (input1) => {
      const num1 = parseFloat(input1);

      if (isNaN(num1)) {
        console.log('Error: Invalid number');
        promptUser();
        return;
      }

      rl.question('Enter operator (+, -, *, /): ', (operator) => {
        if (!['+', '-', '*', '/'].includes(operator)) {
          console.log('Error: Invalid operator');
          promptUser();
          return;
        }

        rl.question('Enter second number: ', (input2) => {
          const num2 = parseFloat(input2);

          if (isNaN(num2)) {
            console.log('Error: Invalid number');
            promptUser();
            return;
          }

          try {
            const result = performOperation(num1, operator, num2);
            console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}`);
          } catch (error) {
            console.log(`Error: ${error.message}`);
          }

          rl.question('\nCalculate again? (yes/no): ', (answer) => {
            if (answer.toLowerCase() === 'yes' || answer.toLowerCase() === 'y') {
              promptUser();
            } else {
              console.log('Thank you for using the calculator!');
              rl.close();
            }
          });
        });
      });
    });
  }

  promptUser();
}

