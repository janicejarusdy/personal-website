const downArrow = document.getElementById("arrow");
const main = document.getElementsByTagName("main")[0];
downArrow.addEventListener('click', function () {
    main.scrollIntoView();
})

const events = document.querySelectorAll(".timeline__event")
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        entry.target.classList.toggle("show", entry.isIntersecting)
    })

}, { threshold: 0.6})

events.forEach(event => {
    observer.observe(event)
})