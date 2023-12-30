$(document).ready(function () {
  setTimeout(function () {
      $('#earthGif').hide(); // Hide the Earth GIF
      $('#map-container').css('display', 'block'); // Show the map container
      
       // Initialize Leaflet map
       var map = L.map('map-container').setView([20.5937, 78.9629], 5); // India coordinates
      
    //   var map = L.map('map-container').setView([19.7515, 75.7139], 8); 
      // Set the view to Maharashtra


      // Base maps
      var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik');
      var stamenMap = L.tileLayer.provider('Stadia.StamenWatercolor');
      var darkMap = L.tileLayer.provider('Stadia.AlidadeSmoothDark');
      var imageryMap = L.tileLayer.provider('Esri.WorldImagery');

      // Overlay maps
      var geoServerIPPort = 'localhost:8080';
      var geoServerWorkspace = 'GIS';
      var stateLayerName = 'GIS:ind_st';

      var indStateLayer = L.tileLayer.wms(
          "http://" + geoServerIPPort + "/geoserver" + geoServerWorkspace + "/wms",
          {
              layers: stateLayerName,
              format: "image/png",
              transparent: true,
              version: "1.1.0",
              tiled: true,
          }
      );

      var baseMaps = {
          'OpenStreetMap': osmMap,
          'Stamen Watercolor': stamenMap,
          'Alidade Smooth Dark': darkMap,
          'World Imagery': imageryMap
      };

      var overlayMaps = {
          'India States': indStateLayer
      };

      // Add layers and controls
      L.control.layers(baseMaps, overlayMaps).addTo(map);

      osmMap.addTo(map); // Default base map
      indStateLayer.addTo(map); // Default overlay map

      L.control.fullscreen().addTo(map);
      L.Control.geocoder().addTo(map);

      // Adjust the height of the map container to take up the full screen
      $('#map-container').css('height', '100vh');

      // Adding measurement control
      var ctlMeasure = L.control.polylineMeasure({
          position: "topright",
          measureControlTitle: "Measure Length"
      }).addTo(map);
  }, 1000); // 10-second delay
});

// function toggleDropdown() {
//     var dropdownContent = document.getElementById("dropdownContent");
//     dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
// }
