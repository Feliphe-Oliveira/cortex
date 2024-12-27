const menu = document.getElementById('menu')
let nav_list = document.getElementById('nav-list')

menu.addEventListener('click',()=>{
    nav_list.classList.toggle('menu-nav-list')
})