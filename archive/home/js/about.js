const innerAbout = document.querySelector(".inner-about");
const hoverIndicator = document.querySelector(".hover-indicator");

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

innerAbout.addEventListener("mouseover", (event) => {
    //transition: all 0.5s;
    hoverIndicator.style.setProperty("transition", "all 0.5s");
    hoverIndicator.style.setProperty("opacity", "0");
    sleep(500).then(() => {
        hoverIndicator.style.setProperty("display", "none");
    })

})