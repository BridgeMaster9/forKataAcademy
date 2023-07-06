
//------ инициализация свайпера
var swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 16,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
});
//------ при width screen>768 - remove swiper
var mediaQuery = window.matchMedia('(min-width: 768px)');
var brandContainer = document.querySelector('.brands-container');
var brandsContent = document.querySelector('.brands-content')

function HandleMediaQuery(e){
  if(mediaQuery.matches){
    brandContainer.classList.remove('swiper');
    brandsContent.classList.remove('swiper-wrapper');
  }
  else{
    brandContainer.classList.add('swiper');
    brandsContent.classList.add('swiper-wrapper');
  }
}

mediaQuery.addListener(HandleMediaQuery)
HandleMediaQuery(mediaQuery)

//------------ brands-content - кнопка 'показать все'
var brandsButton = document.querySelector('.brands-content__btn')
var brandsButtonText = brandsButton.querySelector('.next-button__text')
var brandsButtonIcon = brandsButton.querySelector('.next-button__icon')

brandsButton.addEventListener('click', function(){
  if(brandsButtonText.textContent === 'Показать все'){
    brandsButtonText.textContent = 'Скрыть';
    brandsContent.setAttribute('style', 'height: auto;');
    brandsButtonIcon.classList.add('icon-rotate');
  }
  else{
    brandsButtonText.textContent = 'Показать все';
    brandsContent.removeAttribute('style');
    brandsButtonIcon.classList.remove('icon-rotate');
  }
})