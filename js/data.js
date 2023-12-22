 // Delayed display of map (10 seconds in this example)
 $(document).ready(function () {
  setTimeout(function () {
      $('#earthGif').hide(); // Hide the Earth GIF
      $('#map-container').css('display', 'block'); // Show the map container
      var map = L.map('map-container').setView([19.7515, 75.7139], 8); // Set the view to Maharashtra
      var osm = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      });
      osm.addTo(map);
      L.control.fullscreen().addTo(map);
      L.Control.geocoder().addTo(map);
      // Adjust the height of the map container to take up the full screen
      $('#map-container').css('height', '100vh');
  }, 1000); // 10-second delay
});

function toggleDropdown() {
  var dropdownContent = document.getElementById("dropdownContent");
  dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
}