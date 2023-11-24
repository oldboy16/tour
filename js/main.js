var elTitle = document.querySelector(".title")
a = prompt("sayohat uchun pul kiriting")
if (a>9570000){
    elTitle.textContent = "Alsiher sizga oq yol tilayman"
}else if(a==9570000){
    elTitle.textContent = "Alisher sizga oq yol tilayman"
}else if (a<9570000){
    elTitle.textContent = "Alisher sizga sabr tilayman"
}
