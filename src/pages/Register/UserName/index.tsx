import React, { useState } from 'react';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, Title, Input } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';


const UserName: React.FC = () => {
    const [name, setName] = useState('')
    const navigation = useNavigation()
    async function handleContinue() {
        await AsyncStorage.setItem( 'Nome', name);
        navigation.navigate('UserCPF')
    }
    return  (
        <Container>
            <Header />
            <Title>Como prefere ser chamado ?</Title>
            <Input
                placeholder="Digite aqui seu nome ou apelido"
                placeholderTextColor= "#999"
                keyboardType="email-address"
                autoCapitalize="words"
                autoCorrect={false}
                value={name}
                onChangeText={setName}
            />

            <Button
                onPress={handleContinue}
            >
                <ButtonText>Continue</ButtonText>
            </Button>
        </Container>

    )
}

export default UserName;