$(document).ready(function () {
    setTimeout(function () {
        // Hide the Earth GIF and show the map container
        $('#earthGif').hide();
        $('#map-container').css('display', 'block');
  
        // Initialize Leaflet map
        var map = L.map('map-container').setView([20.5937, 78.9629], 5); // India coordinates
  
        // Base maps
        var osmMap = L.tileLayer.provider('OpenStreetMap.Mapnik');
        var stamenMap = L.tileLayer.provider('Stadia.StamenWatercolor');
        var cyclOSMMap = L.tileLayer.provider('CyclOSM');
        var darkMap = L.tileLayer.provider('Stadia.AlidadeSmoothDark');
        var smoothMap = L.tileLayer.provider('Stadia.AlidadeSmooth');
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
            'CyclOSM': cyclOSMMap,
            'Alidade Smooth Dark': darkMap,
            'Stadia Smooth': smoothMap,
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
  
        // Load GeoJSON data using AJAX
        $.ajax({
            dataType: "json",
            url: "./GeoJSON/maha1.geojson",
            success: function (data) {
                // Add GeoJSON to the map with black boundary color
                L.geoJSON(data, {
                    style: {
                        color: 'black', // Set the boundary line color to black
                        weight: 2, // You can adjust the line weight as needed
                    }
                }).addTo(map);
            }
        });
    }, 1000); // 10-second delay
  });
  