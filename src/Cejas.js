
import { Link } from "wouter"
export default function Cejas(){

    return(
        <div className="preguntasFrecuentes">
            <div className="botones">
            
                <Link className="desactiva2"  to="/page-react/preguntas">Extensiones</Link>
                <Link className="desactiva2" to="/page-react/lifting">Lifting</Link>
                <Link className="actived"   to="/page-react/cejas">Cejas</Link>
        </div>
                <div className="wrapper">
                    <div className="tituloExtensiones">
                        <h2>Cejas</h2>
                    </div>
                    <div className="violetas">
                        <h6>¿Qué es el perfilado de cejas?</h6>
                        <p>El perfilado de cejas es un procedimiento estético que se realiza para dar forma y definición a las cejas. Se utiliza una combinación de técnicas como la depilación con pinzas, la cera y la tinción para lograr la forma deseada.</p>
                    </div>
                    <div className="colorFondo">
                        <h6>¿Cómo sé qué forma de cejas es la mejor para mí?</h6>
                        <p>La forma ideal de las cejas varía según la forma de tu cara y tus rasgos faciales. Es recomendable consultar a un esteticista o estilista de cejas para determinar la forma de cejas más adecuada para ti.</p>
                    </div>
                    <div className="violetas">
                        <h6>¿Es doloroso el perfilado de cejas?</h6>
                        <p> El nivel de dolor depende de la sensibilidad de cada persona y de las técnicas utilizadas en el procedimiento. Por lo general, la depilación con pinzas y la cera pueden ser un poco dolorosas, pero el dolor es temporal y tolerable.</p>

                    </div>
                    <div className="colorFondo">
                        <h6>¿Con qué frecuencia debería hacerme el perfilado de cejas?</h6>
                        <p>La frecuencia del perfilado de cejas depende del ritmo de crecimiento de tus cejas y del nivel de mantenimiento que desees. En general, se recomienda realizarlo cada 4-6 semanas para mantener la forma y la definición.</p>
                    </div>
                    <div className="violetas">
                        <h6>¿Hay algún cuidado especial que deba tener después del perfilado de cejas?</h6>
                        <p>Es importante evitar exponer las cejas recién perfiladas al sol directo, al sudor excesivo y a los productos químicos durante las primeras 24 horas después del procedimiento. También se recomienda aplicar una crema hidratante o un aceite de ricino para mantener las cejas suaves y saludables.</p>
                    </div>
                    <div className="colorFondo">
                        <h6>¿Es seguro el perfilado de cejas?</h6>
                        <p>Sí, siempre y cuando se realice por un profesional capacitado y con los materiales adecuados. Es importante asegurarse de que el lugar donde se realiza el perfilado cumpla con las normas de higiene y seguridad requeridas para evitar cualquier riesgo de infección o lesión.</p>
                    </div>
                </div>
            </div>
    );
}