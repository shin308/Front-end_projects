const formLogin = document.querySelector(".login-form-container")
const userIcon = document.querySelector(".fa-user")
const closeIcon = document.querySelector(".login-form-container .fa-xmark")

const closeIconSearch = document.querySelector(".icons .fa-xmark")
const formSearch = document.querySelector(".search-form")
const searchIcon = document.querySelector(".icons .fa-magnifying-glass")

const videoBtn = document.querySelectorAll(".video-btn")

const menuIcon = document.querySelector(".menu-icon .fa-bars")
const navbar = document.querySelector(".navbar")
const linkNavbar = document.querySelectorAll('.navbar a')
const menuClose = document.querySelector(".menu-icon .fa-xmark")

window.onscroll = () =>{
    searchIcon.classList.remove('hide');
    closeIconSearch.classList.add('hide')
    formSearch.classList.remove('active');
    navbar.classList.remove('active');
    menuClose.classList.add('hide')
    menuIcon.classList.remove('hide')
    formLogin.classList.remove('active');
}

menuIcon.addEventListener("click", function(){
    navbar.classList.add('active')
    menuClose.classList.remove('hide')
    menuIcon.classList.add('hide')
})
menuClose.addEventListener("click", function(){
    navbar.classList.remove('active')
    menuClose.classList.add('hide')
    menuIcon.classList.remove('hide')
})
linkNavbar.forEach(link => {
    link.addEventListener("click", function(){
        navbar.classList.remove('active')
        menuClose.classList.add('hide')
        menuIcon.classList.remove('hide')
    })
});


searchIcon.addEventListener('click', ()=>{
    formSearch.classList.add('active')
    searchIcon.classList.add('hide')
    closeIconSearch.classList.remove('hide')    
})
closeIconSearch.addEventListener('click', function(){
    formSearch.classList.remove('active')
    searchIcon.classList.remove('hide')
    closeIconSearch.classList.add('hide')    
})

userIcon.addEventListener('click', function(){
    formLogin.classList.add("active")
})
closeIcon.addEventListener('click', function(){
    formLogin.classList.remove("active")
})

console.log(document.querySelectorAll(".controls .video-btn.active"))
videoBtn.forEach(element => {
    element.addEventListener('click', function(){
        document.querySelector(".controls .video-btn.active").classList.remove('active')
        element.classList.add('active')
        let src = element.getAttribute("data-src")
        document.querySelector("#video-slider").src = src
    })
});

var mySwiper = new Swiper(".review-slider",{
    // parameters
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
    },
});

var mySwiper = new Swiper(".brand-slider",{
    // parameters
    spaceBetween: 20,
    loop:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        991: {
            slidesPerView: 4,
        },  
        1024: {
          slidesPerView: 5,
        },
    },
});
