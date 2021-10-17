import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

interface LyricsItemProps {
    data: SongData;
    onPress?: () => void;
    onLongPress?: () => void;
}

const LyricsItem = ({ data, onPress, onLongPress }: LyricsItemProps) => {
    return (
        <View
            style={styles.lyricsItem}>
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
            <Pressable
                style={styles.ripple}
                onPress={onPress}
                onLongPress={onLongPress}
                android_ripple={{color: "rgba(0, 0, 0, 0.1)"}} />
        </View>
    );
};

const styles = StyleSheet.create({
    lyricsItem: {
        marginHorizontal: 15,
        marginVertical: 6,
        flexDirection: "row",
        backgroundColor: "#FFF",
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)",
        borderRadius: 8,
        overflow: "hidden"
    },
    ripple: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
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