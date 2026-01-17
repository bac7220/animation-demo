const hamburgerBtn = document.querySelectorAll('.hamburger');
hamburgerBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    btn.classList.toggle('is-action');
  })
});