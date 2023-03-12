const imgUbicacion = document.querySelector(".imgUbicacion");
const imgUbicacion1 = document.querySelector(".imgUbicacion1");
const imgUbicacion2 = document.querySelector(".imgUbicacion2");
const division2 = document.querySelector(".division2")
const division = document.querySelector(".division")
const division1= document.querySelector(".division1")

window.addEventListener('load',()=>{
    alert("hola")
})

imgUbicacion.addEventListener('mouseover',(ss)=>{
    division.classList.remove("disable")

})

imgUbicacion1.addEventListener('mouseover',()=>{
    division1.classList.remove("disable")

})


imgUbicacion2.addEventListener('mouseover',()=>{
    division2.classList.remove("disable")

})


imgUbicacion1.addEventListener("mouseout", ()=>{
    division1.classList.add("disable")
})
imgUbicacion2.addEventListener("mouseout", ()=>{
    division2.classList.add("disable")
})

imgUbicacion.addEventListener("mouseout", ()=>{
    division.classList.add("disable")
})


