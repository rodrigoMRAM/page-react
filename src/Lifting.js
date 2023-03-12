import { Link, Outlet } from "react-router-dom"
export default function Lifting(){
    return(
        <div className="preguntasFrecuentes">
            <div class="botones">
            
                <Link className="desactiva2" to="/preguntas">Extensiones de Pestañas</Link>
                <Link className="desactiva2" to="/lifting">Lifting</Link>
        </div>
                <div className="wrapper">
                    <div className="tituloExtensiones">
                        <h2>Lifting</h2>
                    </div>
                    <div className="violetas">
                        <h6>¿Qué es el lifting de pestañas?</h6>
                        <p>El lifting de pestañas es un tratamiento que utiliza una solución química para levantar y <br />curvar las pestañas naturales desde la raíz, lo que crea un efecto de alargamiento y levantamiento.</p>
                    </div>
                    <div className="colorFondo">
                        <h6>¿Cómo se realiza el lifting de pestañas?</h6>
                        <p> Primero, se limpia y desmaquilla las pestañas. Luego, se aplica una solución química en <br />las pestañas para levantarlas y se deja actuar por un tiempo determinado. Después, se <br />aplica una solución neutralizante para fijar la curvatura. Por último, se aplica<br /> un tinte para darles un aspecto más oscuro y voluminoso.</p>
                    </div>
                    <div className="violetas">
                        <h6>¿Cuánto tiempo dura el lifting de pestañas?</h6>
                        <p> El lifting de pestañas puede durar de 6 a 8 semanas, dependiendo del ciclo de crecimiento <br />natural de las pestañas y del cuidado que se les dé.</p>

                    </div>
                    <div className="colorFondo">
                        <h6>¿Es seguro el lifting de pestañas?</h6>
                        <p>Sí, el lifting de pestañas es seguro cuando se realiza por un profesional capacitado y se <br />siguen las instrucciones de cuidado adecuadas.</p>
                    </div>
                    <div className="violetas">
                        <h6>¿Duele el lifting de pestañas?</h6>
                        <p>No, el lifting de pestañas no duele. El proceso es indoloro y puede ser relajante.</p>
                    </div>
                    <div className="colorFondo">
                        <h6>¿Puedo maquillar mis pestañas después del lifting?</h6>
                        <p>Sí, se puede maquillar las pestañas después del lifting, pero se recomienda esperar al menos 24<br />horas después del tratamiento para permitir que las soluciones <br />se asienten correctamente.</p>
                    </div>
                    <div className="violetas">
                        <h6>¿Puedo nadar con el lifting de pestañas?</h6>
                        <p>Sí, se puede nadar con el lifting de pestañas, pero se recomienda evitar sumergir la cabeza <br />en agua durante largos períodos de tiempo.</p>
                    </div>
                    <div className="colorFondo">
                        <h6>¿Puedo usar rizador de pestañas después del lifting?</h6>
                        <p>No, no se debe usar un rizador de pestañas después del lifting porque puede dañar las pestañas<br /> naturales y el efecto de la curvatura.</p>
                    </div>
                    <div className="violetas">
                        <h6>¿Cómo debo cuidar mis pestañas después del lifting?</h6>
                        <p>Se deben evitar los aceites y los productos a base de aceite en el área de las pestañas, se <br />deben cepillar regularmente y no se deben frotar o tirar las pestañas.</p></div>
                    <div className="colorFondo">
                        <h6>¿Puedo repetir el lifting de pestañas?</h6>
                        <p>Sí, se puede repetir el lifting de pestañas después de que el efecto haya desaparecido. Se<br /> recomienda esperar al menos 6 semanas antes de volver a hacerlo para <br />permitir que las pestañas se recuperen completamente.</p>
                    </div>
                </div>
            </div>
    );
}