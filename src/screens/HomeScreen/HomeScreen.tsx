import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Library from "./components/Library";
import SearchBar from "./components/SearchBar";
import { RootStackParamList } from "../../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearch, setIsSearch] = useState(false);

    return (
        <View style={styles.homeScreen}>
            <Library
                navigation={navigation}
                searchKeyword={searchKeyword} />
            <SearchBar
                keyword={searchKeyword}
                setKeyword={setSearchKeyword}
                isSearch={isSearch}
                setIsSearch={setIsSearch}
                navigation={navigation} />
        </View>
    );
};

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        backgroundColor: "#ffecd1"
    }
});

export default HomeScreen;