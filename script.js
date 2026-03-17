// 🔥 TYPING ANIMATION
var typed = new Typed(".text", {
    strings: ["Data Analyst", "Web Developer", "Python Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});


// 🔥 STICKY HEADER + SHADOW ON SCROLL
window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("sticky", window.scrollY > 50);
});


// 🔥 ACTIVE NAVBAR LINK ON SCROLL
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll(".navbar a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector(".navbar a[href*=" + id + "]").classList.add("active");
            });
        }
    });
};


// 🔥 SCROLL REVEAL ANIMATION
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));


// 🔥 SCROLL TO TOP BUTTON
const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
});