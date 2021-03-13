import React, { useState } from 'react';
import { Text, TextInput, View } from 'react-native';

import Header from '../../../components/Header'
import { Button, Container, ButtonText, CheckView, Input } from './styles';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';


const Contract: React.FC = () => {
    const contractFile = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Arcu risus quis varius quam quisque id diam. Aliquet lectus proin nibh nisl condimentum id venenatis a. Tristique risus nec feugiat in fermentum posuere urna nec tincidunt. Platea dictumst vestibulum rhoncus est. Dignissim suspendisse in est ante in nibh. Maecenas ultricies mi eget mauris pharetra et ultrices neque. A lacus vestibulum sed arcu. Ipsum suspendisse ultrices gravida dictum fusce ut. Quisque id diam vel quam elementum pulvinar etiam non. Amet facilisis magna etiam tempor orci eu lobortis elementum."
    const [toggleCheckBox, setToggleCheckBox] = useState(false)
    const navigation = useNavigation()
    function handleContinue() {
        navigation.navigate('UserType')
    }
    return  (
        <Container>
            <Header />
            <Input
                editable = {false}
                multiline = {true}
                value={contractFile}
            />
            <CheckView>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                />
                <Text>Li e aceito os termos de contrato</Text>
            </CheckView>
            <Button
                onPress={handleContinue}
            >
                <ButtonText>Continue</ButtonText>
            </Button>
        </Container>

    )
}

export default Contract;