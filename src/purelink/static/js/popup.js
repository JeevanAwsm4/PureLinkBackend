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