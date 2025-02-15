let hiddenContent = document.getElementsByClassName("hidden-content")[0];
let readMore = document.getElementsByClassName("read-more")[0];

readMore.addEventListener("click", () => {
    if (hiddenContent.style.display == "block") {
        hiddenContent.style.display = "none";
        readMore.textContent = " Read more...";
    } else {
        hiddenContent.style.display = "block";
        readMore.textContent = " Hide...";
    }
})