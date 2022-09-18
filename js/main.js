// et link = document.querySelectorAll(".feature-list__link")
// let item = document.querySelectorAll(".feature__end")

// link.forEach(function(elm){

//     elm.addEventListener("click", function(evt){
//         evt.preventDefault()

//         link.forEach(function(choosen){ 
//             choosen.parentElement.classList.remove("feature-list__item--active")
//         })
        
//         elm.parentElement.classList.add("feature-list__item--active")

//         item.forEach(function(textchoosen){
//             textchoosen.classList.remove("feature-bottom--wiew")
//         })
//         document.querySelector(elm.getAttribute("href")).classList.add("feature-bottom--wiew")
//     })
// })

var list = document.querySelector(".product-list")
var cardList = document.querySelector(".relathed-list")
var link = document.querySelectorAll(".vegetables-nav-link")

link.forEach(function(elm){
    elm.addEventListener("click", function(evt){
        evt.preventDefault()
        list.classList.add("d-none")
        cardList.classList.add("d-none")
        document.querySelector(elm.getAttribute("href")).classList.remove("d-none")
    })
})