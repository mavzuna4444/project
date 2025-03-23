// Placeholder for JavaScript code
console.log("Dushanbe Public Transport Tracking App is running!");

// Initialize the map
const map = L.map('map').setView([38.5599, 68.7870], 13); // Centered on Dushanbe

// Add OpenStreetMap tile layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Example bus stop data
const busStops = [
    { name: "Bus Stop 1", coords: [38.5599, 68.7870] },
    { name: "Bus Stop 2", coords: [38.5630, 68.7850] },
    { name: "Bus Stop 3", coords: [38.5610, 68.7900] }
];

// Add markers for each bus stop
busStops.forEach(stop => {
    const busCount = Math.floor(Math.random() * 5); // Random bus count for demonstration
    L.marker(stop.coords)
        .addTo(map)
        .bindPopup(`${stop.name}<br>Buses arriving: ${busCount}`)
        .openPopup();
});

// Function to handle geolocation
function handleGeolocation(position) {
    const userCoords = [position.coords.latitude, position.coords.longitude];
    L.marker(userCoords)
        .addTo(map)
        .bindPopup("You are here!")
        .openPopup();
    map.setView(userCoords, 13); // Center the map on the user's location
}

// Check if geolocation is supported
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(handleGeolocation, (error) => {
        console.error("Geolocation error: ", error);
        alert("Unable to retrieve your location. Please check your settings.");
    });
} else {
    alert("Geolocation is not supported by this browser.");
}

// Mock bus data
const buses = [
    { id: 1, coords: [38.5600, 68.7860], route: "Route 1" },
    { id: 2, coords: [38.5615, 68.7880], route: "Route 2" },
    { id: 3, coords: [38.5585, 68.7840], route: "Route 3" }
];

// Create a map to hold bus markers
const busMarkers = {};

// Function to update bus positions
function updateBusPositions() {
    buses.forEach(bus => {
        // Simulate bus movement by randomly changing coordinates
        bus.coords[0] += (Math.random() - 0.5) * 0.001; // Change latitude
        bus.coords[1] += (Math.random() - 0.5) * 0.001; // Change longitude

        // If the bus marker doesn't exist, create it
        if (!busMarkers[bus.id]) {
            busMarkers[bus.id] = L.marker(bus.coords)
                .addTo(map)
                .bindPopup(`Bus ID: ${bus.id}, ${bus.route}`)
                .openPopup();
        } else {
            // Update the existing bus marker position
            busMarkers[bus.id].setLatLng(bus.coords);
        }
    });
}

// Update bus positions every 5 seconds
setInterval(updateBusPositions, 5000);

// Function to search for a destination
function searchDestination() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const landmarks = [
        { name: "Landmark 1", coords: [38.5605, 68.7885] },
        { name: "Landmark 2", coords: [38.5620, 68.7865] },
        { name: "Landmark 3", coords: [38.5590, 68.7855] }
    ];

    // Clear previous markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker && layer.getPopup()) {
            map.removeLayer(layer);
        }
    });

    // Find matching landmarks
    const foundLandmarks = landmarks.filter(landmark => landmark.name.toLowerCase().includes(query));

    // Add markers for found landmarks
    foundLandmarks.forEach(landmark => {
        L.marker(landmark.coords)
            .addTo(map)
            .bindPopup(landmark.name)
            .openPopup();
    });

    // If a landmark is found, center the map on it
    if (foundLandmarks.length > 0) {
        const firstLandmark = foundLandmarks[0];
        map.setView(firstLandmark.coords, 13)}}

        const landmarks1 = [
            { name: "Landmark 1", coords: [38.5605, 68.7885] },
            { name: "Landmark 2", coords: [38.5620, 68.7865] },
            { name: "Landmark 3", coords: [38.5590, 68.7855] }
        ];
        
        document.getElementById('search-bar').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const suggestions = landmarks.filter(landmark => landmark.name.toLowerCase().includes(query));
            displaySuggestions(suggestions);
        });
        
        function displaySuggestions(suggestions) {
            const suggestionsContainer = document.getElementById('suggestions');
            suggestionsContainer.innerHTML = ''; // Clear previous suggestions
        
            suggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item');
                div.textContent = suggestion.name;
                div.onclick = () => {
                    document.getElementById('search-bar').value = suggestion.name;
                    suggestionsContainer.innerHTML = ''; // Clear suggestions
                    searchDestination(); // Call the search function
                };
                suggestionsContainer.appendChild(div);
            });
        }
        
        document.getElementById('loading').style.display = 'block'; // Show loading

        // Simulate loading time
        setTimeout(() => {
            document.getElementById('loading').style.display = 'none'; // Hide loading
        }, 1000); // Adjust time as needed












        // Function to search for a destination
function searchDestination() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    const landmarks = [
        { name: "Rudaki Park", coords: [38.5735, 68.7844] },
        { name: "National Museum of Tajikistan", coords: [38.5675, 68.7821] },
        { name: "Flagpole of Dushanbe", coords: [38.5673, 68.7830] },
        { name: "Kokhi Navruz", coords: [38.5687, 68.7795] },
        { name: "Ismaili Centre Dushanbe", coords: [38.5811, 68.7803] },
        { name: "Dushanbe Opera and Ballet Theatre", coords: [38.5790, 68.7915] },
        { name: "Victory Park", coords: [38.5773, 68.8182] },
        { name: "Botanical Garden of Dushanbe", coords: [38.5798, 68.7931] },
        { name: "Somoni Monument", coords: [38.5780, 68.7885] },
        { name: "Dushanbe Zoo", coords: [38.5705, 68.8028] },
        { name: "Tajikistan National Library", coords: [38.5739, 68.7877] },
        { name: "Rohat Tea House", coords: [38.5764, 68.7913] },
        { name: "Dushanbe Central Mosque", coords: [38.5638, 68.7714] },
        { name: "Mehrgon Market", coords: [38.5825, 68.7906] },
        { name: "Sadbarg Shopping Center", coords: [38.5793, 68.7902] },
        { name: "Dusti Square", coords: [38.5781, 68.7883] },
        { name: "Korvon Market", coords: [38.5175, 68.7439] },
        { name: "Barakat Market", coords: [38.5641, 68.7859] },
        { name: "Guliston Park", coords: [38.5720, 68.7900] },
        { name: "Sakhovat Market", coords: [38.5524, 68.7809] }
    ];

    // Clear previous markers
    map.eachLayer(layer => {
        if (layer instanceof L.Marker && layer.getPopup()) {
            map.removeLayer(layer);
        }
    });

    // Find matching landmarks
    const foundLandmarks = landmarks.filter(landmark => landmark.name.toLowerCase().includes(query));

    // Add markers for found landmarks
    foundLandmarks.forEach(landmark => {
        L.marker(landmark.coords)
            .addTo(map)
            .bindPopup(landmark.name)
            .openPopup();
    });

    // If a landmark is found, center the map on it
    if (foundLandmarks.length > 0) {
        const firstLandmark = foundLandmarks[0];
        map.setView(firstLandmark.coords, 13)}}

        const landmarks = [
            { name: "National Museum of Tajikistan", coords: [38.5675, 68.7821] },
            { name: "Flagpole of Dushanbe", coords: [38.5673, 68.7830] },
            { name: "Kokhi Navruz", coords: [38.5687, 68.7795] },
            { name: "Ismaili Centre Dushanbe", coords: [38.5811, 68.7803] },
            { name: "Dushanbe Opera and Ballet Theatre", coords: [38.5790, 68.7915] },
            { name: "Victory Park", coords: [38.5773, 68.8182] },
            { name: "Botanical Garden of Dushanbe", coords: [38.5798, 68.7931] },
            { name: "Somoni Monument", coords: [38.5780, 68.7885] },
            { name: "Dushanbe Zoo", coords: [38.5705, 68.8028] },
            { name: "Tajikistan National Library", coords: [38.5739, 68.7877] },
            { name: "Rohat Tea House", coords: [38.5764, 68.7913] },
            { name: "Dushanbe Central Mosque", coords: [38.5638, 68.7714] },
            { name: "Mehrgon Market", coords: [38.5825, 68.7906] },
            { name: "Sadbarg Shopping Center", coords: [38.5793, 68.7902] },
            { name: "Dusti Square", coords: [38.5781, 68.7883] },
            { name: "Korvon Market", coords: [38.5175, 68.7439] },
            { name: "Barakat Market", coords: [38.5641, 68.7859] },
            { name: "Guliston Park", coords: [38.5720, 68.7900] },
            { name: "Sakhovat Market", coords: [38.5524, 68.7809] }
        ];
        
        document.getElementById('search-bar').addEventListener('input', function() {
            const query = this.value.toLowerCase();
            const suggestions = landmarks.filter(landmark => landmark.name.toLowerCase().includes(query));
            displaySuggestions(suggestions);
        });
        
        function displaySuggestions(suggestions) {
            const suggestionsContainer = document.getElementById('suggestions');
            suggestionsContainer.innerHTML = ''; // Clear previous suggestions
        
            suggestions.forEach(suggestion => {
                const div = document.createElement('div');
                div.classList.add('suggestion-item', 'fade-in');
                div.textContent = suggestion.name;
                div.onclick = () => {
                    document.getElementById('search-bar').value = suggestion.name;
                    suggestionsContainer.innerHTML = ''; // Clear suggestions
                    searchDestination(); // Call the search function
                };
                suggestionsContainer.appendChild(div);
            });
        }
        
        document.getElementById('loading').style.display = 'block'; // Show loading
