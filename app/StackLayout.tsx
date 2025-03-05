import { createStackNavigator } from "@react-navigation/stack";
import Landing from './(tabs)/Landing';
import Register from './(tabs)/Register'
import Login from './(tabs)/Login'


const Stack = createStackNavigator();

function LandingScreen() {

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
            <Stack.Screen name="Register" component={Register} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


export default LandingScreen;