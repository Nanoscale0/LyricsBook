import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Card from "./Card";

interface LyricsItemProps {
    data: SongData;
    onPress?: () => void;
    onLongPress?: () => void;
}

const LyricsItem = ({ data, onPress, onLongPress }: LyricsItemProps) => {
    return (
        <Card
            border
            style={styles.lyricsItem}
            onPress={onPress}
            onLongPress={onLongPress}>
            <Image
                style={styles.artwork}
                source={{ uri: data.artwork }} />
            <View style={styles.info}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.artists}>
                    {data.artists}
                    <Text style={styles.album}> - {data.album}</Text>
                </Text>
            </View>
        </Card>
    );
};

const styles = StyleSheet.create({
    lyricsItem: {
        marginHorizontal: 15,
        marginVertical: 6,
        flexDirection: "row"
    },
    artwork: {
        width: 90,
        height: 90,
        margin: 10,
        borderRadius: 8
    },
    info: {
        flex: 1,
        marginVertical: 10,
        marginRight: 10,
        marginLeft: 5
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#000"
    },
    artists: {
        fontSize: 15,
        marginTop: 5,
        color: "#000"
    },
    album: {
        color: "rgba(0,0,0,0.5)"
    }
});

export default LyricsItem;