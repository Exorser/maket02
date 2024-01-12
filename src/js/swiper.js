let mySwiper;
function initSwiper() {
  const screenWidth = document.body.clientWidth;
  if ((screenWidth < 768) && (mySwiper == undefined)) {
    mySwiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
    });
  } if ((screenWidth >= 768) && (mySwiper !== undefined)) {
    for (let i = 0; i < mySwiper.length; i++) {
    mySwiper[i].destroy(true, true);  
  }
    mySwiper = undefined;
      }
    }
initSwiper();

window.addEventListener('resize', function() {
  initSwiper();
});
