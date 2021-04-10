import {select, classNames} from '../settings.js';

class Home {
  constructor(element) {
    const thisHome = this;

    thisHome.render(element);
    thisHome.initActions();
  }

  render(element){
    const thisHome = this;

    thisHome.dom = {};
    thisHome.dom.wrapper = element;

    thisHome.dom.linkOrder = document.querySelector(select.containerOf.linkOrder);
    thisHome.dom.linkBooking = document.querySelector(select.containerOf.linkBooking);
    thisHome.dom.pages = document.querySelector(select.containerOf.pages).children;
    thisHome.dom.navLinks = document.querySelectorAll(select.nav.links);
  }

  initActions(){
    const thisHome = this;

    thisHome.dom.linkOrder.addEventListener('click', function(event) {
      event.preventDefault();

      thisHome.dom.pages[0].classList.remove(classNames.pages.active);
      thisHome.dom.navLinks[0].classList.remove(classNames.nav.active);
      thisHome.dom.pages[1].classList.add(classNames.pages.active);
      thisHome.dom.navLinks[1].classList.add(classNames.nav.active);
    });

    thisHome.dom.linkBooking.addEventListener('click', function(event) {
      event.preventDefault();

      thisHome.dom.pages[0].classList.remove(classNames.pages.active);
      thisHome.dom.navLinks[0].classList.remove(classNames.nav.active);
      thisHome.dom.pages[2].classList.add(classNames.pages.active);
      thisHome.dom.navLinks[2].classList.add(classNames.nav.active);
    });
  }

}

export default Home;