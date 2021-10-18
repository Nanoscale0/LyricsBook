import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text } from "react-native";
import { RootStackParamList } from "../../../App";
import Card from "../../../components/Card";
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
        navigation.navigate("OnlineSearch", {
            keyword: searchKeyword,
            site: site
        });
    }
    
    return (
        <Card
            border
            style={styles.btn}
            onPress={_onPress}>
            <Text style={styles.text}>Search on {i18n.sites[site]}</Text>
            <MaterialIcon
                color="#000"
                name="arrow-right"
                size={24} />
        </Card>
    );
};

const styles = StyleSheet.create({
    btn: {
        marginHorizontal: 15,
        marginVertical: 6,
        backgroundColor: "#FFFFFF",
        paddingVertical: 8,
        paddingHorizontal: 15,
        flexDirection: "row",
        alignItems: "center"
    },
    text: {
        flex: 1,
        color: "#000000",
        fontSize: 20,
        fontWeight: "bold"
    }
});

export default SearchOnlineBtn;