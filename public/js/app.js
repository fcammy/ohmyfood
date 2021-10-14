if(document.querySelector('body').classList.contains('home')) {
  var loader = document.getElementById('loader');

  setTimeout(function()  {
    loader.style.display = 'none';
    document.body.style.overflow = 'auto'
  }, 3000);

  document.querySelector('nav button').addEventListener('click', function() {
    this.classList.toggle('open')
  })
}




document.querySelectorAll('.card__heart, .menu__heart').forEach(btn => {
  btn.addEventListener('click', function() {
    this.classList.toggle('active');

    if(this.classList.contains('active')) {
      this.children[0].classList.remove('far');
      this.children[0].classList.add('fas');
    }else{
      this.children[0].classList.remove('fas');
      this.children[0].classList.add('far');
    }
  })
});

document.querySelectorAll('.menu__list .item').forEach(item => {
  item.addEventListener('click', function() {
    this.classList.toggle('active');
  })
});


