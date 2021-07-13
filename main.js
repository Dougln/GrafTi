/*
* Objetivo: adicionar e fechar os menus quando clicar no ícone
*/ 
const nav = document.querySelector("#header nav")
const toggle = document.querySelectorAll("nav .toggle")

for (const element of toggle) {
  element.addEventListener("click",function(){
    nav.classList.toggle('show')
  })
}
/*
* Objetivo: quando clicar nos links, redirecionar para suas respectivas "sections"
*/ 
const begin = document.querySelectorAll("nav ul li a")
console.log(begin);
for (const element of begin) {
  element.addEventListener("click", function(){
    nav.classList.remove("show")
  })
}
/*
ºMudar o header da página quando der ''scroll''
*/ 
const header = document.querySelector("#header")
const navHeight = header.offsetHeight
window.addEventListener("scroll", function(){
  if(window.scrollY >= navHeight){
    //scroll é maior que a altura do header
    header.classList.add("scroll")
  }else{
    //menor que a altura do header
    header.classList.remove("scroll")
  }
})

/*
ºTestimonials slider carousel
*/ 
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination:{
    el:'.swiper-pagination'
  },
  mousewheel:true,
  keyboard:true,

});

/*
ºScroll Reveal: Mostrar elementos quando der scroll na página
*/

const scrollReveal = ScrollReveal({
  origin: 'top',
  distance:'30px',
  duration:600,
  reset:true
})
scrollReveal.reveal(
  `#home .text,#home .image,
   #about .text,#about.image,
   #services header, #services .card,
   #testmonials header, #testmonials .testimonials,
   #contact .text, #contact .links
  `,
  {interval:100}
  )