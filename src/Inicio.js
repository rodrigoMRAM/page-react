import { Link, Outlet } from "react-router-dom"
import Contenido from "./Contenido"
import Logo from "./Logo"
export default function Inicio(props){
    return(
        <><div class="diasYHorarios">
            <div class="ubicacion">
                <img src="img/ubicacion.png" alt="" srcset="" width="15px" />
                <p>Recoleta</p>
            </div>
            <div>
                <p class="estudio">Estudio de pestañas</p>
            </div>
            <div class="reloj">
                <img src="img/reloj-de-pared.png" alt="" width="15px" />
                <p>Lunes a Sabados de 9 a 19Hs</p>
            </div>
        </div><div class="logo">
                <img src="img/logopng.PNG" alt="logo de flor olguin" srcset="" width="100px" height="100px" />
            </div>

            <div class="navBar">
            <nav className="nav">
           
                <input type="checkbox" id="check"/>
                <label for="check" class="checkbtn">   <div className="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
                </label>
                    <ul>
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/lash">Pestañas</Link></li>
                        <li><a href="!#">Masajes</a></li>
                        <li><a href="!#">Preguntas frecuentes</a></li>
                        <li><a href="!#">Contacto</a></li>
                    </ul>
               
            </nav>
            </div>
            <Outlet/>
            <footer>
                <div className="footer">
                    <Logo size="200px"/>
                </div>
            </footer>
            </>
            
    )
}