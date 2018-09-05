const lis = Array.from(document.querySelectorAll(".header li"));
const slides = Array.from(document.querySelectorAll("main .slide"))
console.log(slides);
lis.forEach((item, ind) => {
    item.onclick = (e) => {
        slides.forEach((val, i) => {
            var oli = e.target;
            console.log(ind);
            lis[i].classList.remove("active");
            oli.classList.add("active");
            val.classList.remove("active");
            console.log(ind);
            slides[ind].classList.add("active")
        })
    }
})