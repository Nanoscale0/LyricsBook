import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import { RootStackParamList } from "../../App";
import Header from "../../components/Header";
import LyricsItem from "../../components/LyricsItem";
import i18n from "../../values/i18n";
import fetchSearchResults from "../HomeScreen/utils/fetchSearchResults";

type OnlineSearchScreenProps = NativeStackScreenProps<RootStackParamList, "OnlineSearch">;

const OnlineSearchScreen = ({ route, navigation }: OnlineSearchScreenProps) => {
    const [searchResults, setSearchResults] = useState<SearchResult>([]);
    
    const { keyword, site } = route.params;
    useEffect(() => {
        fetchSearchResults(keyword, site).then(
            results => setSearchResults(results)
        ).catch(err => {
            console.error(err);
        })
    }, [keyword]);

    return (
        <View style={styles.screen}>
            <Header
                back={navigation.goBack}
                title={`Search "${keyword}" in ${i18n.sites[site]}`} />
            <FlatList
                data={searchResults}
                style={styles.list}
                renderItem={({ item }) => (
                    <LyricsItem
                        data={item.songData}
                        onPress={() => {
                            navigation.navigate("Lyrics", { item: item });
                        }} />
                )}
                keyExtractor={item => item.url} />
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    list: {
        flex: 1
    }
});

export default OnlineSearchScreen;