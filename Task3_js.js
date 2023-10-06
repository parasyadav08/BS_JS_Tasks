// Function to perform multiplication
function multiplyNumbers() {
    const firstNumber = parseFloat(document.getElementById("first-number").value);
    const secondNumber = parseFloat(document.getElementById("second-number").value);
  
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      const result = firstNumber * secondNumber;
      document.getElementById("result").textContent = `Result: ${result}`;
    } else {
      document.getElementById("result").textContent = "Please enter valid numbers.";
    }
  }
  
  // Function to perform division
  function divideNumbers() {
    const firstNumber = parseFloat(document.getElementById("first-number").value);
    const secondNumber = parseFloat(document.getElementById("second-number").value);
  
    if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
      if (secondNumber !== 0) {
        const result = firstNumber / secondNumber;
        document.getElementById("result").textContent = `Result: ${result}`;
      } else {
        document.getElementById("result").textContent = "Cannot divide by zero.";
      }
    } else {
      document.getElementById("result").textContent = "Please enter valid numbers.";
    }
  }
  
  // Add click event listeners to the buttons
  document.getElementById("multiply-button").addEventListener("click", multiplyNumbers);
  document.getElementById("divide-button").addEventListener("click", divideNumbers);
  