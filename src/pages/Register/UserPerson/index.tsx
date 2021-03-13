import React, { useState } from 'react';
import { Text } from 'react-native';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, CheckView, Title } from './styles';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-community/async-storage';



const UserPerson: React.FC = () => {
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation()
    async function handleContinue() {
        await AsyncStorage.setItem( 'userPerson', 'Fisica');
        navigation.navigate('UserName')
    }
    return  (
        <Container>
            <Header />
            <Title>Voce e uma pessoa fisica ou uma pessoa juridica?</Title>
            <CheckView>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                />
                <Text>Sou pessoa fisica</Text>
            </CheckView>

            <CheckView>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                />
                <Text>Sou pessoa juridica</Text>
            </CheckView>
            <Button
                onPress={handleContinue}
            >
                <ButtonText>Continue</ButtonText>
            </Button>
        </Container>

    )
}

export default UserPerson;