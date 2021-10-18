import React from "react";
import { StyleSheet, Text, View } from "react-native";
import IconButton from "./IconButton";

interface HeaderProps {
    title: string;
    back?: () => void;
}

const Header = ({ title, back }: HeaderProps) => {
    return (
        <View style={styles.header}>
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
        margin: 15,
        alignItems: "flex-start"
    },
    title: {
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