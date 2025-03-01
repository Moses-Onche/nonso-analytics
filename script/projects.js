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
        hamMenu.style.backgroundColor = "#e9f8f9";
        hamMenu.style.position = "absolute";
        hamMenu.style.top = "80px";
        hamMenu.style.width = "95%";
        hamMenu.style.padding = "10px 40px";
        hamMenu.style.display = "flex";
        hamMenu.style.flexDirection = "column";
        hamMenu.style.alignItems = "flex-end";
        hamMenu.style.boxShadow = "0px 1px 20px #d6f1f3";
    }
})
