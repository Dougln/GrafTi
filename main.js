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
for (const element of begin) {
  element.addEventListener("click", function(){
    nav.classList.remove("show")
  })
}
/*
* Objetivo: Mudar o header da página quando der ''scroll''
*/ 

function changeHeaderWhenScroll(){
  
  const header = document.querySelector('header')
  const navHeight = header.offsetHeight
  if(window.scrollY >= navHeight){
    //scroll é maior que a altura do header
    header.classList.add("scroll")
    
  }else{
    //menor que a altura do header
    header.classList.remove("scroll")
    
  }
}



/*
  * Objetivo: Adicionar o 'carrosel' das imagens da section 'Testimonials slider carousel'
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
  * Objetivo: Mostrar suavemente à aparição dos elementos quando der 'scrol' na página
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
   .text #contact, .links #contact,
   footer .brand, footer .social
  `,
  {interval:100}
  )

  /*
    * Objetivo: Botão voltar para o topo da página
  */ 
  
  function backToTop(){
    const backToTopButton = document.querySelector('.back-to-top')
    if(window.scrollY >= 560){
      backToTopButton.classList.add('show')
    }else{
      backToTopButton.classList.remove('show')
    }
  }
  
/*
ºWhen Scroll
*/
  window.addEventListener('scroll', function (){
    changeHeaderWhenScroll()
    backToTop()
  })