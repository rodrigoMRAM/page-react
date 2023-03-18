import { Link} from "wouter";
export default function NavBar(){
    const nuevafuncion=()=>{
        const miCheck = document.getElementById("check")
        const miClase = "activa2"
        return miCheck.checked = false
        
    }

    // const [efecto , setEfecto] = useState("")
    // const otraFunc=()=>{
    //     const lash= document.getElementById("tab-lash")
    //     const lash1= document.getElementById("tab-masajes")
    //     const lash2= document.getElementById("tab-preguntas")
    //     lash.classList.remove("activa2")
    //     lash1.classList.remove("activa2")
    //     lash2.classList.remove("activa2")
    //     setEfecto("activa2")

        
    // }

    // const [efecto1 , setEfecto1] = useState("")
    // const otraFunc1=()=>{
    //     const lash= document.getElementById("tab-inicio")
    //     const lash1= document.getElementById("tab-masajes")
    //     const lash2= document.getElementById("tab-preguntas")

    //     lash.classList.remove("activa2")
    //     lash1.classList.remove("activa2")
    //     lash2.classList.remove("activa2")
    //     setEfecto1("activa2")
        
    // }

    // const [efecto2 , setEfecto2] = useState("")
    // const otraFunc2=()=>{
    //     const lash= document.getElementById("tab-lash")
    //     const lash1= document.getElementById("tab-index")
    //     const lash2= document.getElementById("tab-preguntas")
    //     lash.classList.remove("activa2")
    //     lash1.classList.toggle("activa2")
    //     lash2.classList.remove("activa2")
    //     setEfecto2("activa2")
        
    // }

    // const [efecto3 , setEfecto3] = useState("")
    // const otraFunc3=()=>{
    //     const lash= document.getElementById("tab-lash")
    //     const lash1= document.getElementById("tab-masajes")
    //     const lash2= document.getElementById("tab-index")
    //     lash.classList.remove("activa2")
    //     lash1.classList.remove("activa2")
    //     lash2.classList.remove("activa2")
    //     setEfecto3("activa2")
        
    // }



    const miFuncion = ()=>{
        return document.title = "Flor Olguin Lashes"
    }

    return (
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
                        <li><Link  onClick={nuevafuncion}  id="tab-inicio" to="/page-react/">Inicio</Link></li>
                        <li><Link   onClick={nuevafuncion}  id="tab-lash" to="/page-react/lash">Pestañas</Link></li>
                        <li><Link  href="!#" onClick={nuevafuncion} id="tab-masajes">Masajes</Link></li>
                        <li><Link  to="/page-react/preguntas" onClick={nuevafuncion} id="tab-preguntas">Preguntas frecuentes</Link></li>
                        <li><a className='turno'  href="!#" id="tab-index">AGENDAR TURNO</a></li>
                    </ul>

                </nav>
            </div>
    )
}