window.addEventListener('DOMContentLoaded', () => {
    // Get DOM elements
    const principalInput = document.getElementById('principal');
    const rateInput = document.getElementById('rate');
    const yearsInput = document.getElementById('years');
    const convertBtn = document.getElementById('convertBtn');
    const resultOutput = document.getElementById('result');
  
    // Add event listener to the convert button
    convertBtn.addEventListener('click', convertToInterest);
  
    // Function to convert principal, rate, and years to interest amount
    function convertToInterest() {
      const principal = parseFloat(principalInput.value);
      const rate = parseFloat(rateInput.value);
      const years = parseInt(yearsInput.value);
  
      if (isNaN(principal) || isNaN(rate) || isNaN(years)) {
        resultOutput.value = 'Invalid input';
        return;
      }
  
      if (principal < 0 || rate < 0 || years < 0) {
        resultOutput.value = 'Input values must be positive';
        return;
      }
  
      const interest = (principal * rate * years) / 100;
      resultOutput.value = interest.toFixed(2);
    }
  });