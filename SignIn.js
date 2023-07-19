import React from 'react';
import {StyleSheet,Text, View, TextInput,TouchableOpacity, Button,ScrollView} from 'react-native';

    
    export default class Signin extends React.Component{
        state={
          email:"",
          password:""
        }
        // const presshandler = () => {
            //     navigation.navigate('Register');
            //   }

   
        render(){ 
        return (
            <ScrollView>
          <View style={styles.container}>
            <View style={{backgroundColor:"green",padding:10,borderRadius:10,marginBottom:30,textAlign:"center"}}>
            <Text style={styles.logo}>VENDOR CENTER</Text>
            </View>
            <View>
            <Text style={{fontSize:22,color:"green",marginBottom:20,textAlign:"center"}}>
              Manage your Account, stores, products and others
            </Text>
            </View>
            <View style={styles.inputView} >
              <TextInput  
                style={styles.inputtext}
                placeholder="Email" 
                placeholderTextColor="white"
                />
            </View>
            <View style={styles.inputView} >
              <TextInput  
                secureTextEntry
                style={styles.inputtext}
                placeholder="Password" 
                placeholderTextColor="white"
                />
            </View>
            <TouchableOpacity>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.loginBtn}>
              <Text style={styles.logintext}>Sign In</Text>
            </TouchableOpacity>
            <Text style={{fontSize:18,color:"green"}}>Not a member yet?</Text>
            {/* <Text style={{fontSize:18,color:"green"}}>Go to Register Tab</Text> */}
            <View style={{
              width:"50%",
              borderRadius:25,
              height:50,
              alignItems:"center",
              justifyContent:"center",
              marginTop:30,
            }}>
            <Button title="Register" color="green"
            //  onPress={presshandler}
             />
            </View>
          </View>
          </ScrollView>
        );
}}
const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center'
    },
    logo:{
      fontWeight:"bold",
      fontSize:50,
      color:"white"
    },
    inputView:{
      width:"90%",
      backgroundColor:"green",
      borderRadius:30,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputtext:{
      height:50,
      color:"white"
    },
    loginBtn:{
      width:"80%",
      backgroundColor:"green",
      borderRadius:25,
      height:50,
      alignItems:"center",
      justifyContent:"center",
      marginTop:30,
      marginBottom:5
    },
    logintext:{
      color:"white"
    },
    forgot:{
      color:"green"
    }
    });