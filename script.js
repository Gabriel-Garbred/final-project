let menu=document.querySelector(".fixed-menu")
menu.addEventListener("click", function(event){
    let clicktarget = event.target
    let activebtn = document.querySelector(".active")
    if (clicktarget.classList.contains("nav-link")){
        activebtn.classList.remove("active")
        clicktarget.classList.add("active")
        let mobile=document.querySelector(".mobile-nav-links")
        if (!mobile.classList.contains("hide")){
            mobile.classList.add("hide")
        }
    }
    let body=document.querySelector("body")
    let mobile=document.querySelector(".mobile-nav-links")
    if (!body.classList.contains("off-scroll")&& !mobile.classList.contains("hide")){
        body.classList.add("off-scroll")
    }
    else {
        body.classList.remove("off-scroll")
    }
})
let classlink = ".main-link"
window.onscroll = function(){
    let h = document.documentElement.clientHeight
    if (window.scrollY>=h*3.7){
        classlink = ".comments-link"
    }
    else if (window.scrollY>=h*2.7){
        classlink = ".works-link"
    }
    else if (window.scrollY>=h*1.7){
        classlink = ".skills-link"
    }
    else if (window.scrollY>=h*0.8){
        classlink = ".about-link"
    }
    else{
        classlink = ".main-link"
    }
    let activebtn = document.querySelector(".active")
    let newactivebtn = document.querySelector(classlink)
    if (!newactivebtn.classList.contains("active")){
        activebtn.classList.remove("active")
        newactivebtn.classList.add("active")
    }
}
document.querySelector(".mobile-btn").addEventListener("click", function(event){
    document.querySelector(".mobile-nav-links").classList.toggle("hide")
})