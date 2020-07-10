const nav = document.querySelector('.nav-mobile')
const button = document.querySelector('.navbar-toggler')
const close = document.querySelector('.closeIcon')


button.addEventListener('click', ()=>{
    nav.style.display = 'block'
})

close.addEventListener('click',()=>{
    nav.style.display = 'none'
})