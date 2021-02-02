var ads = document.getElementById("ads");
var fixedAds = ads.offsetTop

console.log(fixedAds)
console.log(window.scrollY)

function adsFunction() {
    console.log(window.scrollY)

    if (window.scrollY > fixedAds) {
        ads.classList.add("fixed-ads")
    } else {
        ads.classList.remove("fixed-ads")
    }
}