# Simple Calculator

A simple web-based calculator that performs basic math operations.

## Features

1. **Basic Math Operations:**
   - Addition
   - Subtraction
   - Multiplication
   - Division

2. **Calculator Operation:**
   - A calculator operation consists of a number, an operator, and another number.
   - Three variables are used to store the first number, the operator, and the second number.

3. **Functionality:**
   - Create a function `operate` that takes an operator and two numbers and calls one of the basic math functions.
   - Populate the display with dummy numbers.
   - Buttons for each digit, math operations, equals sign, and a clear button.

4. **Display:**
   - Display for the calculator to show the input and results.

5. **Functionality Implementation:**
   - Create functions to populate the display when number buttons are clicked.
   - Make the calculator work by storing numbers, operators, and calling `operate` on user input.

6. **User Input Handling:**
   - Users can string together several operations and get the right answer.
   - Calculator evaluates a single pair of numbers at a time, preventing issues with multiple evaluations.
   - Round answers with long decimals to avoid overflow.
   - Prevent potential issues with pressing equals before entering all numbers or an operator.
   - Display a snarky error message if the user tries to divide by 0.

## Usage

1. Open the `index.html` file in a web browser.
2. Click on number buttons, math operation buttons, and equals sign to perform calculations.
3. Clear the display with the clear button.
4. Avoid dividing by 0 to prevent errors.
