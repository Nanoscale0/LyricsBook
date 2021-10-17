import React, { ReactNode } from "react";
import { Pressable, StyleProp, StyleSheet, View, ViewStyle } from "react-native";

interface CardProps {
    border?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    overlay?: ReactNode;
    onPress?: () => void;
    onLongPress?: () => void;
    style?: StyleProp<ViewStyle>
}

const Card = ({ border, disabled, children, overlay, onPress, onLongPress, style }: CardProps) => {
    return (
        <View
            style={[
                styles.container,
                border? styles.containerBorder : undefined,
                style
            ]}>
            {children}
            <Pressable
                disabled={disabled}
                style={styles.ripple}
                onPress={onPress}
                onLongPress={onLongPress}
                android_ripple={{color: "rgba(0, 0, 0, 0.1)"}} />
            {overlay}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        overflow: "hidden",
        backgroundColor: "#FFFFFF"
    },
    containerBorder: {
        borderWidth: 0.5,
        borderColor: "rgba(0, 0, 0, 0.1)"
    },
    ripple: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
});

export default Card;