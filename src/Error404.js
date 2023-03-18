import {useLocation, Link} from "react-router-dom"

    

export default function Error404(){
    let location = useLocation();
    return(
        <div className="error404">
            <img src="img/error404.png" width="300px"/>
            <p>ERROR 404 La pagina {location.pathname} no se encuentra disponible</p>
            <Link to="/">Volver al Inicio</Link>
        </div>
    );
}