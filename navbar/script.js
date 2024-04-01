document.body.style.backgroundColor = "#000"
window.addEventListener("scroll", function(){
    let header = document.querySelector(".navbar");
    header.classList.toggle("sticky", this.window.scrollY > 0);
})