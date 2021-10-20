import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import fetchLyrics from "../HomeScreen/utils/fetchLyrics";
import LyricsStorage from "../HomeScreen/utils/LyricsStorage";
import "react-native-get-random-values";
import { nanoid } from "nanoid";
import { RootStackParamList } from "../../App";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type LyricsScreenProps = NativeStackScreenProps<RootStackParamList, "Lyrics">;

const LyricsScreen = ({ route, navigation }: LyricsScreenProps) => {
    const [lyricsText, setLyricsText] = useState("Loading...");
    const { item } = route.params;

    const insets = useSafeAreaInsets();
    
    useEffect(() => {
        if ((item as any).url) {
            const searchResultItem = item as SearchResultItem;
            fetchLyrics(searchResultItem.url, searchResultItem.site).then(lyrics => {
                setLyricsText(lyrics);
                const id = nanoid();
                const savedItem: SavedItem = {
                    id,
                    songData: item.songData,
                    lyricsText: lyrics
                };
                LyricsStorage.add(savedItem);
            });
        } else {
            const savedItem = item as SavedItem;
            setLyricsText(savedItem.lyricsText);
        }

    }, [item]);
    
    return (
        <View>
            <ScrollView>
                <Text style={[styles.lyricsText, {
                    marginTop: insets.top + 20
                }]}>
                    {lyricsText}
                </Text>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    lyricsText: {
        marginHorizontal: 20,
        marginBottom: 20,
        fontSize: 24,
        fontWeight: "bold",
        color: "#000",
        lineHeight: 34
    }
});

export default LyricsScreen;