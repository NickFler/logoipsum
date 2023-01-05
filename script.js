function navToggle() {
    var navToggleNav = document.getElementById("nav");
    var html = document.getElementById("html");
    navToggleNav.classList.toggle("_active");
   html.classList.toggle("_overFlow");
    
}
function toggleItem(id) {
    var item = document.getElementById(id);
    
    item .classList.toggle("_active");
   
    
}

$('.owl-carousel') .owlCarousel({
    items:2.5,
    lazyLoad: true,
    loop: true,
    margin: 10
});