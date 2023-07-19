import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, } from 'react-native';
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
                        FASHION SHOP
                        </Text>

                </View>
                <ScrollView style={{ flexDirection: "column" }}>
                    <View style={styles.spaceStores}>

                        <TouchableOpacity>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <MaterialIcons name="local-grocery-store" size={150}/>
                                <Text>Men's T-Shirt</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <MaterialIcons name="local-grocery-store" size={150}/>
                                <Text>Black Pant</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                    <View style={styles.spaceStores}>

                        <TouchableOpacity>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <MaterialIcons name="local-grocery-store" size={150} />
                                <Text>Air Force 1</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={{ flexDirection: "column", alignItems: "center" }}>
                                <Image name="local-grocery-store" size={150}/>
                                <Text>Sexy Lace Bikini</Text>
                            </View>
                        </TouchableOpacity>

                    </View>
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{flex:1,
        height:'100%',
        width:'100%'

    },
    spaceStores: {
        marginTop: 25,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    },
    header:{
        color:'#fff',
        fontSize:28,
        borderColor:'#fff',
        borderWidth:2,
        padding:20,
        paddingLeft:40,
        paddingRight:40,
        backgroundColor:'rgba(255,255,255, .1)'
    },
    OverlayContainer:{
        flex:1,
        backgroundColor:'rgba(47,163,218, .4)'
    }
});