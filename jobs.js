 // toggle button
  
 document.addEventListener("DOMContentLoaded", function () {
  const sidebarToggle = document.getElementById("sidebarToggle");
  const navbar = document.getElementById("navbar");

  sidebarToggle.addEventListener("click", function () {
      // Toggle the visibility of the navbar
      navbar.style.display = navbar.style.display === "none" ? "block" : "none";
  });
});