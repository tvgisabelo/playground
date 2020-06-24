import './index.scss';

const site = function () {
  let dom = {};
 
  // Private
  function _cacheDOM() {
    dom.body = document.body;
    dom.app = document.querySelector('.app');
    dom.appHeader = dom.app.querySelector('.app-header');
    dom.appMain = dom.app.querySelector('.app-main');
    dom.appContent = dom.appMain.querySelector('.app-content');
    dom.appFooter = dom.app.querySelector('.app-main');

    dom.navbarMenuItem = dom.app.querySelectorAll('.navbar__menu-item');
  }

  // Public
  return {
    init() {
      _cacheDOM();
    }
  };
};

document.addEventListener("DOMContentLoaded", function () {
  site().init();
});