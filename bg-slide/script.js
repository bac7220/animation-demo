console.log('test');  
const observe = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-active');
    }
  })
})
document.querySelectorAll('.js-slide').forEach((el => observe.observe(el)));

