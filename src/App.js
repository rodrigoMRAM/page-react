import './App.css';

import Top from './components/Top';
import NavBar from './components/NavBar';
import Logo from './components/Logo';
import Footer from './components/Footer';
import Rutas from './Rutas';
import Whatsapp from './components/Whatsapp';
import Instagram from './components/Instagram';
import './css/Footer.css'
import './css/Style.css'
import './css/Responsive.css'
import './css/Lash.css'
import './css/Preguntas.css'



function App(props){
  return (
        <div>
            <Top />
            <Logo size={"100px"} height={"100px"} />
            <NavBar />
            <Rutas/>
            <Instagram/>
            <Whatsapp/>
            <Footer/>
        </div>
    );
}

export default App;
