import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MaterialIcon from "../../../components/MaterialIcon";
import i18n from "../../../values/i18n";
import { Site } from "../../../values/sites";

interface SearchOnlineBtnProps {
    site: Site,
    searchKeyword: string,
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

const SearchOnlineBtn = ({ site, searchKeyword, navigation }: SearchOnlineBtnProps) => {
    const _onPress = () => {
        navigation.navigate("OnlineSearch", { keyword: searchKeyword });
    }
    
    return (
        <View
            style={styles.btn}>
            <Text style={styles.text}>Search on {i18n.sites[site]}</Text>
            <MaterialIcon
                color="#000"
                name="arrow-right"
                size={24} />
            <Pressable
                style={styles.ripple}
                onPress={_onPress}
                android_ripple={{color: "rgba(0, 0, 0, 0.1)"}} />
        </View>
    );
};

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 15,
        marginVertical: 6,
        backgroundColor: "#FFFFFF",
        borderRadius: 8,
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)",
        paddingVertical: 8,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    ripple: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    text: {
        flex: 1,
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default SearchOnlineBtn;