import { Link} from "wouter"
import { useState , useEffect} from "react";
export default function Preguntas(){
    const [desactivado, setDesactivado] = useState("")

    const cambio= ()=>{
        const desactiva2_ = document.querySelector('.desactiva2_')
        const desactiva2 = document.querySelector('.desactiva2');
        
        setDesactivado(desactiva2.classList.toggle('activa2'))
    }

    useEffect(()=>{
        document.title = "Preguntas Frecuentes"
    },[]);
    return(
        <section><div className="preguntasFrecuentes">
            <div className="botones">
                <Link className=" actived desactiva2_"  to="/page-react/preguntas">Extensiones</Link>
                <Link className="desactiva2"  onClick={cambio} to="/page-react/lifting">Lifting</Link>
                <Link className="desactiva2"  onClick={cambio} to="/page-react/cejas">Cejas</Link>
            
        </div>
                <div className="wrapper">
                    <div className="tituloExtensiones">
                        <h2>Extensiones de Pestañas</h2>
                    </div>
                    <div className="violetas">
                        <h6>¿Qué son las extensiones de pestañas?</h6>
                        <p>Las extensiones de pestañas son pelos sintéticos o de visón que se colocan individualmente en las pestañas naturales para dar un aspecto más largo, grueso y voluminoso.</p>
                    </div>
                    <div className="colorFondo">
                        <h6>¿Cuánto duran las extensiones de pestañas?</h6>
                        <p> Las extensiones de pestañas pueden durar de 4 a 6 semanas, dependiendo del ciclo de crecimiento natural de las pestañas y del cuidado que se les dé.</p>
                    </div>
                    <div className="violetas">
                        <h6>¿Son las extensiones de pestañas seguras?</h6>
                        <p>  Sí, las extensiones de pestañas son seguras cuando se aplican por un profesional capacitado y se siguen las instrucciones de cuidado adecuadas.</p>

                    </div>
                    <div className="colorFondo">
                        <h6> ¿Duele la aplicación de las extensiones de pestañas?</h6>
                        <p>   No, la aplicación de las extensiones de pestañas no duele. El proceso es indoloro y puede ser relajante.</p>
                    </div>
                    <div className="violetas">
                        <h6> ¿Puedo maquillar mis pestañas si tengo extensiones?</h6>
                        <p> Sí, se puede maquillar las pestañas con extensiones, pero se debe tener cuidado al aplicar y retirar el maquillaje para evitar dañar las extensiones.</p>
                    </div>
                    <div className="colorFondo">
                        <h6> ¿Puedo nadar con las extensiones de pestañas?</h6>
                        <p>  Sí, se puede nadar con las extensiones de pestañas, pero se recomienda evitar sumergir la cabeza en agua durante largos períodos de tiempo.</p>
                    </div>
                    <div className="violetas">
                        <h6>¿Puedo usar rizador de pestañas con extensiones?</h6>
                        <p>   No, no se debe usar un rizador de pestañas con extensiones porque puede dañar las pestañas naturales y las extensiones.</p>
                    </div>
                    <div className="colorFondo">
                        <h6> ¿Cómo debo cuidar mis extensiones de pestañas?</h6>
                        <p>   Se deben evitar los aceites y los productos a base de aceite en el área de las pestañas, se deben cepillar regularmente y no se deben tirar o jalar las extensiones.</p>
                    </div>
                    <div className="violetas">
                        <h6> ¿Puedo quitarme las extensiones de pestañas yo misma?</h6>
                        <p>No, no se recomienda quitarse las extensiones de pestañas uno mismo. Se debe buscar a un profesional para que las retire de manera segura y sin dañar las pestañas naturales.</p></div>
                    <div className="colorFondo">
                        <h6> ¿Cuánto tiempo tarda la aplicación de las extensiones de pestañas?</h6>
                        <p> La aplicación de las extensiones de pestañas puede tomar de 1 a 2 horas, dependiendo de la cantidad de pestañas a aplicar.</p>
                    </div>
                </div>
            </div></section>
    );
}