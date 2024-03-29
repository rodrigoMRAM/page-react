
import { Route,Switch } from "wouter";
import Lashes from './Lashes';
import Contenido from './Contenido';
import Preguntas from './Preguntas';
import Lifting from './Lifting';
import Error404 from './Error404';
import Cejas from "./Cejas";
import Masajes from "./Masajes";
export default function Rutas(){
    return(
         <Switch>
        <Route path='/page-react/' component={Contenido}></Route>
        <Route path='/page-react/lash' component={Lashes}></Route>
        <Route path='/page-react/masajes' component={Masajes}></Route>
        <Route path='/page-react/preguntas' component={Preguntas}></Route>
        <Route path='/page-react/lifting' component={Lifting}></Route>
        <Route path='/page-react/cejas' component={Cejas}></Route>
        <Route path="/:rest*" component={Error404}></Route>
        </Switch>
    );
}