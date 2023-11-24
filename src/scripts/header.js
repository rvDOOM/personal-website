const menuButton = document.querySelector('.header-display .header .top .right .menu-button');
const menu = document.querySelector('.menu-display .menu');
const menuImage = menuButton.querySelector('img');
const menuAnchorElement = menu.querySelectorAll('a');

let isMenuOpen = false;
let openMenuTimer = false;

const enableButton = () => {
  setTimeout(() => {
    openMenuTimer = false;
    menuButton.disabled = false;
  }, 1000)
}

menuButton.addEventListener('click', () => {
  console.log('clicked')


  function changeToBlack () {
    const headerTopContainer = document.querySelector('.header-display .header .top');
    headerTopContainer.style.backgroundColor = 'black';
    headerTopContainer.style.transition = 'background-color .05s ease-in';
    const leftHeader = document.querySelector('.header-display .header .top .left');
    leftHeader.style.transition = 'color .05s ease-in';
    leftHeader.style.color = 'white';
  }

  function changeToWhite () {
    const headerTopContainer = document.querySelector('.header-display .header .top');
    headerTopContainer.style.backgroundColor = 'white';
    headerTopContainer.style.transition = 'background-color .3s ease-in .7s';
    const leftHeader = document.querySelector('.header-display .header .top .left');
    leftHeader.style.transition = 'color .3s ease-in .7s';
    leftHeader.style.color = 'black';
  }


  if (!openMenuTimer) {
    if (!isMenuOpen){
      menu.classList.remove('menu-close-animation');
      menu.classList.add('menu-open-animation');
      menuAnchorElement.forEach(function (element) { 
        element.style.opacity = 1;
        element.style.transition = 'opacity .3s ease-out .7s';
      });
      changeToBlack();
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
      changeToWhite();
      isMenuOpen = false;
      menuImage.src = 'src/images/icons/burger-menu-svgrepo-com.svg';
      openMenuTimer = true;
    };

    menuButton.disabled = true;
    enableButton();
  };

})
