let contenedor_slider = document.querySelector("#contenedor_slider")
let grupoCajas = document.querySelectorAll("#cajaMovi")

let ultimaCaja = grupoCajas[grupoCajas.length - 1]

const btnLeft = document.querySelector("#arrowLeft")
const btnRight = document.querySelector("#arrowRight")


contenedor_slider.insertAdjacentElement("afterbegin", ultimaCaja)


btnRight.addEventListener("click", () =>{
    let cajaEnFoco = document.querySelectorAll("#cajaMovi")[0]
    contenedor_slider.style.marginLeft = "-200%"
    contenedor_slider.style.transition = "0.3s ease all"
    setTimeout(function(){
        contenedor_slider.style.transition = "none"
        contenedor_slider.insertAdjacentElement("beforeend", cajaEnFoco)
        contenedor_slider.style.marginLeft = "-100%"
    },300)
})
    
btnLeft.addEventListener("click", () =>{
    let cajasMoviles = document.querySelectorAll("#cajaMovi")
    let ultimaCaja = cajasMoviles[cajasMoviles.length - 1]
    contenedor_slider.style.marginLeft = "0"
    contenedor_slider.style.transition = "0.3s ease all"
    setTimeout(function(){
        contenedor_slider.style.transition = "none"
        contenedor_slider.insertAdjacentElement("afterbegin", ultimaCaja)
        contenedor_slider.style.marginLeft = "-100%"
    },300)
})




