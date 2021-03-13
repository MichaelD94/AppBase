import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Signin from '../pages/Signin';
import Contract from '../pages/Register/Contract';
import UserType from '../pages/Register/UserType';
import UserPerson from '../pages/Register/UserPerson';
import UserName from '../pages/Register/UserName';
import UserCPF from '../pages/Register/UserCPF';
import UserEmail from '../pages/Register/UserEmail';
import UserPassWord from '../pages/Register/UserPassWord';
import UserData from '../pages/Register/UserData';
import RegisterSuccess from '../pages/Register/RegisterSuccess';

const AuthStack = createStackNavigator();

const AuthRoutes: React.FC = () =>(
    <AuthStack.Navigator
        screenOptions={{
            headerShown: false
        }}
    >
        <AuthStack.Screen name='SignIn' component={Signin} />
        <AuthStack.Screen name='Contract' component={Contract} />
        <AuthStack.Screen name='UserType' component={UserType} />
        <AuthStack.Screen name='UserPerson' component={UserPerson} />
        <AuthStack.Screen name='UserName' component={UserName} />
        <AuthStack.Screen name='UserCPF' component={UserCPF} />
        <AuthStack.Screen name='UserEmail' component={UserEmail} />
        <AuthStack.Screen name='UserPassWord' component={UserPassWord} />
        <AuthStack.Screen name='UserData' component={UserData} />
        <AuthStack.Screen name='RegisterSuccess' component={RegisterSuccess} />
    </AuthStack.Navigator>
);

export default AuthRoutes;