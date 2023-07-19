import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
export default class Home extends React.Component {
    state = {
        currentState: ""

    }

    render() {
        return (
            <ScrollView>
                <View
                // style={StyleSheet.container}
                >

                    <View style={{ alignContent: "center", padding: 20, backgroundColor: "green" }}>
                        <View style={{ flexDirection: "row" }}>
                            <TouchableOpacity
                            ><Octicons name="three-bars" size={20} color="white" />
                            </TouchableOpacity>
                        </View>
                        <Text style={{
                            fontSize: 45,
                            textAlign: "center",
                            color: "white",
                            fontWeight: "bold",
                            marginTop: 10
                        }}>
                            VenDa
                        </Text>
                    </View>
                    <View style={styles.inputView}>
                        <TextInput
                            style={{ textAlign: "justify" }}
                            placeholder={"what are you looking for?"}
                            placeholderTextColor="white"
                            onChangeText={text => this.setState({ currentState: text })}
                        />
                        <TouchableOpacity>
                            <AntDesign name="search1" size={20} color="white" style={{ marginLeft: 30 }} />
                        </TouchableOpacity>
                    </View>
                    <ScrollView style={{ flexDirection: "column" }}>
                        <View style={styles.spaceStores}>

                            <TouchableOpacity>
                                <View style={{ flexDirection: "column", alignItems: "center" }}>
                                    <MaterialIcons name="local-grocery-store" size={150} color="green" />
                                    <Text>Food and Drinks</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ flexDirection: "column", alignItems: "center" }}>
                                    <MaterialIcons name="local-grocery-store" size={150} color="green" />
                                    <Text>Electronics</Text>
                                </View>
                            </TouchableOpacity>

                        </View>
                        <View style={styles.spaceStores}>
                            <TouchableOpacity>
                                <View style={{ flexDirection: "column", alignItems: "center" }}>
                                    <MaterialIcons name="local-grocery-store" size={150} color="green" />
                                    <Text>Furniture</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity>
                                <View style={{ flexDirection: "column", alignItems: "center" }}>
                                    <MaterialIcons name="local-grocery-store" size={150} color="green" />
                                    <Text>Fashion</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>

        );
    }
}

const styles = StyleSheet.create({

    inputView: {
        flex: 1,
        flexDirection: "row",
        width: "80%",
        backgroundColor: "green",
        borderRadius: 25,
        textAlign: "center",
        justifyContent: "center",
        alignSelf: "center",
        marginTop: 10,
        padding: 10
    },
    inputText: {
        height: 50,
        color: "white",
        fontSize: 15

    },
    spaceStores: {
        marginTop: 25,
        marginLeft: 20,
        flexDirection: 'row',
        justifyContent: "space-evenly"
    }
});