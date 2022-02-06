
/*===================Menu show y hidden================*/
const navMenu=document.getElementById('nav-menu'),
    navToggle=document.getElementById('nav-toggle'),
    navClose=document.getElementById('nav-close')

/*=========Menu show======*/
/*Validate if constant exists*/
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
/*==================Menu Hidden==================*/
/*Validate if constant exists*/
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')

    })
}

/*===================Remove Menu Mobile=======================*/
const navLink = document.querySelectorAll('.nav_link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav_link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


