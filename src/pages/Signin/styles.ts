import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  width: 100%;
  align-items:center;
  background-color: #fff;
`;

export const Footer = styled.SafeAreaView`
  flex: 1;
  height: 20%;
  width: 100%;
  align-items:center;
  background-color: #283F54;
  margin-top: 30px;
  padding-top: 30px;
`;

export const Logo = styled.Image`
  height: 25%;
  width: 50%;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #4289cb;
  margin-bottom: 8px;
  font-size: 20px;
`;

export const Form = styled.View`
  align-self: center;
  margin-top: 5%;
  padding-right: 30px;
  padding-left: 30px;
  width:95%;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  border-color: #ddd;
  padding-right: 20px;
  padding-left: 20px;
  font-size: 16px;
  color:#444;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  width: 300px;
  background-color: #4289cb;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
  align-self: center;
`;

export const ButtonSignUp = styled.TouchableOpacity`
  height: 40px;
  width: 300px;
  background-color: #4289cb;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 15px;
  margin-bottom: 10px;
  align-self: center;
`;

export const ButtonTextSignIn = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const ButtonTextSignUp = styled.Text`
  color: #FFF024;
  font-weight: bold;
  font-size: 16px;
`;

export const WelcomeText = styled.Text`
  color: #85899A;
  font-weight: bold;
  font-size: 22px;
  margin-bottom: 8px;
`;

export const ActionText = styled.Text`
  color: #85899A;
  font-weight: 600;
  font-size: 18px;
  margin-bottom: 8px;
`;

export const ActionTextWhite = styled.Text`
  color: #fff;
  font-weight: 600;
  font-size: 16px;
  margin-bottom: 8px;
`;

export const TouchableText = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  height: 20px;
`;

export const TextBlue = styled.Text`
  margin-top: 5%;
  color: #4289cb;
  font-weight: bold;
  font-size: 16px;
`;
