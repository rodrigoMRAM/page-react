import { useState } from "react";
export default function Masajes(){

    const [efecto, setEfecto] = useState("")
    const [efecto1, setEfecto1] = useState("")



    console.log(window.pageYOffset)
    window.addEventListener("scroll", (event) => {
        if (window.pageYOffset > 600) {
            setEfecto("efectoNum1")
        }

    })

    console.log(window.pageYOffset)
    window.addEventListener("scroll", (event) => {
        if (window.pageYOffset > 300) {
            setEfecto1("efectoNum1")
        }

    })

    

    const [info, setInfo] = useState("plus")


    const miInfo = () => {
        const pepe = document.querySelector(".pepe")
        if (info === "plus") {
            setInfo("resta")
        }
        else {
            setInfo("plus")
        }
        pepe.classList.toggle("disable")
    }


    const [info1, setInfo1] = useState("plus")


    const miInfo1 = () => {
        const pepe = document.querySelector(".pepe1")
        if (info1 === "plus") {
            setInfo1("resta")
        }
        else {
            setInfo1("plus")
        }
        pepe.classList.toggle("disable")
    }


    return(
        <section>
        <div className="extension">
            <h1>Masajes</h1>
            <h5>Relajantes y Descontracturantes</h5>
        </div><div className="extensiones">
                <img className="mifotoEfect" src="masaje.jpg" id={efecto1} alt="" />
                <div className="extensiones-h3">
                    <h3>Masajes Descontraturantes</h3>
                    <div className="botonl">
                        <div className="botonFuncion" onClick={miInfo}>

                            <img className="imagenplus" src={info + ".png"} alt="" srcset="" />
                            <a className="info" >Info</a>
                        </div>
                        <div className="boton__funcion">
                            <p className="pepe disable">son las manipulaciones realizadas sobre uno o varios grupos musculares contracturados. Para algunas escuelas no constituiría un tipo de masaje específico, sino una serie de manipulaciones aplicadas durante un masaje de relajación o estético.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lifting">
                <div className="lifting-h3">
                    <h3>Masajes Relajantes</h3>
                    <div className="boton">
                    <div className="botonFuncion" onClick={miInfo1}>

                        <img className="imagenplus" src={info1 + ".png"} alt="" srcset="" />
                        <a className="info" >Info</a>
                    </div>
                        <div className="boton__funcion">

                            <p className="pepe1 disable">Tiende a armonizar el sistema nervioso, induciendo, tal como su nombre lo indica, determinado grado de relajación muscular y ayudando al individuo a recuperar o mantener el equilibrio psicofísico.</p>
                        </div>
                    </div>
                </div>
                <img className="mifotoEfect" src="masaje2.jpg" id={efecto} alt="" />
            </div>
            </section>
    )
}