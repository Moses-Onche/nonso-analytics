const hiddenContent = document.getElementsByClassName("hidden-content")[0];
const readMore = document.getElementsByClassName("read-more")[0];
const CV = document.getElementById("cv-link");
const hamLogo = document.getElementsByClassName("ham")[0].children[0];
const hamMenu = document.getElementsByClassName("ham-menu")[0];
console.log(hamMenu)

readMore.addEventListener("click", () => {
    if (hiddenContent.style.display == "block") {
        hiddenContent.style.display = "none";
        readMore.textContent = " Read more...";
    } else {
        hiddenContent.style.display = "block";
        readMore.textContent = " Hide...";
    }
})

hamLogo.addEventListener("click", () => {
    if (hamMenu.style.display === "flex") {
        hamMenu.style.display = "none";
    } else {
        hamMenu.style.transition = "ease-in 1.5s";
        hamMenu.style.top = "80px";
        hamMenu.style.width = "100%"
        hamMenu.style.display = "flex";
        hamMenu.style.flexDirection = "column";
        hamMenu.style.alignItems = "flex-end";
        hamMenu.style.textAlign = "right";
        // hamMenu.style.border = "solid red";
    }
})
