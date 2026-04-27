const btntabs = document.querySelectorAll(".btnmv");
const contenttabs = document.querySelectorAll(".content-mv");
const serachbar = document.getElementById("searchbar");
const result = document.getElementById("result");
const bars = document.querySelector(".bars");
const head1 = document.querySelector(".head1");
const removes = document.querySelectorAll("ul a");
const mask = document.querySelector(".mask");
const openkesame = document.querySelector(".login-container ")
const sign = document.querySelector(".sign")
const faqcard = document.querySelectorAll(".faq-card")

faqcard.forEach((card) => {
    card.addEventListener("click", () => {
        const duckyou = card.querySelector(".faqp");
        const svg = card.querySelector(".svg");

        duckyou.classList.toggle("bukasna");
        svg.classList.toggle("active");
    });
});

bars.addEventListener("click", () => {
    head1.classList.add("open");
    mask.classList.add("gows");
});

removes.forEach(item => {
    item.addEventListener("click", () => {
        head1.classList.remove("open");
        mask.classList.remove("gows");
        document.body.classList.remove("no-scroll");
    });
});


// Dommanipulation scroll effect
// document.addEventListener("scroll", () => {
//     const head = document.querySelector('.head');

//     if (window.scrollY > 0) {
//         head.classList.add("close")
//     } else {
//         head.classList.remove("close")
//         result.classList.remove("hidden");
//     }
// });

// tab nevigation for mision vision explain ko paba
btntabs.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        btntabs.forEach(tab => {
            tab.classList.remove('active');
        });
        tab.classList.add('active');

        var line = document.querySelector('.line')
        line.style.width = e.target.offsetWidth + "px";
        line.style.left = e.target.offsetLeft + "px";

        contenttabs.forEach(contents => (contents.classList.remove('active')))
        contenttabs[index].classList.add('active')

    });
});



