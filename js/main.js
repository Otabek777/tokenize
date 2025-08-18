// Lenis
// const lenis = new Lenis({
//     wrapper: document.querySelector('.scroll-container'),
//     lerp: 0.1,
//     duration: 1.2,
//     smoothTouch: true
// });
// lenis.on('scroll', e => {
//     console.log(e);
// });
// function raf(time) {
//     lenis.raf(time);
//     requestAnimationFrame(raf);
// }
// requestAnimationFrame(raf);
// // Animate on Scroll
// const animatedElements = document.querySelectorAll('.animate-on-scroll');
// const observerOptions = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.1
// };
// const observer = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('is-visible');
//             observer.unobserve(entry.target);
//         } else {
//             entry.target.classList.remove('is-visible');
//         }
//     });
// });
// animatedElements.forEach(el => observer.observe(el));

// footer__btn
$(".footer__btn").click(function() {
    $(this).toggleClass("active");
    if($(".footer__btn").hasClass("active")) {
        $("body").addClass("dark");
    } else {
        $("body").removeClass("dark");
    }
});

$(window).on('scroll', function () {
    if ($(window).width() > 767) {
        $(".footer").toggleClass("none", $(this).scrollTop() > 100);
        $(".tokenize__wrap").toggleClass("none", $(this).scrollTop() > 450);
    } else {
        $(".footer").toggleClass("none", $(this).scrollTop() > 50);
        $(".tokenize__wrap").toggleClass("none", $(this).scrollTop() > 200);
    }
});

$(".modal-open").click(function() {
    $("body").addClass("hidden");
    $(".modal").addClass("active");
    setTimeout(function() {
        $(".modal").addClass("open");
    },10);
});
$(".modal__close").click(function() {
    $("body").removeClass("hidden");
    $(".modal").removeClass("open");
    setTimeout(function() {
        $(".modal").removeClass("active");
    },300);
});

var ids = ['scene', 'scene2'];
ids.forEach(function(id) {
    var element = document.getElementById(id);
    if (element) {
        new Parallax(element);
    }
});