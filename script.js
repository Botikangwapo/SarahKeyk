const btntabs = document.querySelectorAll(".btnmv");
const contenttabs = document.querySelectorAll(".content-mv");
const serachbar = document.getElementById("searchbar");
const result = document.getElementById("result");
const bars = document.querySelector(".bars");
const head1 = document.querySelector(".head1");
const removes = document.querySelectorAll(".head1");
const body = document.body;

// window loaded
// window.addEventListener('load', () => {
//     let loadermain = document.querySelector('.loader-main')
//     let loaderleft = document.querySelector('.loader-left')
//     let loaderright = document.querySelector('.loader-right')
//     let aniimage = document.querySelector('.aniimage')
//     body.classList.add("no-scroll")
//     setTimeout(() => {
//         aniimage.style.opacity = "0"
//     }, 1000)

//     setTimeout(() => {
//         loadermain.style.top = "-100%"
//         body.classList.remove("no-scroll")
//     }, 3000)

//     setTimeout(() => {
//         loaderleft.style.left = "-100%"
//         loaderright.style.right = "-100%"
//     }, 2000)
// })

bars.addEventListener("click", () => {
    head1.classList.add("open");
    body.classList.add("no-scroll");
});

document.addEventListener("click", (e) => {
    if (!e.target.closest(".head1") && !e.target.closest(".bars")) {
        head1.classList.remove("open");
        body.classList.remove("no-scroll");
    }
});

removes.forEach(item => {
    item.addEventListener("click", () => {
        head1.classList.remove("open");
        body.classList.remove("no-scroll");
    });
});

// Dommanipulation scroll effect
document.addEventListener("scroll", () => {
    const head = document.querySelector('.head');

    if (window.scrollY > 0) {
        head.classList.add("close")
    } else {
        head.classList.remove("close")
        result.classList.remove("hidden");
    }
});

// for drop down in searchbar
serachbar.addEventListener("click", () => {
    result.classList.toggle("hidden");
});

// drop down links of searchbar
document.querySelectorAll("#result li").forEach(item => {
    item.addEventListener("click", () => {
        const link = item.getAttribute("data-link");
        window.location.href = link;
    });
});


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

debugger;


