window.addEventListener('load', function(){
    var links = document.querySelectorAll('.link');
    var each_contents = document.querySelectorAll('.each_content_page')

    links.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();            
            links.forEach(function (otherLink) {
                otherLink.classList.remove('active');               
                var spanBar = otherLink.parentElement.querySelector('.bar');
                if (spanBar) {
                    spanBar.classList.remove('active');
                };
            });
            link.classList.add('active');
            var selection_selector = Array.from(links).indexOf(link);
            each_contents.forEach((each_content) => {
                each_content.classList.remove('active');
                if (Array.from(each_contents).indexOf(each_content) == selection_selector) {
                    each_content.classList.add('active');
                };
            });
            var spanBar = link.parentElement.querySelector('.bar');
            if (spanBar) {
                spanBar.classList.add('active');

            }; 
        });
    });
    var container = document.getElementById('popup_container')
    var popup_btn = document.getElementById('want_blood')
    var close_btn = document.getElementById('closepopup')
    var submit_btn = document.getElementById('submit')

    function popup (){
        container.style.display='block'
    }   
    popup_btn.addEventListener('click', popup);
    // function closepopup (){
    //     container.style.display='none'
    // }
    close_btn.addEventListener('click', closepopup);
    popup_btn.addEventListener('click',function() {
        popup();
    })





    var donateContainer = document.getElementById('donatePopupContainer');
    var donatePopUpbtn = document.getElementById('donate_blood'); // Assuming this is the button triggering the popup
    var donateClosebtn = document.getElementById('closeDonatePopup');
    var donateSubmitbtn = document.getElementById('donateSubmit');

    function showPopup() {
        console.log('blocked')
        donateContainer.style.display = 'block';
    }

    function hidePopup() {
        donateContainer.style.display = 'none';
    }

    // Event listener for opening the popup
    donatePopUpbtn.addEventListener('click', showPopup);

    // Event listener for closing the popup
    donateClosebtn.addEventListener('click', hidePopup);

    // Optional: Event listener for submitting the form (you can customize this according to your needs)
    donateSubmitbtn.addEventListener('click', function () {
        // Add your form submission logic here
        // For example: validate form fields and submit data to a server
        // After successful submission, you may choose to hide the popup
        hidePopup();
    });

    var side_bar = document.querySelector('.side-bar');
    var hamburger = document.querySelector('.test_burger');
    burgerToggle = () => {
        side_bar.classList.toggle('active')
    }; 
    // hamburger.addEventListener('click', function() {
    //     burgerToggle();
    // });

    //map-scripts-leaflet
    var mapbox = document.getElementById('mapbox');
    var open_map_btn = document.getElementById('open_map_btn');
    var map_close_btn = document.getElementById('close_the_map');
    var firstTime = true; // Variable to track if it's the first time opening the map
    var userLocation; // Variable to store user's location

    open_map_btn.addEventListener('click', function (e) {
        e.preventDefault()
        mapbox.style.display = 'block';
        // Get user's location and update the map
        getUserLocation();
    });

    map_close_btn.addEventListener('click', function (e) {
        mapbox.style.display = 'none';
    });

    var map = L.map('map').setView([11.528255, 435.742383], 10);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    var marker = L.marker([11.528255, 435.742383]).addTo(map);
    var circle = L.circle([11.528255, 435.742383], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 100
    }).addTo(map);

    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");

    var popup = L.popup();
    var clickLocation; // Variable to store the click location

    function onMapClick(e) {
        clickLocation = e.latlng;

        // Update marker position
        marker.setLatLng(clickLocation);

        // Update map view
        // map.setView(clickLocation);

        if (circle) {
            circle.setLatLng(clickLocation);
        }

        popup
            .setLatLng(clickLocation)
            .setContent("You clicked the map at " + clickLocation.toString())
            .openOn(map);

        console.log(clickLocation.lat , clickLocation.lng);
    }

    map.on('click', onMapClick);

    function getUserLocation() {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
        } else {
            alert("Geolocation is not supported by your browser");
        }

        function successCallback(position) {
            userLocation = [position.coords.latitude, position.coords.longitude];

            // Set view to user's location only the first time
            if (firstTime) {
                map.setView(userLocation, 15);
                firstTime = false;
            }
        }

        function errorCallback(error) {
            alert("Error getting user location: " + error.message);
        }
    }
    
    
});