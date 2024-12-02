// Toggle Sidebar Function
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const hamburger = document.querySelector('.hamburger');
    sidebar.classList.toggle('active');
    hamburger.classList.toggle('active');
 }
 



 const texts = ["UI/UX Designer", "Web Developer"];
 let index = 0;
 
 function typeAnimation() {
     const animatedText = document.querySelector(".animated-text");
     animatedText.textContent = texts[index]; 
     index = (index + 1) % texts.length;
 }
 
 
 typeAnimation();
 
 
 setInterval(() => {
     const animatedText = document.querySelector(".animated-text");
     animatedText.style.animation = "none";
     setTimeout(() => {
         animatedText.style.animation = ""; 
         typeAnimation();
     }, 900); 
 }, 4000); 



// Dark Mode Toggle Function
function toggleDarkMode() {
    // Toggle dark mode class on body
    document.body.classList.toggle("dark-mode");

    // Toggle between moon and sun icon
    const icon = document.querySelector(".mode-toggle i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");  // Change icon to sun when dark mode is active
        localStorage.setItem("theme", "dark");        // Save dark mode preference in localStorage
    } else {
        icon.classList.replace("fa-sun", "fa-moon");  // Change icon to moon when light mode is active
        localStorage.setItem("theme", "light");       // Save light mode preference in localStorage
    }
}

// Check for saved theme preference on page load
document.addEventListener("DOMContentLoaded", () => {
    const theme = localStorage.getItem("theme");  // Get theme from localStorage

    if (theme === "dark") {
        document.body.classList.add("dark-mode");  // Apply dark mode
        document.querySelector(".mode-toggle i").classList.replace("fa-moon", "fa-sun"); // Change icon to sun
    } else {
        document.body.classList.remove("dark-mode");  // Apply light mode
        document.querySelector(".mode-toggle i").classList.replace("fa-sun", "fa-moon"); // Change icon to moon
    }
});
