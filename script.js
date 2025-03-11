function calculateMPG(event) {
    // Prevent form submission from refreshing the page
    event.preventDefault();
  
    // Retrieve values from the input fields
    const milesTraveled = parseFloat(document.getElementById('milesTraveled').value);
    const gallonsUsed = parseFloat(document.getElementById('gallonsUsed').value);
  
    // Validate inputs (avoid division by zero)
    if (gallonsUsed === 0) {
      document.getElementById('result').innerText = "Gallons used cannot be zero.";
      return;
    }
  
    // Calculate miles per gallon (MPG)
    const mpg = milesTraveled / gallonsUsed;
  
    // Display the result, rounding to two decimal places
    document.getElementById('result').innerText = "Your MPG is: " + mpg.toFixed(2);
  }
  