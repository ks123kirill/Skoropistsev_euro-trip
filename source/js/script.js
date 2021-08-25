  const tabs = document.querySelector('.tabs');
  const navTabsLink = tabs.querySelectorAll('.nav-tabs__link');
  const listTabsItems = tabs.querySelectorAll('.list-tabs__item');
  const catalogList = document.querySelector('.catalog__list');
  const catalogLinks = catalogList.querySelectorAll('.catalog__link');

const mainNavJs = function () {
  const mainHeader = document.querySelector('.main-header');
  const navMain = mainHeader.querySelector('.main-nav');
  const navToggle = mainHeader.querySelector('.main-nav__toggle');

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

const tabsJs = function () {
  listTabsItems.forEach((item) => {
    if (!item.classList.contains('list-tabs__item--show')) {
      item.classList.add('list-tabs__item--closed');
    }
  });
}

const getTabsFunction = function (iterator) {
  for (let j = 0; j < navTabsLink.length; j++) {
    navTabsLink[j].classList.remove('nav-tabs__link--active');
    if (listTabsItems[j].classList.contains('list-tabs__item--show')) {
      listTabsItems[j].classList.remove('list-tabs__item--show');
      listTabsItems[j].classList.add('list-tabs__item--closed');
    }
  }
  navTabsLink[iterator].classList.add('nav-tabs__link--active');
  listTabsItems[iterator].classList.remove('list-tabs__item--closed');
  listTabsItems[iterator].classList.add('list-tabs__item--show');
}

const getActiveTab = function () {
  for (let i = 0; i < navTabsLink.length; i++) {
    navTabsLink[i].addEventListener('click', function (evt) {
      evt.preventDefault();
      getTabsFunction(i);
    });
  }
}

const getCatalogLink = function () {
  for (let i = 0; i < catalogLinks.length; i++) {
    catalogLinks[i].addEventListener('click', function () {
      getTabsFunction(i);
    });
  }
}

mainNavJs();
tabsJs();
getActiveTab();
getCatalogLink();

///////////
