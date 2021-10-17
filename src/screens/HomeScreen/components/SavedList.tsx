import { useFocusEffect } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { Alert, FlatList, RefreshControl } from "react-native";
import LyricsItem from "../../../components/LyricsItem";
import LyricsStorage from "../utils/LyricsStorage";
import Fuse from 'fuse.js';
import Heading from "./Heading";
import { siteList } from "../../../values/sites";
import SearchOnlineBtn from "./SearchOnlineBtn";

interface SavedListProps {
    navigation: NativeStackNavigationProp<RootStackParamList, "Home">;
    searchKeyword: string;
}

const SavedList = ({ navigation, searchKeyword }: SavedListProps) => {
    const [data, setData] = useState<SavedList>([]);
    const [searchResults, setSearchResults] = useState<Fuse.FuseResult<SavedItem>[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    
    useFocusEffect(
        React.useCallback(() => {
            refresh();
        }, [])
    );

    useEffect(() => {
        if (searchKeyword) {
            LyricsStorage.search(searchKeyword).then(ret => setSearchResults(ret));
        }
    }, [searchKeyword]);

    const refresh = () => {
        setIsLoading(true);
        LyricsStorage.getArrayList().then(array => {
            setData(array);
            setIsLoading(false);
        });
    }

    const popupRemoveAlert = (id: string) => {
        Alert.alert(
            "Delete",
            "Do you want to delete this item?",
            [
                { text: "Cancel", style: "cancel" },
                { text: "OK", onPress: () => LyricsStorage.remove(id).then(() => refresh()) }
            ]
        );
    };

    return searchKeyword ? (
        <FlatList
            data={searchResults}
            renderItem={({ item }) => (
                <LyricsItem
                    data={item.item.songData}
                    onPress={() => {
                        navigation.navigate("Lyrics", { item: item.item });
                    }} />
            )}
            ListFooterComponent={
                <>
                    {siteList.map(item =>
                        <SearchOnlineBtn
                            site={item}
                            searchKeyword={searchKeyword}
                            navigation={navigation}
                            key={item} />    
                    )}
                </>
            } />
    ) : (
        <FlatList
            data={data}
            renderItem={({ item }) => (
                <LyricsItem
                    data={item.songData}
                    onPress={() => {
                        navigation.navigate("Lyrics", { item: item });
                    }}
                    onLongPress={() => popupRemoveAlert(item.id)} />
            )}
            ListHeaderComponent={
                <Heading title="Saved Lyrics" />
            }
            refreshControl={
                <RefreshControl
                    refreshing={isLoading}
                    onRefresh={refresh} />
            }
            keyExtractor={item => item.id} />
    );
};

export default SavedList;