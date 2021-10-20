import React from "react";
import { StyleProp, StyleSheet, Text, View, ViewStyle } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import IconButton from "./IconButton";

interface HeaderProps {
    title: string;
    back?: () => void;
    style?: StyleProp<ViewStyle>;
}

const Header = ({ title, back, style }: HeaderProps) => {
    const insets = useSafeAreaInsets();

    return (
        <View style={[styles.header, {
            paddingTop: insets.top + 15
        }, style]}>
            {back ?
                <IconButton
                    icon="arrow-left"
                    size={26}
                    style={styles.back}
                    onPress={back} />
            : null}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingBottom: 15,
        alignItems: "flex-start"
    },
    title: {
        flex: 1,
        fontSize: 26,
        fontWeight: "bold",
        color: "#000000",
        marginTop: 2
    },
    back: {
        marginRight: 8
    }
});

export default Header;