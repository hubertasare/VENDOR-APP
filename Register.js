import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, FlatList } from 'react-native';

export default class Register extends React.Component {
    state={
            name:"",email:"", password:"",confirmpassword:"", telephone:"",
            country:"",region:"",city:"",stAddress:"",HseNo:"",
            By : false
            }
            onChange = e=>{
              this.setState({By: e.target.checked});
            }
          
            render(){
                const {By} = this.state;
             return (
               <ScrollView>
             <View style={styles.container}>
             <Text style={styles.logo}>VENDOR CENTER</Text>
             <Text style={{fontSize:23,color:"green",marginBottom:20,textAlign:"center"}}>Create an account to start buying</Text>
             <View style={styles.inputView} >
             <TextInput  
             style={styles.inputText}
             placeholder="Full Name" 
             placeholderTextColor="white"
            onChangeText={text => this.setState({name:text})}/>
            </View>
            <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Email Address" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({email:text})}/>
            </View>
            <View style={styles.inputView} >
            <TextInput  
            style={styles.inputText}
            placeholder="Telephone" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({telephone:text})}/>
            </View> 
            <View style={styles.inputView} > 
            <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Password" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({password:text})}/>
            </View> 
            <View style={styles.inputView} > 
            <TextInput  
            secureTextEntry
            style={styles.inputText}
            placeholder="Confirm Password" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({confirmpassword:text})}/>
            </View> 
            <View style={styles.inputView} > 
            <TextInput  
            style={styles.inputText}
            placeholder="Country" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({country:text})}/>
            </View> 
            <View style={styles.inputView} > 
            <TextInput  
            style={styles.inputText}
            placeholder="Region/state" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({region:text})}/>
             </View> 
            <View style={styles.inputView} > 
            <TextInput  
            style={styles.inputText}
            placeholder="City" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({city:text})}/>
             </View> 
            <View style={styles.inputView} > 
             <TextInput  
            style={styles.inputText}
            placeholder="Street Address" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({stAddress:text})}/>
            </View>
            <View style={styles.inputView} > 
            <TextInput  
            style={styles.inputText}
            placeholder="House Number" 
            placeholderTextColor="white"
            onChangeText={text => this.setState({HseNo:text})}/>
             </View>

        <View style= {{flexDirection:"row",alignContent:"center",justifyContent:"space-between" }}>
        <input type="checkbox" checked = {By} onChange={this.onChange}/>
        By clicking Create Account, you have read and agreed with the terms and Privacy Policy
        </View>
         <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.loginText}>Create an Account</Text>
        </TouchableOpacity>
        <View style={{flexDirection:"row",color:"green"}}>
          <Text style={styles.forgot}>Already Have an Account?</Text>
          <TouchableOpacity style={{marginLeft:10,fontWeight:"bold"}}>Sign In</TouchableOpacity>
          </View>

         </View> 
         </ScrollView>
         );
     }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
    },
    logo:{textAlign:"center",
      fontWeight:"bold",
      fontSize:50,
      color:"green",
      marginBottom:40
    },
    inputView:{
      width:"80%",
      backgroundColor:"green",
      borderRadius:30,
      height:50,
      marginBottom:20,
      justifyContent:"center",
      padding:20
    },
    inputText:{
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
    loginText:{
      color:"white"
    }
    });