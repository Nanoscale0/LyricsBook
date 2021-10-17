import React from "react"
import { StyleSheet, Text } from "react-native";

interface HeadingProps {
    title: string;
}

const Heading = ({ title }: HeadingProps) => {
    return (
        <Text style={styles.heading}>{title}</Text>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        marginHorizontal: 20,
        marginVertical: 10,
        color: "#000"
    }
})

export default Heading;