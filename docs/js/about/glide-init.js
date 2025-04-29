/**
 * Инициализация слайдера (Glide.js)
 *
 * Этот скрипт запускает слайдер на элементе 
 * если такой элемент присутствует в DOM.
 *
 * Используется библиотека Glide.js.
 * 
 * В ШАПКЕ 
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@glidejs/glide/dist/css/glide.core.min.css"/>
 * 
 * В ПОДВАЛЕ 
    <script src="https://cdn.jsdelivr.net/npm/@glidejs/glide"></script>
 * 
 * Слайдер настроен как карусель:
 *  - Показывает 6 элементов по умолчанию
 *  - Промежуток между слайдами — 24px
 *  - На экранах шириной до 992px — 4 элемента
 *  - До 768px — 2 элемента
 *
 * Скрипт выполняется после полной загрузки DOM.
 */


document.addEventListener('DOMContentLoaded', function () {
  const partnersGlide = document.querySelector('#partners-glide');
  const sectionWorks = document.querySelector("#section-works");
  const sectionProduct = document.querySelector("#section-product")
  const clientsGlide = document.querySelector("#clients-glide");

  const contourSlider = document.querySelector("#slider-contour");
  const lightFaceAndEndsSlider = document.querySelector("#slider-light-face-and-ends");
  const lightFaceSlider = document.querySelector("#slider-light-face");

  if (partnersGlide) {
    new Glide(partnersGlide, {
      type: 'carousel',
      perView: 4,
      gap: 24,
      breakpoints: {
        992: {
          perView: 3,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }

  if (sectionWorks) {
    new Glide(sectionWorks, {
      type: 'carousel',
      perView: 3,
      gap: 24,
      breakpoints: {
        992: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }

  if (sectionProduct) {
    new Glide(sectionProduct, {
      type: 'carousel',
      perView: 3,
      gap: 24,
      breakpoints: {
        992: {
          perView: 2,
        },
        768: {
          perView: 1,
        },
      },
    }).mount();
  }

  if (clientsGlide) {
    new Glide(clientsGlide, {
      type: 'carousel',
      perView: 6,
      gap: 24,
      breakpoints: {
        1400: {
          perView: 5,
        },
        1200: {
          perView: 4,
        },
        992: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
        590: {
          perView: 1,
        },
      },
    }).mount();
  }

  if (lightFaceSlider) {
    new Glide(lightFaceSlider, {
      type: 'carousel',
      perView: 2,
      gap: 24,
      breakpoints: {
        767: {
          perView: 1,
        },
      },
    }).mount();
  }

  if (contourSlider) {
    new Glide(contourSlider, {
      type: 'carousel',
      perView: 2,
      gap: 24,
      breakpoints: {
        767: {
          perView: 1,
        },
      },
    }).mount();
  }

  if (lightFaceAndEndsSlider) {
    new Glide(lightFaceAndEndsSlider, {
      type: 'carousel',
      perView: 2,
      gap: 24,
      breakpoints: {
        767: {
          perView: 1,
        },
      },
    }).mount();
  }
});

