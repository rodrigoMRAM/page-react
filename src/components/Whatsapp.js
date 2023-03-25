import { useState } from "react";

export default function Whatsapp(){
    const [efecto, setEfecto] = useState("");
    window.addEventListener("load", ()=>{
        setEfecto("efectoTransicion")
    })


    return(
        <div className="whatsapp" id={efecto}>
        <a href="https://wa.link/fiwoj8" target="_blank" rel="noreferrer"><img className="fondoW" src="whatsapp.png" alt="" srcSet="" width="60px" /></a>

    </div>
    )
}