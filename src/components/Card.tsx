import React, { ReactNode } from "react";
import { LayoutChangeEvent, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import RipplePressable from "./RipplePressable";

interface CardProps {
    border?: boolean;
    disabled?: boolean;
    children?: ReactNode;
    overlay?: ReactNode;
    onPress?: () => void;
    onLongPress?: () => void;
    style?: StyleProp<ViewStyle>;
    onLayout?: ((event: LayoutChangeEvent) => void);
    pointerEvents?: "auto" | "none" | "box-none" | "box-only";
}

const Card = React.forwardRef((props: CardProps, ref: React.Ref<View>) => {
    const { border, disabled, children, overlay, onPress, onLongPress, onLayout, pointerEvents, style } = props;
    
    return (
        <View
            style={[
                styles.container,
                border? styles.containerBorder : undefined,
                style
            ]}
            ref={ref}
            onLayout={onLayout}
            pointerEvents={pointerEvents}>
            {children}
            {onPress ?
                <RipplePressable
                    disabled={disabled}
                    style={styles.ripple}
                    onPress={onPress}
                    onLongPress={onLongPress} />
            : null}
            {overlay}
        </View>
    );
});

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