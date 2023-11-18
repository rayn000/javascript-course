let calculation = localStorage.getItem('calculation');

    displayCalculation();

    function updateCalculation(buttonValue) {
      calculation += buttonValue;
      localStorage.setItem('calculation', calculation);

      displayCalculation();
    }

    function displayCalculation() {
      document.querySelector('.js-display-calculation')
        .innerHTML = calculation;
    }