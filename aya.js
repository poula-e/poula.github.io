function openNav() {
    document.querySelector(".sidebar").style.width = "200px";
  }
  
  function closeNav() {
    document.querySelector(".sidebar").style.width = "0";
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