var li_links = document.querySelectorAll(".links ul li");
var view_wraps = document.querySelectorAll(".view_wrap");
var list_view = document.querySelector(".list-view");
var grid_view = document.querySelector(".grid-view");

li_links.forEach(function(link){
	link.addEventListener("click", function(){
		li_links.forEach(function(link){
			link.classList.remove("active");
		})

		link.classList.add("active");

		var li_view = link.getAttribute("data-view");

		view_wraps.forEach(function(view){
			view.style.display = "none";
		})

		if(li_view == "list-view"){
			list_view.style.display = "block";
		}
		else{
			grid_view.style.display = "block";
		}
	})
})
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