export default function Footer(){
    return(
        <div>
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
                            <div><img src="inst.png" alt="" width="20px" /></div>
                            <div className='linkInstagram'><a href="https://www.instagram.com/florolguin_lashess/" target="_blank" rel="noreferrer">Instagram</a></div>


                        </div>
                    </div>
                    <div className="pagos">
                        <h3>Medios de Pago</h3>
                        <img src="mercadopago.png" alt="" width="50px" height="31.67px" />
                        <img src="visa.png" alt="" width="50px" />
                        <img src="mastercard.png" alt="" width="50px" />
                    </div>


                </div>
            </footer>
            </div>
    )
}