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
  lightModeIcon.classList.add('hidden');}