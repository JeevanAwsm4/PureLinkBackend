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
    function closepopup (){
    container.style.display='none'
    }
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
    hamburger.addEventListener('click', function() {
        burgerToggle();
    });
});