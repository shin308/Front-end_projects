const modal = document.querySelector('.modal');
const iconClose = document.querySelector('.modal-close')
const btnPay = document.querySelector('.modal-pay')
const btnClose = document.querySelector('.modal-btn-close')
const placebuyTicket = document.querySelectorAll('.place-buy-ticket')

const mobileMenuBtn = document.querySelector('.mobile-menu-btn')
const header = document.querySelector("#header")

const menuItem = document.querySelectorAll(`#nav li a[href*="#"]`)

placebuyTicket.forEach(item => {
    item.addEventListener('click', function(){
        modal.classList.toggle('hide')
    })
});

iconClose.addEventListener('click', function(){
    modal.classList.toggle('hide');
})

btnClose.addEventListener('click', function(){
    modal.classList.toggle('hide')
})

modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        modal.classList.toggle('hide')
    }
})

var headerHeight = header.clientHeight;
mobileMenuBtn.addEventListener('click', function(){
    if(header.clientHeight == headerHeight){
        header.style.height = 'auto';
    }
    else{
        header.style.height = null;
    }

});

menuItem.forEach(item => {
    // console.log(item.nextElementSibling)
    var isParentMenu = item.nextElementSibling && item.nextElementSibling.classList.contains('subnav');
    item.addEventListener('click', function(event){
        if(!isParentMenu){
            header.style.height = null;
        }
        else{
            event.preventDefault()
        }
    })
});