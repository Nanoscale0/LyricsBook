import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
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
        <View
            style={styles.searchBar}>
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
                    <IconButton
                        icon="close"
                        onPress={clearKeyword}
                        style={styles.iconButton} />
                </>
            ) : (
                <>
                    <MaterialIcon
                        name="magnify"
                        style={styles.icon}
                        color="#000"
                        size={24} />
                    <Text style={styles.text}>Search...</Text>
                    <Pressable
                        style={styles.ripple}
                        onPress={() => {setIsSearch(true)}}
                        android_ripple={{color: "rgba(0, 0, 0, 0.1)"}} />
                    <IconButton
                        icon="dots-vertical"
                        style={styles.iconButton}
                        onPress={() => {
                            navigation.navigate("Setting");
                        }} />
                </>
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    searchBar: {
        margin: 15,
        backgroundColor: "#ffd396",
        borderRadius: 8,
        height: 45,
        flexDirection: "row",
        alignItems: "center",
        overflow: "hidden"
    },
    ripple: {
        position: "absolute",
        zIndex: 0,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
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
