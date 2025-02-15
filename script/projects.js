let hiddenContent = document.getElementsByClassName("hidden-content")[0];
let readMore = document.getElementsByClassName("read-more")[0];

console.log(hiddenContent);
console.log(readMore);

readMore.addEventListener("click", () => {
    // for (let i = 0; i < hiddenContent.length; i++){
        if (hiddenContent.style.display == "none") {
            readMore.textContent = " Hide...";
            hiddenContent.style.display = "block";
        } else {
            readMore.textContent = " Read more...";
            hiddenContent.style.display = "none";
        }
    // }
})