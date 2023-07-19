import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image } from 'react-native';

export default class Home extends React.Component {
    render() {
        return (
        <View>

            <View style={{ alignContent: "center", padding: 10, backgroundColor: "green" }}>
                <Text style={{
                    fontSize: 25,
                    textAlign: "center",
                    color: "white",
                    fontWeight: "bold",
                    marginTop: 10
                }}>
                    FOOD AND DRINKS
                        </Text>

            </View>
            <ScrollView style={{ flexDirection: "column" }}>
                <View style={styles.spaceStores}>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={require('.assets/chicken.jpg')} style={styles.menuItem}/>
                            <Text>Spicy Chicken</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={require('assets/friedRice.jpg')} style={styles.menuItem}/>
                            <Text>Fried Rice</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.spaceStores}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={require('.assets/iceCream.jpg')} style={styles.menuItem}/>
                            <Text>Ice Cream</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={('.assets/pizza.jpg')} style={styles.menuItem}/>
                            <Text>Pizza</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    spaceStores: {
        marginTop: 25,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    menuItem:{
        width: '33.3333%',
        height:'50%',
        padding:20
    }
});