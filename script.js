const downArrow = document.getElementById("arrow");
const main = document.getElementsByTagName("main")[0];
downArrow.addEventListener('click', function() {
    main.scrollIntoView();
})
