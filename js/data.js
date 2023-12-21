var map = L.map('map').setView([19.7515, 75.7139], 8); // Set the view to Maharashtra

var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

osm.addTo(map);
L.control.fullscreen().addTo(map);
L.Control.geocoder().addTo(map);

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}

function displayContent(section) {
  // Replace this with the logic to display the content of each section
  console.log("Displaying content for section: " + section);
}