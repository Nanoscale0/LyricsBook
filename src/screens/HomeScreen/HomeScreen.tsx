import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import SearchBar from "./components/SearchBar";
import SavedList from "./components/SavedList";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

const HomeScreen = ({ route, navigation }: HomeScreenProps) => {
    const [searchKeyword, setSearchKeyword] = useState("");
    const [isSearch, setIsSearch] = useState(false);

    return (
        <View style={styles.homeScreen}>
            <SearchBar
                keyword={searchKeyword}
                setKeyword={setSearchKeyword}
                isSearch={isSearch}
                setIsSearch={setIsSearch}
                navigation={navigation} />
            <SavedList
                navigation={navigation}
                searchKeyword={searchKeyword} />
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