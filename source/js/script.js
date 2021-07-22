let mainNavJs = function () {
  let mainHeader = document.querySelector('.main-header');
  let navMain = mainHeader.querySelector('.main-nav');
  let navToggle = mainHeader.querySelector('.main-nav__toggle');

  navMain.classList.remove('main-nav--no-js');
  navMain.classList.add('main-nav--open');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--close')) {
      navMain.classList.remove('main-nav--close');
      navMain.classList.add('main-nav--open');
    } else {
      navMain.classList.add('main-nav--close');
      navMain.classList.remove('main-nav--open');
    }
  });
}

mainNavJs();
