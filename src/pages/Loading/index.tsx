import React from 'react'
import { View, ActivityIndicator } from "react-native";
// import LottieView from 'lottie-react-native';


const Loading = () => {
    return(

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center"}}>
            <ActivityIndicator size="large" color="#666" />
            {/* <LottieView source={require('../../assets/animation/milk.json')} autoPlay loop /> */}
        </View>
    )

}

export default Loading