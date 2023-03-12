import Logo from "./Logo"
export default function Contenido(){
    return(
        <><div class="contenido">
            <div className="container">
                <Logo size="300px" height="300px"></Logo>
                <h2>ESTUDIO DE PESTAÑAS</h2>
            </div>
            <div class="imagenes">
                <div class="imagen1">
                    <img class="imgUbicacion" src="img/estudio.jpg" alt="" srcset="" />
                    <div class="division disable">
                        <p>Pestañas</p>
                    </div>
                </div>
                <div class="imagen2">
                    <img class="imgUbicacion1" src="img/lashes1.jpg" alt="" srcset="" />
                    <div class="division1 disable">
                        <p>Confort</p>
                    </div>
                </div>
                <div class="imagen3">
                    <img class="imgUbicacion2" src="img/estudio2.jpg" alt="" srcset="" />
                    <div class="division2 disable">
                        <p>Pestañas</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}