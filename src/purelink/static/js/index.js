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
    var side_bar = document.querySelector('.side-bar');
    var hamburger = document.querySelector('.test_burger');
    burgerToggle = () => {
        side_bar.classList.toggle('active')
    }; 
    hamburger.addEventListener('click', function() {
        burgerToggle();
    });
});