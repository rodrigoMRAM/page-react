import { useEffect, useState } from "react";

export default function Lashes() {
    const [efecto, setEfecto] = useState("")
    const [efecto1, setEfecto1] = useState("")
    const [efecto2, setEfecto2] = useState("")
    const [efecto3, setEfecto3] = useState("")
    const [efecto4, setEfecto4] = useState("")


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

    window.addEventListener("scroll", (event) => {
        if (window.pageYOffset > 1300) {
            setEfecto2("efectoNum1")
        }

    })

    window.addEventListener("scroll", (event) => {
        if (window.pageYOffset > 1900) {
            setEfecto3("efectoNum1")
        }

    })

    window.addEventListener("scroll", (event) => {
        if (window.pageYOffset > 2300) {
            setEfecto4("efectoNum1")
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


    const [info2, setInfo2] = useState("plus")


    const miInfo2 = () => {
        const pepe = document.querySelector(".pepe2")
        if (info2 === "plus") {
            setInfo2("resta")
        }
        else {
            setInfo2("plus")
        }
        pepe.classList.toggle("disable")
    }


    const [info3, setInfo3] = useState("plus")


    const miInfo3 = () => {
        const pepe = document.querySelector(".pepe3")
        if (info3 === "plus") {
            setInfo3("resta")
        }
        else {
            setInfo3("plus")
        }
        pepe.classList.toggle("disable")
    }


    const [info4, setInfo4] = useState("plus")


    const miInfo4 = () => {
        const pepe = document.querySelector(".pepe4")
        if (info4 === "plus") {
            setInfo4("resta")
        }
        else {
            setInfo4("plus")
        }
        pepe.classList.toggle("disable")
    }
    useEffect(() => {
        document.title = "Extensiones de Pestañas"
    })
    return (
        <section>
        <div className="contenido">
            <div className="extension">
                <h1>Pestañas</h1>
                <h5>Lifting & Extensiones</h5>
            </div>
            <div className="extensiones" >
                <img className="mifotoEfect" src="1d.jpg" id={efecto1} alt="" />
                <div className="extensiones-h3">
                    <h3>Extensiones clasicas</h3>
                    <div className="botonl">
                    <div className="botonFuncion" onClick={miInfo}>

                        <img className="imagenplus" src={info + ".png"} alt="" srcset="" />
                        <a className="info" >Info</a>
                    </div>
                        <div className="boton__funcion">
                            <p className="pepe disable">ipsum asdaisjdaoisdjaosidjaso oidjsaosdfsf isdf sf shfoishfsfisfs iufsiufn</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="lifting">
                <div className="lifting-h3">
                    <h3>Extensiones 2D</h3>
                    <div className="boton">
                    <div className="botonFuncion" onClick={miInfo1}>

                        <img className="imagenplus" src={info1 + ".png"} alt="" srcset="" />
                        <a className="info" >Info</a>
                    </div>
                        <div className="boton__funcion">

                            <p className="pepe1 disable">ipsum asdaisjdaoisdjaosidjaso oidjsaosdfsf isdf sf shfoishfsfisfs iufsiufn</p>
                        </div>
                    </div>
                </div>
                <img className="mifotoEfect" src="2d.jpg" id={efecto} alt="" />
            </div>
            <div className="extensiones" >
                <img className="mifotoEfect" src="3d.jpg" id={efecto2} alt="" />
                <div className="extensiones-h3">
                    <h3>Extensiones 3D</h3>
                    <div className="botonl">
                    <div className="botonFuncion" onClick={miInfo2}>

                        <img className="imagenplus" src={info2 + ".png"} alt="" srcset="" />
                        <a className="info" >Info</a>
                    </div>
                        <div className="boton__funcion">

                            <p className="pepe2 disable">ipsum asdaisjdaoisdjaosidjaso oidjsaosdfsf isdf sf shfoishfsfisfs iufsiufn</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className="lifting" >
                <div className="extensiones-h3">
                    <h3>Extensiones 5D</h3>
                    <div className="boton">
                        <div className="botonFuncion" onClick={miInfo3}>

                            <img className="imagenplus" src={info3 + ".png"} alt="" srcset="" />
                            <a className="info" >Info</a>
                        </div>
                        <div className="boton__funcion">

                            <p className="pepe3 disable">ipsum asdaisjdaoisdjaosidjaso oidjsaosdfsf isdf sf shfoishfsfisfs iufsiufn</p>
                        </div>
                    </div>
                </div>
                <img className="mifotoEfect" src="5d.jpg" id={efecto3} alt="" />
            </div>


            <div className="extensiones" >
                <img className="mifotoEfect" id={efecto4} src="lifting.jpg" alt="" />
                <div className="extensiones-h3">
                    <h3>Lifting</h3>
                    <div className="botonl">
                    <div className="botonFuncion" onClick={miInfo4}>

                        <img className="imagenplus" src={info4 + ".png"} alt="" srcset="" />
                        <a className="info" >Info</a>
                    </div>
                        <div className="boton__funcion">

                            <p className="pepe4 disable">ipsum asdaisjdaoisdjaosidjaso oidjsaosdfsf isdf sf shfoishfsfisfs iufsiufn</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
    );
}