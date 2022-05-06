const iconMenu = document.querySelector(".icon-menu i");
const mobileMenu = document.querySelector(".navbar")
const link = document.querySelectorAll(".navbar a")

const iconSearch = document.querySelector(".icon-search")
const searchForm = document.querySelector(".search-form")

const iconCart = document.querySelector(".icon-cart")
const cartItem = document.querySelector(".cart-item-container")


iconMenu.addEventListener('click', function(){
    mobileMenu.classList.toggle('active');
    cartItem.classList.remove('active')
    searchForm.classList.remove('active')
})

link.forEach(element => {
    element.addEventListener('click', function(){
        mobileMenu.classList.remove('active')
    })
});

iconSearch.addEventListener('click', function(){
    searchForm.classList.toggle('active')
    cartItem.classList.remove('active')
    mobileMenu.classList.remove('active')
})

iconCart.addEventListener('click', function(){
    cartItem.classList.toggle('active')
    mobileMenu.classList.remove('active')
    searchForm.classList.remove('active')
})

