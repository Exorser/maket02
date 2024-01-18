const initSwiper = () => {
  const mediaQueryList = window.matchMedia("(max-width: 767px)");
  let swiper = null;

  const createSwiper = () => {
    swiper = new Swiper(".swiper-container", {
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
      },
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: false,
    });
  };

  const destroySwiper = () => {
    if (swiper) {
      swiper.destroy();
      swiper = null; // Reset the swiper variable
    }
  };

  const handleMediaQueryChange = (e) => {
    if (e.matches) {
      createSwiper();
    } else {
      destroySwiper();
    }
  };

  mediaQueryList.addEventListener("change", handleMediaQueryChange);

  // Initial check for the media query
  handleMediaQueryChange(mediaQueryList);


  // Функция для проверки разрешения экрана и обновления страницы при достижении 768px
  const checkResolutionAndReload = () => {
    if (window.innerWidth >= 768) {
      location.reload();
    }
  };
  
  window.addEventListener('resize', () => {
    checkResolutionAndReload();
  })
}
initSwiper();