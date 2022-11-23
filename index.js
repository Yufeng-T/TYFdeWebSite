




var text = document.querySelector(".search-txt");
var sear = document.querySelector(".search-btn");
function search() {
    var textcontent = text.value;
    if(textcontent != ""){
        window.open("https://cn.bing.com/search?q=" + textcontent);
    }
}
sear.addEventListener("click", search);