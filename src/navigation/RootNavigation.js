import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigation from "./BottomTabNavigation";
import DetailsScreen from "../screens/DetailsScreen";




const Stack = createStackNavigator();


const RootNavigation = () => {

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>

            <Stack.Screen name="Bottom Navigation" component={BottomTabNavigation} />
            <Stack.Screen name="DetailsScreen" component={DetailsScreen} />

        </Stack.Navigator>
    );
};


export default RootNavigation;