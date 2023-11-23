const headerContainer = document.querySelector('.header-display');
const contentContainer = document.querySelector('.content-display');
const footerContainer = document.querySelector('.footer-display')

fetch('../src/header.html')
  .then(response => response.text())
  .then(data => {
    headerContainer.innerHTML = data;
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
