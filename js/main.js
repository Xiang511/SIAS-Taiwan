let menuBtn = document.querySelectorAll(".icon");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (e) => {
        console.log(e.target);
        e.target.classList.toggle("active");
    });
}

window.addEventListener('scroll', function() {
    const nav = document.querySelector('.main-header');
    if (window.scrollY > 50) { // 當捲動超過50px時改變背景顏色
        nav.classList.add('nav-scrolled');
        nav.classList.remove('nav-default');
    } else {
        nav.classList.add('nav-default');
        nav.classList.remove('nav-scrolled');
    }
});