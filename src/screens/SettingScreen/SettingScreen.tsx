import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../../App";
import Header from "../../components/Header";
import RipplePressable from "../../components/RipplePressable";
import LyricsStorage from "../HomeScreen/utils/LyricsStorage";

type SettingScreenProps = NativeStackScreenProps<RootStackParamList, "Setting">;

const SettingScreen = ({ navigation }: SettingScreenProps) => {
    return (
        <View>
            <Header
                back={navigation.goBack}
                title="Settings" />
            <RipplePressable
                onPress={() => {
                    LyricsStorage.export();
                }}>
                <Text style={styles.text}>Export Lyrics</Text>
            </RipplePressable>
            <RipplePressable
                onPress={() => {
                    LyricsStorage.import();
                }}>
                <Text style={styles.text}>Import Lyrics</Text>
            </RipplePressable>
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