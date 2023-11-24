const menuButton = document.querySelector('.header-display .header .top .right .menu-button');
const menu = document.querySelector('.menu-display .menu');
const menuImage = menuButton.querySelector('img');

let isMenuOpen = false;
let openMenuTimer = false;

const enableButton = () => {
  setTimeout(() => {
    openMenuTimer = false;
    menuButton.disabled = false;
  }, 100)
}

menuButton.addEventListener('click', () => {
  console.log('clicked')

  if (!openMenuTimer) {
    if (!isMenuOpen){
      console.log('inside if statement');
      menu.style.visibility = 'visible';
      isMenuOpen = true;
      menuImage.src = 'src/images/icons/burger-menu-right-svgrepo-com.svg';
      openMenuTimer = true;
    } else {
      console.log('inside else statement');
      menu.style.visibility = 'hidden';
      isMenuOpen = false;
      menuImage.src = 'src/images/icons/burger-menu-svgrepo-com.svg';
      openMenuTimer = true;
    };
    menuButton.disabled = true;
    enableButton();
  };


})
