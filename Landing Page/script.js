const toggleButtons = document.querySelectorAll('.toggle-button');

toggleButtons.forEach((button) => {
  button.addEventListener('click', () => {
    button.classList.toggle('active');
  });
});