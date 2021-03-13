import React from 'react';
import { Container, Logo } from './styles';


import logo from '../../assets/logo.png';


const Header: React.FC = () => {

    return(
        <Container>
            <Logo source={logo}/>
        </Container>
  );
}

export default Header;