  function setActive(index) {
    // Get all navigation items
    var navItems = document.querySelectorAll('nav a');

    // Remove the 'active' class from all items
    navItems.forEach(function(item) {
      item.classList.remove('active');
    });

    // Add the 'active' class to the selected item
    navItems[index].classList.add('active');
  }

  
// live date update
// JavaScript to update the date in real-time
function updateLiveDate() {
  var now = new Date();
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  var formattedDate = now.toLocaleDateString('en-US', options);
  document.getElementById('liveDate').textContent = formattedDate;
}
// Update the date immediately and then every second
updateLiveDate();
setInterval(updateLiveDate, 1000);



// slide images for banner
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");

  if (n > slides.length) {
    slideIndex = 1;
  }

  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
 // Automatically change slides every 1500 milliseconds (1.5 seconds)
 setInterval(function () {
    plusSlides(1);
  }, 3000);
  
  
  // services
  function showService(){
    window.location.href='./service.html';
  }

 // Features
 function showFeatures(){
  window.location.href='./features.html';
}
 
//Steps
function showStep(){
  window.location.href='./steps.html';
}

// govt logo link

function digitalIndia() {
    window.location.href = 'https://csc.gov.in/digitalIndia';
}
function Mudra() {
    window.location.href = 'https://www.mudra.org.in/';
}
function swatchBharat() {
    window.location.href = 'https://swachhbharatmission.gov.in/sbmcms/index.htm';
}
function skillIndia() {
    window.location.href = 'https://www.skillindiadigital.gov.in/home';
}
function g2O() {
    window.location.href = 'https://g20.mygov.in/';
}
function myGov() {
    window.location.href = 'https://g20.mygov.in/';
}
function aadhar() {
    window.location.href = 'https://uidai.gov.in/en/';
}
function govtOfIndia() {
    window.location.href = 'https://www.india.gov.in/';
}
function lokpal() {
    window.location.href = 'https://www.lokpal.gov.in/#:~:text=Acting%20Chairperson%2C%20Lokpal&text=The%20Act%20came%20into%20force,from%2028th%20May%2C2022.';
}
function worldFoodIndia() {
    window.location.href = 'https://worldfoodindia.gov.in/';
}
function IndianPost() {
    window.location.href = 'https://www.indiapost.gov.in/vas/Pages/IndiaPostHome.aspx';
}
