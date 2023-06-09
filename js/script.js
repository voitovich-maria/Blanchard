// header
let burger = document.querySelector('.burger');
let nav = document.querySelector('.nav');
let navLinks = nav.querySelectorAll('.nav__link');

burger.addEventListener('click', function() {
  burger.classList.toggle('burger--active');
  nav.classList.toggle('nav--active');
  document.body.classList.toggle('stop-scroll');
});

navLinks.forEach(function(navLink) {
  navLink.addEventListener('click', function() {
    burger.classList.remove('burger--active');
    nav.classList.remove('nav--active');
    document.body.classList.remove('stop-scroll');
  });
});

let searchBtn = document.querySelector('.search-btn');
let search = document.querySelector('.search');

searchBtn.addEventListener('click', function() {
  searchBtn.classList.toggle('search-btn--active');
  search.classList.toggle('search--active');
});

document.querySelectorAll('.dropdown__list').forEach(function(scroll) {
  new SimpleBar(scroll, {
    autoHide: false,
    scrollbarMaxSize: 28,
  });
});

let dropdownNavBtns = document.querySelectorAll('.dropdown-nav__btn');
let dropdowns = document.querySelectorAll('.dropdown');

dropdownNavBtns.forEach(function(dropdownNavBtn) {
  dropdownNavBtn.addEventListener('click', function() {
    let dropThis = this.parentElement.querySelector('.dropdown');

    dropdowns.forEach(function(el) {
      if (el != dropThis) {
        el.classList.remove('dropdown--active');
      }
    });

    dropdownNavBtns.forEach(el => {
      if (el != this) {
        el.classList.remove('dropdown-nav__btn--active');
      }
    });

    dropThis.classList.toggle('dropdown--active');
    this.classList.toggle('dropdown-nav__btn--active');
  });
});

// hero
let heroSwiper = new Swiper('.hero__swiper', {
  allowTouchMove: false,
  autoplay: {
    delay: 3000,
  },
  effect: 'fade',
  speed: 3000,
});

// gallery
let gallerySwiper = new Swiper('.gallery__swiper', {
  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
  },

  navigation: {
    nextEl: '.gallery__swiper-button-next',
    prevEl: '.gallery__swiper-button-prev',
  },

  a11y: {
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  spaceBetween: 15,

  breakpoints: {
    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38,
    },

    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
});

let modalBtns = document.querySelectorAll('.gallery__swiper-slide');
let overlay = document.querySelector('.overlay');
let closeBtns = document.querySelectorAll('.modal__close-btn');

modalBtns.forEach(function(item) {
  item.addEventListener('click', function(e) {
    let modalId = this.getAttribute('data-modal'),
    modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');
    modalElem.classList.add('modal--active');
    overlay.classList.add('overlay--active');
  });
});

closeBtns.forEach(function(item) {
  item.addEventListener('click', function(e) {
    let parentModal = this.closest('.modal');
    parentModal.classList.remove('modal--active');
    overlay.classList.remove('overlay--active');
  });
});

let select = document.querySelector('.gallery__select');
let choices = new Choices(select, {
  searchEnabled: false,
  position: 'bottom',
  itemSelectText: '',
});

// catalog
new Accordion('.catalog__list', {
  openOnInit: [0],
  elementClass: 'catalog__item',
  triggerClass: 'catalog__btn',
  panelClass: 'catalog__content',
  activeClass: 'catalog__item--active',
});

let tabsNavLink = document.querySelectorAll('.tabs-nav__link');
let tabsItem = document.querySelectorAll('.tabs__item');

tabsNavLink.forEach(function(elem) {
	elem.addEventListener('click', function(e) {
		const path = e.currentTarget.dataset.path;

		tabsNavLink.forEach(function(link) {
			link.classList.remove('tabs-nav__link--active');
		});

    e.currentTarget.classList.add('tabs-nav__link--active');

    tabsItem.forEach(function(item) {
      item.classList.remove('tabs__item--active');
    });

    document.querySelector(`[data-target='${path}']`).classList.add('tabs__item--active');
	});
});

// events
let eventsSwiper = new Swiper('.events__swiper', {
  pagination: {
    el: '.events__swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.events__swiper-button-next',
    prevEl: '.events__swiper-button-prev',
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  spaceBetween: 34,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
});

// projects
tippy('.projects__tooltip-btn-1', {
  arrow: false,
  content: 'Пример современных тенденций \u2014 современная методология разработки',
  maxWidth: 240,
  trigger: 'click',
});

tippy('.projects__tooltip-btn-2', {
  arrow: false,
  content: 'В стремлении повысить качество',
  maxWidth: 240,
  trigger: 'click',
});

tippy('.projects__tooltip-btn-3', {
  arrow: false,
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  maxWidth: 240,
  trigger: 'click',
});

let projectsSwiper = new Swiper('.projects__swiper', {
  navigation: {
    nextEl: '.projects__swiper-button-next',
    prevEl: '.projects__swiper-button-prev',
  },

  a11y: {
    paginationBulletMessage: 'Перейти к слайду {{index}}',
    prevSlideMessage: 'Предыдущий слайд',
    nextSlideMessage: 'Следующий слайд',
  },

  spaceBetween: 34,

  breakpoints: {
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },

    992: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    }
  }
});

// form
let selector = document.querySelector('input[type="tel"]');
let im = new Inputmask('+7(999) 999-99-99');
im.mask(selector);

new JustValidate ('.form', {
  colorWrong: '#d11616',

  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 30,
    },

    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
      },
    },
  },

  messages: {
    name: 'Недопустимый формат',
    tel: 'Недопустимый формат',
  },
});

// map
ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map('map', {
    center: [55.75846806898367,37.60108849999989],
    zoom: 14,
    controls: ['geolocationControl', 'zoomControl'],
  }, {
    suppressMapOpenBlock: true,
    geolocationControlSize: 'large',
    geolocationControlFloat: 'none',
    geolocationControlPosition: { top: '350px', right: '20px' },
    zoomControlSize: 'small',
    zoomControlFloat: 'none',
    zoomControlPosition: { top: '270px', right: '20px' }
  });

  myMap.behaviors.disable('scrollZoom');

  var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'img/location.svg',
    iconImageSize: [20, 20],
    iconImageOffset: [-10, -10],
  });

  myMap.geoObjects.add(myPlacemark);
}
