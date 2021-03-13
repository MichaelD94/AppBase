import React, { useState } from 'react';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, Title, DescriptionText} from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';


const UserType: React.FC = () => {
    const navigation = useNavigation()


    async function handleContinue() {
        await AsyncStorage.setItem( 'userType', 'Produtor');
        navigation.navigate('UserPerson')
    }
    return  (
        <Container>
            <Header />
            <Title>Agora vamos criar sua conta</Title>
            <DescriptionText>Primeiro iremos criar os seus dados de login e em seguida validaremos os seus dados.</DescriptionText>
            <Button
                onPress={handleContinue}
            >
                <ButtonText>Sou Produtor</ButtonText>
            </Button>

            <Button
                onPress={handleContinue}
            >
                <ButtonText>Sou Comprador</ButtonText>
            </Button>
        </Container>

    )
}

export default UserType;