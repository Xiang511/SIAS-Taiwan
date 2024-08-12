let menuBtn = document.querySelectorAll(".icon");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (e) => {
        console.log(e.target);
        e.target.classList.toggle("active");
    });
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-header');
    const bg_div = document.querySelector('.bg');
    const isScrolled = window.scrollY > 50;
    nav.classList.toggle('nav-scrolled', isScrolled);
    nav.classList.toggle('nav-default', !isScrolled);
    bg_div.classList.toggle('bg-scrolled', isScrolled);
    bg_div.classList.toggle('bg-default', !isScrolled);
}); 