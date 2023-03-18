import { useEffect, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import './Style.css'
import './Responsive.css'
import './Lash.css'
import './Footer.css'
import './Preguntas.css'


export default function Inicio(props) {

    const nuevafuncion=()=>{
        const miCheck = document.getElementById("check")
        const miClase = "activa2"
        return miCheck.checked = false
        
    }

    const [efecto , setEfecto] = useState("")
    const otraFunc=()=>{
        const lash= document.getElementById("tab-lash")
        const lash1= document.getElementById("tab-masajes")
        const lash2= document.getElementById("tab-preguntas")
        lash.classList.remove("activa2")
        lash1.classList.remove("activa2")
        lash2.classList.remove("activa2")
        setEfecto("activa2")

        
    }

    const [efecto1 , setEfecto1] = useState("")
    const otraFunc1=()=>{
        const lash= document.getElementById("tab-inicio")
        const lash1= document.getElementById("tab-masajes")
        const lash2= document.getElementById("tab-preguntas")

        setEfecto1(lash.classList.remove("activa2"),
        lash1.classList.remove("activa2"),
        lash2.classList.remove("activa2"),"activado")
        
    }

    const [efecto2 , setEfecto2] = useState("")
    const otraFunc2=()=>{
        const lash= document.getElementById("tab-lash")
        const lash1= document.getElementById("tab-index")
        const lash2= document.getElementById("tab-preguntas")
        lash.classList.remove("activa2")
        lash1.classList.remove("activa2")
        lash2.classList.remove("activa2")
        setEfecto2("activa2")
        
    }

    const [efecto3 , setEfecto3] = useState("")
    const otraFunc3=()=>{
        const lash= document.getElementById("tab-lash")
        const lash1= document.getElementById("tab-masajes")
        const lash2= document.getElementById("tab-index")
        lash.classList.remove("activa2")
        lash1.classList.remove("activa2")
        lash2.classList.remove("activa2")
        setEfecto3("activa2")
        
    }



    const miFuncion = ()=>{
        return document.title = "Flor Olguin Lashes"
    }
    useEffect(()=>{
        document.title = "Flor Olguin Lashes"
    },[]);
    return (
        <>
            <div className="diasYHorarios">
                <div className="ubicacion">
                    <img src="img/ubicacion.png" alt="" srcSet="" width="15px" />
                    <p className="top" > Recoleta</p>
                </div>
                <div>
                    <p className="estudio top" >Estudio de pestañas</p>
                </div>
                <div className="reloj">
                    <img src="img/reloj-de-pared.png" alt="" width="15px" />
                    <p className="top">Lunes a Sabados de 9 a 19Hs</p>
                </div>
            </div>
            <div className="logo">
                <img src="img/logopng.PNG" alt="logo de flor olguin" srcSet="" width="100px" height="100px" />
            </div>

            <div className="navBar">
                <nav className="nav">

                    <input onClick={(evento)=>{console.log(evento)}} type="checkbox" id="check" />
                    <label  htmlFor="check" className="checkbtn">   <div className="burger">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </label>
                    <ul>
                        <li><Link  onClick={nuevafuncion}  id="tab-inicio" to="/">Inicio</Link></li>
                        <li><Link  onClick={nuevafuncion}  id="tab-lash" to="/lash">Pestañas</Link></li>
                        <li><Link  href="!#" onClick={nuevafuncion} id="tab-masajes">Masajes</Link></li>
                        <li><Link  to="/preguntas" onClick={nuevafuncion} id="tab-preguntas">Preguntas frecuentes</Link></li>
                        <li><a className='turno'  href="!#" id="tab-index">AGENDAR TURNO</a></li>
                    </ul>

                </nav>
            </div>
            <Outlet />
            <div className="whatsapp">
                <a href="https://wa.link/fiwoj8" target="_blank" rel="noreferrer"><img src="img/whatsapp.png" alt="" srcSet="" width="60px" /></a>

            </div>
            <footer>
                <div className="footer">
                    <div className="servicios" >
                        <h3>Servicios</h3>
                        <p>Pestañas</p>
                        <p>Lifting</p>
                        <p>Cejas</p>
                        <p>Masajes</p>
                    </div>
                    <div className="direccion">
                        <h3>Dirección</h3>
                        <p>Peña 3121 - Recoleta</p>
                        <p>C1425 -  CABA - Argentina</p>
                    </div>
                    <div className="seguinos">
                        <h3>Seguinos</h3>
                        <div className="divInstagram">
                            <div><img src="img/inst.png" alt="" width="20px" /></div>
                            <div className='linkInstagram'><a href="https://www.instagram.com/florolguin_lashess/" target="_blank" rel="noreferrer">Instagram</a></div>


                        </div>
                    </div>
                    <div className="pagos">
                        <h3>Medios de Pago</h3>
                        <img src="img/mercadopago.png" alt="" width="50px" height="31.67px"/>
                        <img src="img/visa.png" alt="" width="50px"/>
                        <img src="img/mastercard.png" alt="" width="50px"/>
                    </div>


                </div>
            </footer>

        </>

    )
}