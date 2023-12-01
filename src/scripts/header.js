const menuButton = document.querySelector('.header-display .header .top .right .menu-button');
const menu = document.querySelector('.menu-display .menu');
const menuImage = menuButton.querySelector('img');
const menuAnchorElement = menu.querySelectorAll('a');
const headerTopContainer = document.querySelector('.header-display .header .top');
const footerIcons = document.querySelector('.footer .footer-social-icons');
const footerBottom = document.querySelector('.footer .bottom');
const leftHeader = document.querySelector('.header-display .header .top .left');

let isMenuOpen = false;
let openMenuTimer = false;

const enableButton = () => {
  setTimeout(() => {
    openMenuTimer = false;
    menuButton.disabled = false;
  }, 1000)
}

menuButton.addEventListener('click', () => {
  function changeColor(state) {
    let color;
    let altColor;

    // if 0 white, if 1 black
    if(state === 0){
      color = 'white';
      altColor = 'black';
      leftHeader.style.transition = 'color .3s ease-in .7s';
      headerTopContainer.style.transition = 'background-color .3s ease-in .7s';
      footerIcons.style.transition = 'background-color 0.2s ease-in';
      footerBottom.style.transition = 'background-color 0.2s ease-in, color 0.1s ease-out .9s';
    } else {
      color = 'black';
      altColor = 'white';
      leftHeader.style.transition = 'color .05s ease-in';
      headerTopContainer.style.transition = 'background-color .05s ease-in';
      footerIcons.style.transition = 'background-color .15s ease-in 1s';
      footerBottom.style.transition = 'background-color .15s ease-in 1s, color 0.2s ease-out 1s';
    }

    document.querySelectorAll(".social-icon").forEach((object) => {
      const svgDocument = object.contentDocument;
      const svgElement = svgDocument.querySelectorAll('svg');
      svgElement.forEach((svgObject) => {
        svgObject.setAttribute('fill', altColor);
        svgObject.style.transition = 'fill .15s ease-in .9s'
        svgObject.querySelector('path').style.fill = altColor;
        svgObject.querySelector('path').style.transition = 'fill .15s ease-in .9s';
      })
    });

    footerIcons.style.backgroundColor = color;
    footerBottom.style.backgroundColor = color;
    footerBottom.style.color = altColor;
    headerTopContainer.style.backgroundColor = color;
    leftHeader.style.color = altColor;
  }


  if (!openMenuTimer) {
    if (!isMenuOpen){
      menu.classList.remove('menu-close-animation');
      menu.classList.add('menu-open-animation');
      menuAnchorElement.forEach(function (element) { 
        element.style.opacity = 1;
        element.style.transition = 'opacity .3s ease-out .7s';
      });
      changeColor(1);
      isMenuOpen = true;
      menuImage.src = 'src/images/icons/burger-menu-right-svgrepo-com.svg';
      openMenuTimer = true;
    } else {
      menu.classList.remove('menu-open-animation');
      menu.classList.add('menu-close-animation');
      menuAnchorElement.forEach(function (element) { 
        element.style.opacity = 0;
        element.style.transition = 'opacity .3s ease-out .05s';
      });
      changeColor(0)
      isMenuOpen = false;
      menuImage.src = 'src/images/icons/burger-menu-svgrepo-com.svg';
      openMenuTimer = true;
    };

    menuButton.disabled = true;
    enableButton();
  };

})
