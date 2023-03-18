
import { Route,Switch } from "wouter";
import Lashes from './Lashes';
import Contenido from './Contenido';
import Preguntas from './Preguntas';
import Lifting from './Lifting';
import Error404 from './Error404';
export default function Rutas(){
    return(
         <Switch>
        <Route path='/' component={Contenido}></Route>
        <Route path='/lash' component={Lashes}></Route>
        <Route path='/preguntas' component={Preguntas}></Route>
        <Route path='/lifting' component={Lifting}></Route>
        <Route path="/:rest*" component={Error404}></Route>
        </Switch>
    );
}