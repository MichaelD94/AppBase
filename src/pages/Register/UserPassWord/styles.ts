import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  flex: 1;
  height: 100%;
  width: 100%;
  align-items:center;
  justify-content: space-between;
  background-color: #fff;
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

export const Title = styled.Text`
  color: #283F54;
  font-weight: bold;
  font-size: 32px;
`;

export const Button = styled.TouchableOpacity`
  height: 60px;
  width: 350px;
  background-color: #4289cb;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  margin-bottom: 30px;
  align-self: center;
`;

export const ButtonText = styled.Text`
  color: #E5E5E5;
  font-weight: bold;
  font-size: 24px;
`;