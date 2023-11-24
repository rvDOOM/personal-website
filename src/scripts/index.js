const headerContainer = document.querySelector('.header-display');
const contentContainer = document.querySelector('.content-display');
const footerContainer = document.querySelector('.footer-display')
const menuContainer = document.querySelector('.menu-display');

fetch('../src/header.html')
  .then(response => response.text())
  .then(data => {
    headerContainer.innerHTML = data;
    const headerScript = document.createElement('script');
    headerScript.src = "/src/scripts/header.js";
    document.head.appendChild(headerScript);
  });

fetch('../src/home.html')
  .then(response => response.text())
  .then(data => {
    contentContainer.innerHTML = data;
  });

fetch('../src/footer.html')
  .then(response => response.text())
  .then(data => {
    footerContainer.innerHTML = data;
  });

fetch('../src/menu.html')
  .then(response => response.text())
  .then(data => {
    menuContainer.innerHTML = data;
  });
