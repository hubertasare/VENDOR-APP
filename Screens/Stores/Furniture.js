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
                    THE FURNITURE SHOP
                        </Text>

            </View>
            <ScrollView style={{ flexDirection: "column" }}>
                <View style={styles.spaceStores}>

                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <MaterialIcons name="local-grocery-store" size={150} color="green" />
                            <Text>Beds</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <MaterialIcons name="local-grocery-store" size={150} color="green" />
                            <Text>Utensils</Text>
                        </View>
                    </TouchableOpacity>

                </View>
                <View style={styles.spaceStores}>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <MaterialIcons name="local-grocery-store" size={150} color="green" />
                            <Text>Wardrobe</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <View style={{ flexDirection: "column", alignItems: "center" }}>
                            <MaterialIcons name="local-grocery-store" size={150} color="green" />
                            <Text>Tables and Chairs</Text>
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