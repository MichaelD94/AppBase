import React, { useState} from 'react'
import { useAuth } from "../../contexts/auth";
import { Container, Logo, Label, Form, Input, Button, ButtonText, TouchableText, TextBlue} from './styles'
import logo from '../../assets/logo.svg'



const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const { signed, user, signIn } = useAuth()

    console.log(signed)
    console.log(user)

    function handleSignin() {        
       signIn()
    }

    return  (
        <Container behavior="padding" >
        <Logo source={logo} resizeMode='contain' />
        <Form>
          <Label>Email</Label>
          <Input            
            placeholder="Seu e-mail"
            placeholderTextColor= "#999"
            keyboardType="email-address"
            autoCapitalize="none"
            autoCorrect={false}
            value={email}
            onChangeText={setEmail}
          />

          <Label>Senha</Label>
          <Input            
            placeholder="Sua Senha"
            placeholderTextColor= "#999"
            autoCapitalize="none"
            autoCorrect={false}
            textContentType="password"
            secureTextEntry
            value={passWord}
            onChangeText={setPassWord}                                              
          />

          <Button onPress={handleSignin} >
            <ButtonText >Entrar</ButtonText>
          </Button>

        </Form>
        <TouchableText
          activeOpacity={0.5}
          underlayColor={'#fff'}
          onPress={() => (null)}
        >
          <TextBlue>Esqueci a senha</TextBlue>
        </TouchableText>       
      </Container>
    )      
}

export default SignIn;