import React, { useState } from 'react';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, Title, Input } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';

const UserEmail: React.FC = () => {
    const [email, setEmail] = useState('')

    const navigation = useNavigation()
    async function handleContinue() {

        await AsyncStorage.setItem( 'Email', email);
        navigation.navigate('UserPassWord')
    }
    return  (
        <Container>
            <Header />
            <Title>Qual o seu Email ?</Title>
            <Input
                placeholder="Digite aqui seu nome ou apelido"
                placeholderTextColor= "#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={email}
                onChangeText={setEmail}
            />

            <Button
                onPress={handleContinue}
            >
                <ButtonText>Continue</ButtonText>
            </Button>
        </Container>

    )
}

export default UserEmail;