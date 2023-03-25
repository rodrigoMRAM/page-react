import { useState } from "react";

export default function Instagram(){
    const [efecto, setEfecto] = useState("");
    window.addEventListener("load", ()=>{
        setEfecto("efectoTransicion")
    })


    return(
        <div className="instaLogo" id={efecto}>
        <a href="https://www.instagram.com/florolguin_lashess/" target="_blank" rel="noreferrer"><img className="fondoW" src="instaLogo.png" alt="" srcSet="" width="60px" /></a>

    </div>
    )
}