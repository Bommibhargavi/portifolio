// function myFunction() {
//     var x = document.getElementById("myLinks");
//     if (x.style.display === "block") {
//       x.style.display = "none";
//     } else {
//       x.style.display = "block";
//     }
//   }
// document.getElementById('mobile-menu').addEventListener('click', function() {
//     var navList = document.querySelector('nav-list');
//     navList.classList.toggle('active');
// });

/*===================toggel icon navbar================= */
let menuIcon=document.querySelector('#menu');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

// =================scroll section active link=============
let section=document.querySelectorAll('section')
let navLinks=document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec =>
    {
        let top=window.scrollY;
        let offset=sec.offsetTop - 150;
        let height=sec.offsetHeight;
        let id= sec.getAttribute('id');
        
        if(top >= offset && top<offset + height){
            navLinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id +']').classList.add('active');

            });
        };
    });
    // =================Sticky Navbar===================
    let header=document.querySelector('header')
    header.classList.toggle('sticky',window.scrollY>100);
    // ======================remove toggle icon and navbar when click navbar link(scroll)=====================
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};




const typed=new Typed('.text',{
    strings:[' Frontend Developer', ' Web Developer',' React Developer'],
    typeSpeed:300,
    backSpeed:100,
    backDelay:1000,
    loop:true
});
// =================Sticky reveal===================//

ScrollReveal({ 
    reset: true,
    distance:'80px',
    duration:2000,
    delay:200

});
ScrollReveal().reveal('.home-content, .heading',{origin: 'top'});
ScrollReveal().reveal('.home-img, .services-container, .portifolio-box, .contact form',{origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-img, .container5, .radial-bars',{origin:'left' });
ScrollReveal().reveal('.home-content p, .about-content, .container5, .radial-bars', {origin:'right' });





// const temp=document.getElementById("new")
// const skills=document.querySelectorAll(".tech")

// const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//         if(entry.isIntersecting){
//             for(i of skills){
//                 i.classList.add("reveal");
//             }
        
//         }
//         else{
//             for(i of skills){
//                 i.classList.remove("reveal");
//             }
//         }
//     });
// },{
//     threshold: 0.5,
// })

// observer.observe(temp)