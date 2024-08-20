import React from "react";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import HomeScreen  from "../screens/HomeScreen";
import WatchListScreen from "../screens/WatchListSreen";
import {FontAwesomeIcon} from "@fortawesome/react-native-fontawesome";
import {faHouse , faList } from "@fortawesome/free-solid-svg-icons";




const Tab = createBottomTabNavigator();

const screenOptions = {
    tabBarShowLabel: false,
    tabBarHideOnKeyboard: true,
    headerShown: false,
    tabBarStyle: {
        //position: "absolute",
        bottom: 0,
        right: 0,
        left: 0,
        elevation: 0,
        height: 50
    }
}


const BottomTabNavigation = () => {

    return (
        <Tab.Navigator screenOptions={screenOptions}>

            <Tab.Screen name="Home" component={HomeScreen} options={{tabBarIcon: ({focused}) => {
                return <FontAwesomeIcon icon={faHouse} size={24}
                                        color={focused ? "#2979F2" : "#C1C0C8"}/>
            }}}/>

            <Tab.Screen name="WatchList" component={WatchListScreen} options={{tabBarIcon: ({focused}) => {
                return <FontAwesomeIcon icon= {faList} size={24}
                                        color={focused ? "#2979F2" : "#C1C0C8"}/>
            }}}/>
        </Tab.Navigator>
    );
};

export default BottomTabNavigation;