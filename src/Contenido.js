import Logo from "./Logo"
import { useState } from "react";





export default function Contenido() {
    const [efectoMouse1, efectoMouse] = useState("");

    const [efectoMouse2, efectoMouses2] = useState("");

    const [efectoMouse3, efectoMouses3] = useState("");


const cambioIn= ()=>{
    const division = document.querySelector(".division")
    efectoMouse(division.classList.remove("disable"))
}

const cambioOut= ()=>{
    const division = document.querySelector(".division")
    efectoMouse(division.classList.add("disable"))
}

const cambioIn2= ()=>{
    const division1 = document.querySelector(".division1")
    efectoMouses2(division1.classList.remove("disable"))
}

const cambioOut2= ()=>{
    const division1 = document.querySelector(".division1")
    efectoMouses2(division1.classList.add("disable"))
}
const cambioIn3= ()=>{
    const division2 = document.querySelector(".division2")
    efectoMouses3(division2.classList.remove("disable"))
}

const cambioOut3= ()=>{
    const division2 = document.querySelector(".division2")
    efectoMouses3(division2.classList.add("disable"))
}
    return (
        <div className="contenido">
            <div className="container">
                <Logo size="300px" height="300px"></Logo>
                <h2>ESTUDIO DE PESTAÑAS</h2>
            </div>
            <div className="imagenes">
                <div className="imagen1">
                    <img onMouseOver={cambioIn} onMouseOut={cambioOut} className="imgUbicacion" src="estudio.jpg" alt="" srcSet="" />
                    <div className="division disable">
                        <p>Pestañas</p>
                    </div>
                </div>
                <div className="imagen2">
                    <img onMouseOver={cambioIn2} onMouseOut={cambioOut2} className="imgUbicacion1" src="lashes1.jpg" alt="" srcSet="" />
                    <div className="division1 disable">
                        <p>Confort</p>
                    </div>
                </div>
                <div className="imagen3">
                    <img onMouseOver={cambioIn3} onMouseOut={cambioOut3} className="imgUbicacion2" src="estudio2.jpg" alt="" srcSet="" />
                    <div className="division2 disable">
                        <p>Pestañas</p>
                    </div>
                </div>
            </div>
        </div>
    
    )
}