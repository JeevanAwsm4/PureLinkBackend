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


    

    var side_bar = document.querySelector('.side-bar');
    var hamburger = document.querySelector('.test_burger');
    burgerToggle = () => {
        side_bar.classList.toggle('active')
    }; 
    // hamburger.addEventListener('click', function() {
    //     burgerToggle();
    // });

    //map-scripts-leaflet
    document.getElementById('open_map_btn').addEventListener('click', getLocation);

        function getLocation() {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(showPosition, showError);
            } else {
                alert("Geolocation is not supported by this browser.");
            }
        }

        function showPosition(position) {
            var latitude = position.coords.latitude;
            var longitude = position.coords.longitude;

            console.log("Latitude: " + latitude);
            console.log("Longitude: " + longitude);

            document.getElementById('latitude').value = latitude
            document.getElementById('longitude').value = longitude
        }

        function showError(error) {
            if (error.code === 1) {
                // User denied permission, ask again
                var userResponse = confirm("You have denied permission to access your location. Do you want to enable location services?\n\n" +
                    "To enable location services:\n" +
                    "1. Open your browser settings.\n" +
                    "2. Navigate to the privacy or location settings.\n" +
                    "3. Enable location services for this site.");
        
                if (!userResponse) {
                    alert("Location services are required to proceed.");
                }
            } else {
                alert("Error getting location: " + error.message);
            }
        }
    
    
});