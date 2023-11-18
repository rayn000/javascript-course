function toggleButton(selector) {
  const buttonElement = document.querySelector(selector);
  if (!buttonElement.classList.contains('is-toggled')) {

    turnOffPrevious();

    buttonElement.classList.add('is-toggled');
  } else {
    buttonElement.classList.remove('is-toggled');
  }
}

function turnOffPrevious() {
  const previousButton = document.querySelector('.is-toggled');
  if (previousButton) {
    previousButton.classList.remove('is-toggled');
  }
}