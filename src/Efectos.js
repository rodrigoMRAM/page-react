import { useEffect, useState } from "react"
export default function Efectos(){
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
    
}