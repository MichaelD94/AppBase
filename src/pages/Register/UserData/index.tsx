import React, { useEffect, useState } from 'react';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, Title, Input, Form, Label } from './styles';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';



const UserData: React.FC = () => {
    const navigation = useNavigation()
    const [name, setName] = useState('')
    const [cpf, setCPF] = useState('')
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    async function loadData() {
      const nome = await AsyncStorage.getItem('Nome')
      const userCPF = await AsyncStorage.getItem('CPF')
      const userEmail = await AsyncStorage.getItem('Email')
      const userSenha = await AsyncStorage.getItem('Senha')

      console.log(nome)
      console.log(userCPF)
      console.log(userEmail)
      console.log(userSenha)

    //   setName(nome)
    //   setCPF(userCPF)
    //   setEmail(userEmail)
    //   setSenha(userSenha)
    }

    useEffect(() => {
        loadData()
      }, [])

    function handleEnviar() {
        navigation.navigate('RegisterSuccess')
    }
    return  (
        <Container>
            <Header />
            <Title>Verifique seus Dados e envie seu cadastro</Title>
            <Form>
                <Label>Nome ou Apelido</Label>
                <Input
                    placeholder="Digite aqui seu nome ou apelido"
                    placeholderTextColor= "#999"
                    keyboardType="email-address"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={name}
                    onChangeText={setName}
                />

                <Label>CPF</Label>
                <Input
                    placeholder="CPF"
                    placeholderTextColor= "#999"
                    keyboardType="numeric"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={cpf}
                    onChangeText={setCPF}
                />

                <Label>Email</Label>
                <Input
                    placeholder="Digite aqui seu Email"
                    placeholderTextColor= "#999"
                    keyboardType="email-address"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />
                <Label>Confirmação de Email</Label>
                <Input
                    placeholder="Confirme aqui seu Email"
                    placeholderTextColor= "#999"
                    keyboardType="email-address"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={email}
                    onChangeText={setEmail}
                />

                <Label>Senha</Label>
                <Input
                    placeholder="Digite aqui sua senha"
                    placeholderTextColor= "#999"
                    keyboardType="email-address"
                    textContentType="password"
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                />

                <Input
                    placeholder="Confirme aqui sua senha"
                    placeholderTextColor= "#999"
                    keyboardType="email-address"
                    textContentType="password"
                    autoCapitalize="words"
                    autoCorrect={false}
                    value={senha}
                    onChangeText={setSenha}
                />
            </Form>

            <Button
                onPress={handleEnviar}
            >
                <ButtonText>Enviar cadastro</ButtonText>
            </Button>
        </Container>

    )
}

export default UserData;