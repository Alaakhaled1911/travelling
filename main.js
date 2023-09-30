let menu =document.querySelector('#menu');
let nav =document.querySelector('.navbar');
menu.addEventListener('click',()=>{
  menu.classList.toggle('fa-times');
  nav.classList.toggle('nav-toggle');
});
window.onscroll = ()=>{
  menu.classList.remove('fa-times');
  nav.classList.remove('nav-toggle');
}
var swiper = new Swiper(".image-slider", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
  },
  loop:true,
  autoplay: {
        delay: 2000,
        disableOnInteraction: false,
  },
});    




