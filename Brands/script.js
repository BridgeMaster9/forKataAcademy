
//------ инициализация свайпера
let swiper = new Swiper(".swiper", {
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
let mediaQuery = window.matchMedia('(min-width: 768px)');
let brandContainer = document.querySelector('.brands-container');
let brandsContent = document.querySelector('.brands-content')

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
let brandsButton = document.querySelector('.brands-content__btn')
let brandsButtonText = brandsButton.querySelector('.next-button__text')
let brandsButtonIcon = brandsButton.querySelector('.next-button__icon')

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