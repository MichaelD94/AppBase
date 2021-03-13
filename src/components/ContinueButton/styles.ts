import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #fff;
  height: 65px;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
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

export const ButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 16px;
`;