function changePrice() {
  const priceElement = document.getElementById("price");
  let currentPrice = parseInt(priceElement.textContent);

  // Simulate a random price change
  const newPrice = currentPrice + Math.floor(Math.random() * 20) - 10;

  priceElement.textContent = newPrice
}
const toggleButton = document.querySelector('.toggle');
const body = document.body;
const darkModeIcon = document.querySelector('.dark-mode-icon');
const lightModeIcon = document.querySelector('.light-mode-icon');

toggleButton.addEventListener('change', () => {
  body.classList.toggle('dark-mode');
  darkModeIcon.classList.toggle('hidden');
  lightModeIcon.classList.toggle('hidden');
});

// Detect the user's preferred color scheme and apply the appropriate styles
if (window.matchMedia('(prefers-color-scheme: light)').matches) {
  body.classList.add('dark-mode');
  darkModeIcon.classList.add('hidden');
  lightModeIcon.classList.remove('hidden');
} else {
  body.classList.remove('dark-mode');
  darkModeIcon.classList.remove('hidden');
  lightModeIcon.classList.add('hidden');
}
function toggleSidebar() {
  var sidebar = document.querySelector('.sidebar');
  var toggleBtn = document.querySelector('.toggle-menu');
  sidebar.classList.toggle('active');
  toggleBtn.classList.toggle('active');
}
function openFunction(){
  document.getElementById('menus').style.width = '200px';

}
function closeFunction(){ 
  document.getElementById('menus').style.width = '0px'; 
}