import { createStackNavigator } from "@react-navigation/stack";
import Landing from './(tabs)/HomeScreen';


const Stack = createStackNavigator();

function HomeScreen() {

    return(
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Landing" component={Landing} options={{headerShown: false}} />
        </Stack.Navigator>
    )
}


export default HomeScreen;