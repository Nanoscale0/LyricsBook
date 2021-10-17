/**
 * @format
 */

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';

import HomeScreen from './screens/HomeScreen';
import LyricsScreen from './screens/LyricsScreen';
import OnlineSearchScreen from './screens/OnlineSearchScreen';
import SettingScreen from './screens/SettingScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="Lyrics"
                    component={LyricsScreen}
                    options={{
                        headerShown: false
                    }} />
                <Stack.Screen
                    name="OnlineSearch"
                    component={OnlineSearchScreen}
                    options={{
                        headerShown: false,
                        animation: "slide_from_right"
                    }} />
                <Stack.Screen
                    name="Setting"
                    component={SettingScreen}
                    options={{
                        headerShown: false,
                        animation: "fade_from_bottom"
                    }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default App;
