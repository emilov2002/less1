$(document).ready(function () {
$(".burger-menu").on("click", function () {
    $(".burger-menu").toggleClass("active")
    $(".header .nav").toggleClass("active")
})
});

// document.querySelector('.burger-menu').addEventListener('click', function () {
//     document.querySelector('.burger-menu').classList.toggle('active');
//     document.querySelector('.nav').classList.toggle('active')
// });