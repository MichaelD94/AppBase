import React from 'react'
import { View, ActivityIndicator } from "react-native";
import LottieView from 'lottie-react-native';
import milkAnimation from '../../assets/animations/milk.json'


const Loading = () => {
    return(

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            {/* <ActivityIndicator size="large" color="#666" /> */}
            <LottieView source={milkAnimation} autoPlay loop />
        </View>
    )

}

export default Loading