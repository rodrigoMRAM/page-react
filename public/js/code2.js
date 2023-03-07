const da = document.querySelector(".imgUbicacion");
const imgUbicacion1 = document.querySelector(".imgUbicacion1");
const imgUbicacion2 = document.querySelector(".imgUbicacion2");
const division2 = document.querySelector(".division2")
const de = document.querySelector(".division")
const division1= document.querySelector(".division1")

imgUbicacion1.addEventListener("mouseout", ()=>{
    de.style.visibility = "none"
})
imgUbicacion2.addEventListener("mouseout", ()=>{
    division1.style.visibility = "none"
})

da.addEventListener("mouseout", ()=>{
    division2.style.visibility = "none"
})
