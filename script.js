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
    document.body.classList.toggle("dark-mode");

    // Toggle between moon and sun icon
    const icon = document.querySelector(".mode-toggle i");
    if (document.body.classList.contains("dark-mode")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");
    }
}

// Check for saved theme preference on page load
window.onload = () => {
    const theme = localStorage.getItem("theme");

    if (theme === "dark") {
        document.body.classList.add("dark-mode");
        document.querySelector(".mode-toggle i").classList.replace("fa-moon", "fa-sun");
    } else {
        document.body.classList.remove("dark-mode");
        document.querySelector(".mode-toggle i").classList.replace("fa-sun", "fa-moon");
    }
};

