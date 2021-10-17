import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Card from "../../../components/Card";
import IconButton from "../../../components/IconButton";
import MaterialIcon from "../../../components/MaterialIcon";
import SystemBack from "../../../components/SystemBack";

interface SearchBarProps {
    keyword: string;
    setKeyword: (text: string) => void;
    isSearch: boolean;
    setIsSearch: (value: boolean) => void;
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
}

const SearchBar = ({ keyword, setKeyword, isSearch, setIsSearch, navigation }: SearchBarProps) => {
    const _onBlur = () => {
        if (keyword === "") {
            setIsSearch(false);
        }
    };

    const clearKeyword = () => {
        setKeyword("");
        setIsSearch(false);
    };

    return (
        <Card
            onPress={() => {setIsSearch(true)}}
            disabled={isSearch}
            style={styles.searchBar}
            overlay={isSearch? (
                <IconButton
                    icon="close"
                    onPress={clearKeyword}
                    style={styles.iconButton} />
            ) : (
                <IconButton
                    icon="dots-vertical"
                    style={styles.iconButton}
                    onPress={() => {
                        navigation.navigate("Setting");
                    }} />
            )}>
            {isSearch ? (
                <>
                    <SystemBack
                        onBack={clearKeyword} />
                    <TextInput
                        style={styles.textInput}
                        value={keyword}
                        autoFocus
                        onBlur={_onBlur}
                        onChangeText={setKeyword} />
                </>
            ) : (
                <>
                    <MaterialIcon
                        name="magnify"
                        style={styles.icon}
                        color="#000"
                        size={24} />
                    <Text style={styles.text}>Search...</Text>
                </>
            )}
        </Card>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        margin: 15,
        backgroundColor: "#ffd396",
        height: 45,
        flexDirection: "row",
        alignItems: "center",
    },
    icon: {
        marginLeft: 12,
        marginRight: 8
    },
    iconButton: {
        marginRight: 5
    },
    text: {
        flex: 1,
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
    },
    textInput: {
        flex: 1,
        padding: 0,
        fontSize: 20,
        fontWeight: "bold",
        color: "#000000",
        marginLeft: 12
    }
});

export default SearchBar;
