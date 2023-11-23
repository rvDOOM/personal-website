const headerContainer = document.querySelector('.header-display');

fetch('../src/header.html')
  .then(response => response.text())
  .then(data => {
    headerContainer.innerHTML = data;
  });

