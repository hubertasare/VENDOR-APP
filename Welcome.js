import React,{Component} from 'react';
import {View,Text,ActivityIndicator} from 'react-native';
import Home from './Home';


const WelcomeScreen = () => {
    componentDidMount()
        setTimeout(() => {
            this.state.navigation.navigate(Home)
        }, 3000);

        return( 
            <View style={{flex: 1, backgroundColor: '#fff', alignItems: 'center', justifyContent: 'center',}}>
                <Text style={{fontWeight: "bold",color: "green"}}>Welcome to VenDa</Text>
                <Text style={{fontWeight: "bold",color: "green", fontSize:14,fontStyle:"italic"}}>
                        Feel Free As You Buy And Sell
                </Text>
                <ActivityIndicator size="large" color="green"/>
            </View>
        )
    
}
export default WelcomeScreen;