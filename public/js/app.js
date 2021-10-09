var loader = document.getElementById('loader');

setTimeout(function()  {
  loader.style.display = 'none';
  document.body.style.overflow = 'auto'
}, 3000);


document.querySelector('nav button').addEventListener('click', function() {
  this.classList.toggle('open')
})