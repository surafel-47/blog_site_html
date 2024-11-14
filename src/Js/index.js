function loadPage(page) {
  const container = document.getElementById("page-content");

  // Clear the container before loading new content
  container.innerHTML = "";

  // Load content based on the page argument
  fetch(`${page}.html`)
    .then((response) => response.text())
    .then((data) => {
      container.innerHTML = data;
    });
}

// Load the home page by default on initial load
window.onload = () => loadPage("home");

 // Toggle Mobile Menu Drawer
 const menuBtn = document.getElementById("menu-btn");
 const closeBtn = document.getElementById("close-btn");
 const mobileMenu = document.getElementById("mobile-menu");

 menuBtn.addEventListener("click", () => {
   mobileMenu.classList.remove("translate-x-full"); 
 });

 closeBtn.addEventListener("click", () => {
   mobileMenu.classList.add("translate-x-full"); 
 });

// Toggle Dark Mode
function toggleDarkMode() {
  document.documentElement.classList.toggle("dark");
}

function showSignup() {
  console.log("Clicked");
  document.getElementById("login-form").classList.add("hidden");
  document.getElementById("signup-form").classList.remove("hidden");
  document.getElementById("signup-form").classList.add("transform", "translate-y-10");
}

function showLogin() {
  console.log("Back to login");
  document.getElementById("signup-form").classList.add("hidden");
  document.getElementById("login-form").classList.remove("hidden");
  document.getElementById("login-form").classList.add("transform", "translate-y-10");
}

function previewBannerImage(event) {
  const file = event.target.files[0];
  const reader = new FileReader();

  reader.onload = function (e) {
    const preview = document.getElementById("banner-preview");
    preview.src = e.target.result;
    preview.classList.remove("hidden");
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}
