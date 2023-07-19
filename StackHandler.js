import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
// import Home from './Home';
// import Signin from './SignIn';
import Register from './Register';
//import Welcome from './Welcome';

const screens = {
    // // Welcome:{
    // //     screen: Welcome 
    // // },
    // Home:{
    //     screen: Home
    // },
    // Signin:{
    //     screen: Signin
    // },
    Register:{
        screen: Register
    }
}

const StackHandler = createStackNavigator(screens);


export default createAppContainer(StackHandler);