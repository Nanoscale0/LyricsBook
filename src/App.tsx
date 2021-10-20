/**
 * @format
 */

import { PortalProvider } from '@gorhom/portal';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { StatusBar } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import LyricsScreen from './screens/LyricsScreen';
import OnlineSearchScreen from './screens/OnlineSearchScreen';
import SettingScreen from './screens/SettingScreen';
import { Site } from './values/sites';

const Stack = createNativeStackNavigator<RootStackParamList>();

const App = () => {
    useEffect(() => {
        StatusBar.setTranslucent(true);
        StatusBar.setBackgroundColor("#FFFFFF00")
        StatusBar.setBarStyle("dark-content");
    }, []);

    return (
        <PortalProvider>
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
        </PortalProvider>
    );
};

export type RootStackParamList = {
    Home: undefined;
    Lyrics: {
        item: SearchResultItem | SavedItem;
    },
    OnlineSearch: {
        keyword: string;
        site: Site;
    },
    Setting: undefined;
};

export default App;
