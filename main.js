/*
  * Objetivo: adicionar e fechar os menus quando clicar no ícone
*/ 
let contador = true
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
  * Objetivo: Adicionar o 'carrosel' das imagens da section 'Testimonials slider carousel'
*/ 
const swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  pagination:{
    el:'.swiper-pagination'
  },
  mousewheel:true,
  preloadImages:true,
  keyboard:true,
  navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev'
}
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
   footer .brand, footer .social,
   
  `,
  {interval:100}
  )

  /*
    * Objetivo: Botão voltar para o topo da página
  */ 
  const backToTopButton = document.querySelector('.back-to-top')
  function backToTop(){
    
    if(window.scrollY >= 560){
      backToTopButton.classList.add('show')
    }else{
      backToTopButton.classList.remove('show')
    }
  }
  
/*
ºWhen Scroll
*/

/*
    ºMenu ativo conforme a seção visível na página
  */
    const sections = document.querySelectorAll('main section[id]')
    function activateMenuAtCurrentSection() {
      
      const checkpoint = window.pageYOffset + (window.innerHeight / 8) * 4
    
      for (const section of sections) {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute('id')
    
        const checkpointStart = checkpoint >= sectionTop
        const checkpointEnd = checkpoint <= sectionTop + sectionHeight
        
        if (checkpointStart && checkpointEnd) {
          document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.add('active')
            
            /*
              * Objetivo:Quando o usuário chegar na section about o vídeo se inicializará
            */

            if (section.getAttribute('id').includes('about') && contador == true) {
              
              const videoAutoPlay = document.querySelector('video')
              
              videoAutoPlay.play()

              contador = false

            }
            
        } else {
          document
            .querySelector('nav ul li a[href*=' + sectionId + ']')
            .classList.remove('active')
        }
      }
    }
  window.addEventListener('scroll', function (){
    
    backToTop()
    activateMenuAtCurrentSection()
    
  })
menuEvent()
  
