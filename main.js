const mobileMenu = document.querySelectorAll('.menu-button');
const navActive=document.querySelector('.nav-active');
const navList=document.querySelectorAll('.nal-list')

mobileMenu.forEach((btn)=>{
    btn.addEventListener('click',()=>{
    navActive.classList.toggle('display-nav')
        
    })
})
navList.forEach((list)=>{
    list.addEventListener('click',()=>{
        navActive.classList.remove('display-nav')
    })
})