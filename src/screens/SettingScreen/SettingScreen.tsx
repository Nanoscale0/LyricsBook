import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import Header from "../../components/Header";
import LyricsStorage from "../HomeScreen/utils/LyricsStorage";

type SettingScreenProps = NativeStackScreenProps<RootStackParamList, "Setting">;

const SettingScreen = ({ navigation }: SettingScreenProps) => {
    return (
        <View>
            <Header
                back={navigation.goBack}
                title="Settings" />
            <Pressable
                onPress={() => {
                    LyricsStorage.export();
                }}
                android_ripple={{color: "rgba(0, 0, 0, 0.1)"}}>
                <Text style={styles.text}>Export Lyrics</Text>
            </Pressable>
            <Pressable
                onPress={() => {
                    LyricsStorage.import();
                }}
                android_ripple={{color: "rgba(0, 0, 0, 0.1)"}}>
                <Text style={styles.text}>Import Lyrics</Text>
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    text: {
        color: "#000000",
        padding: 15
    }
});

export default SettingScreen;