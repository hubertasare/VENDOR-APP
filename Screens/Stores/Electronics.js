import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,Image } from 'react-native';
import iphoneX from '.assets/iphoneX.jpg';
import iron from '.assets/iron.jpg';
import musicbox from '.assets/musicbox.jpg';
import laptop from '.assets/laptop.jpg';
import fridge from '.assets/fridge.jpg';
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
                    ELECTRONICS SHOP
                        </Text>

            </View>
            <ScrollView style={{ flexDirection: "column" }}>
                <View style={styles.spaceStores}>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={iphoneX}  size={150}/>
                            <Text>Iphone X</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={laptop} size={150}/>
                            <Text>Hp Pavilion 15</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.spaceStores}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={musicbox} size={150}/>
                            <Text>Bluetooth Speakers</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={fridge} size={150}/>
                            <Text>Nasco 220 LTRS double</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.spaceStores}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <Image source={iron} size={150}/>
                            <Text>Westpool Electric Dry Iron</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <MaterialIcons name="local-grocery-store" size={150} color="green" />
                            <Text>Water Heater</Text>
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
    }
});