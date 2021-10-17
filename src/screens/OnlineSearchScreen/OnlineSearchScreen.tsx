import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { FlatList, View } from "react-native";
import LyricsItem from "../../components/LyricsItem";
import fetchSearchResults from "../HomeScreen/utils/fetchSearchResults";

type OnlineSearchScreenProps = NativeStackScreenProps<RootStackParamList, "OnlineSearch">;

const OnlineSearchScreen = ({ route, navigation }: OnlineSearchScreenProps) => {
    const [searchResults, setSearchResults] = useState<SearchResult>([]);
    
    const { keyword } = route.params;
    useEffect(() => {
        fetchSearchResults(keyword).then(
            results => setSearchResults(results)
        ).catch(err => {
            console.error(err);
        })
    }, [keyword]);

    return (
        <View>
            <FlatList
                data={searchResults}
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

export default OnlineSearchScreen;