import react, {Component} from 'react';
import react from 'react-native';

import AppEstilo from './AppEstilo.css';
import NavegadorSuperior from './NavegadorSuperior';
import Galeria from './Galeria';

class SocialApp extends Component{
    render() { 
        return(
            <div>
                <NavegadorSuperior style={AppEstilo.NavegadorSuperior}></NavegadorSuperior>
                <Galeria></Galeria>
            </div>
        );
    }
}
 
export default SocialApp;