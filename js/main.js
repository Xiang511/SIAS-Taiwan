let menuBtn = document.querySelectorAll(".icon");
for (var i = 0; i < menuBtn.length; i++) {
    menuBtn[i].addEventListener("click", (e) => {
        console.log(e.target);
        e.target.classList.toggle("active");
    });
}