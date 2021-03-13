import React from 'react';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, Title, DescriptionText, TouchableText, TextBlue } from './styles';
import { useNavigation } from '@react-navigation/native';


const RegisterSuccess: React.FC = () => {
    const navigation = useNavigation()
    function handleClose() {
        navigation.navigate('SignIn')
    }

    function handleResend() {
        console.log('Renviando email')
    }
    return  (
        <Container>
            <Header />
            <Title>Cadastro enviado com sucesso!</Title>
            <DescriptionText>Dentro de minutos você receberá um e-mail com um link de ativação para começar a usar o Milk Link.</DescriptionText>

            <TouchableText
                activeOpacity={0.5}
                underlayColor={'#fff'}
                onPress={handleResend}
            >
                <TextBlue>Reenviar Email</TextBlue>
            </TouchableText>
            <Button
                onPress={handleClose}
            >
                <ButtonText>Fechar</ButtonText>
            </Button>
        </Container>

    )
}

export default RegisterSuccess;