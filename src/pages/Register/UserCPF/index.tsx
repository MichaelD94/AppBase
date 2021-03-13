import React, { useState } from 'react';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, Title, Input } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';



const UserCPF: React.FC = () => {
    const [cpf, setCPF] = useState('')

    const navigation = useNavigation()

    async function handleContinue() {
        await AsyncStorage.setItem( 'CPF', cpf);
        navigation.navigate('UserEmail')
    }
    return  (
        <Container>
            <Header />
            <Title>Qual o numero do seu CPF ?</Title>
            <Input
                placeholder="Digite aqui seu CPF"
                placeholderTextColor= "#999"
                keyboardType="numeric"
                autoCapitalize="none"
                autoCorrect={false}
                value={cpf}
                onChangeText={setCPF}
            />
            <Button
                onPress={handleContinue}
            >
                <ButtonText>Continue</ButtonText>
            </Button>
        </Container>

    )
}

export default UserCPF;