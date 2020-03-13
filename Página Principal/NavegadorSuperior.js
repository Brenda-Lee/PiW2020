import React, {Component, Button, Image} from 'react';

class NavegadorSuperior extends Component {
    render() { 
        return ( 
            <div className="navegadorsup">
                <Image src="./Assets/logo01.png"></Image>
                <Button tittle="Linha do Tempo"></Button>
                <Button tittle="Perfil"></Button>
                <div className="username"></div>
            </div>
         );
    }
}
 
export default NavegadorSuperior;