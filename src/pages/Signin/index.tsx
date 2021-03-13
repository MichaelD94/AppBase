import React, { useState} from 'react'
import { useAuth } from "../../contexts/auth";
import
{
  Container,
  Logo,
  Label,
  Form,
  Input,
  Button,
  ButtonSignUp,
  ButtonTextSignIn,
  ButtonTextSignUp,
  TouchableText,
  TextBlue,
  WelcomeText,
  ActionText,
  ActionTextWhite,
  Footer
} from './styles'
import logo from '../../assets/logo.png'
import { useNavigation } from '@react-navigation/native';


const SignIn: React.FC = () => {
    const [email, setEmail] = useState('');
    const [passWord, setPassWord] = useState('');
    const { signed, user, signIn } = useAuth()
    const navigation = useNavigation()

    console.log(signed)
    console.log(user)

    function handleSignIn() {
       signIn()
    }

    function handleSignUp() {
      navigation.navigate('Contract')
   }

    return  (
      <Container>
        <Logo source={logo} resizeMode='contain' />
        <WelcomeText>Bem vindo</WelcomeText>
        <ActionText>Faça login e acesse o mercado leiteiro</ActionText>
        <Form>
          <Label>Email ou CPF</Label>
          <Input
            placeholder="Digite aqui seu e-mail ou CPF"
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

        <Button onPress={handleSignIn} >
          <ButtonTextSignIn >Entrar no Milk Link</ButtonTextSignIn>
        </Button>

        </Form>
        <TouchableText
          activeOpacity={0.5}
          underlayColor={'#fff'}
          onPress={() => (null)}
        >
          <TextBlue>Esqueci a minha senha</TextBlue>
        </TouchableText>
        <Footer>
          <ActionTextWhite>Ainda Não participa do mercado leiteiro?</ActionTextWhite>
            <ButtonSignUp onPress={handleSignUp} >
              <ButtonTextSignUp >Crie já sua conta</ButtonTextSignUp>
            </ButtonSignUp>
        </Footer>
    </Container>
  )
}

export default SignIn;