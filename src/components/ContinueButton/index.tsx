import React from 'react';
import { Container, Button, ButtonText } from './styles';

const ContinueButton: React.FC = ({ onPress }) => {

    return(
        <Container>
            <Button
                onPress={onPress}
            >
                <ButtonText>Continue</ButtonText>
            </Button>
        </Container>
  );
}

export default ContinueButton;