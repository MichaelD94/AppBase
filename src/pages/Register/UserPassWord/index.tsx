import React, { useState } from 'react';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, Title, Input } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';



const UserPassWord: React.FC = () => {
    const [passWord, setPassWord] = useState('')
    const navigation = useNavigation()
    async function handleContinue() {
        await AsyncStorage.setItem( 'Senha', passWord);
        navigation.navigate('UserData')
    }
    return  (
        <Container>
            <Header />
            <Title>Agora voce precisa criar uma senha</Title>
            <Input
                placeholder="Digite uma senha aqui"
                placeholderTextColor= "#999"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                value={passWord}
                onChangeText={setPassWord}
            />

            <Button
                onPress={handleContinue}
            >
                <ButtonText>Continue</ButtonText>
            </Button>
        </Container>

    )
}

export default UserPassWord;