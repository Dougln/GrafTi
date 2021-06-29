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