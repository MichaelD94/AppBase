import React from 'react'
import { useAuth } from "../../contexts/auth"
import Header from '../../components/Header'
import {Container} from "./styles"
import { Text } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Dashboard: React.FC = () => {
    const { user, signed, signOut } = useAuth()
    const {name, email} = user

    console.log(signed)
    console.log(user)

    function handleSignOut() {
        signOut()
    }

    return  (
        <Container>
            <Header />
            <Text>Bem Vindo {name}</Text>
            <Text>Email {email}</Text>
            <TouchableOpacity onPress={handleSignOut}>
                <Text>Continue</Text>
            </TouchableOpacity>
        </Container>
    )
}

export default Dashboard;