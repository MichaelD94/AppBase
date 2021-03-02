import styled from "styled-components/native";

export const Container = styled.KeyboardAvoidingView`
  flex: 1;
  justify-content: center;
  align-items:center;
`;

export const Logo = styled.Image`
  height: 10%;
  width: 60%;
`;

export const Label = styled.Text`
  font-weight: bold;
  color: #444;
  margin-bottom: 8px;
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
  height: 40px;
  margin-bottom: 20px;
  border-radius: 20px;  
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  background-color: #4289cb;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;

export const TouchableText = styled.TouchableHighlight`
  justify-content: center;
  align-items: center;
  margin-top: 15%;
  height: 20px;
`;

export const TextBlue = styled.Text`
  margin-top: 5%;
  color: #4289cb;
  font-weight: bold;
  font-size: 16px
`;