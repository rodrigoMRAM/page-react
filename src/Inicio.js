import { Link, Outlet } from "react-router-dom"


export default function Inicio(props){
    return(
        <>
        <div className="diasYHorarios">
            <div className="ubicacion">
                <img src="img/ubicacion.png" alt="" srcset="" width="15px" />
                <p className="top"> Recoleta</p>
            </div>
            <div>
                <p className="estudio top">Estudio de pestañas</p>
            </div>
            <div className="reloj">
                <img src="img/reloj-de-pared.png" alt="" width="15px" />
                <p className="top">Lunes a Sabados de 9 a 19Hs</p>
            </div>
        </div>
        <div className="logo">
                <img src="img/logopng.PNG" alt="logo de flor olguin" srcset="" width="100px" height="100px" />
            </div>

            <div className="navBar">
            <nav className="nav">
           
                <input type="checkbox" id="check"/>
                <label for="check" className="checkbtn">   <div className="burger">
                <span></span>
                <span></span>
                <span></span>
              </div>
                </label>
                    <ul>
                        <li><Link className="desactivado" to="/">Inicio</Link></li>
                        <li><Link className="desactivado" to="/lash">Pestañas</Link></li>
                        <li><Link href="!#">Masajes</Link></li>
                        <li><Link to="/preguntas">Preguntas frecuentes</Link></li>
                        <li><a className='turno' href="!#">AGENDAR TURNO</a></li>
                    </ul>
               
            </nav>
            </div>
            <Outlet/>
            <div className="whatsapp">
            <a href="https://wa.link/fiwoj8" target="_blank" rel="noreferrer"><img src="img/whatsapp.png" alt="" srcset="" width="60px" /></a>
            
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
                    <div class="divInstagram">
                        <div><img src="img/inst.png" alt="" width="20px"/></div>
                        <div className='linkInstagram'><a href="https://www.instagram.com/florolguin_lashess/" target="_blank" rel="noreferrer">Instagram</a></div>
                        
                        
                        </div>
                    </div>
                    <div className="pagos">
                        <h3>Medios de Pago</h3>
                        <img src="img/mercadopago.png" alt="" width="50px" height="31.67px"/>
                        <img src="img/visa.png" alt="" width="50px" />
                         <img src="img/mastercard.png" alt="" width="50px"/>
                    </div>

                    
                </div>
            </footer>
            
            </>
            
    )
}