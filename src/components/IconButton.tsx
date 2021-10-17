import React from "react";
import { ColorValue, Pressable, PressableProps, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import MaterialIcon from "./MaterialIcon";

interface IconButtonProps extends PressableProps {
    icon: string;
    size?: number;
    color?: ColorValue | number;
    style?: StyleProp<ViewStyle>;
    padding?: number;
}

const IconButton = ({ icon, size, color, style, padding, children, ...other }: IconButtonProps) => {
    const realSize = size ? size : 22;
    
    return (
        <View style={[{
            borderRadius: realSize
        }, styles.container, style]}>
            <Pressable
                android_ripple={{color: "rgba(0, 0, 0, 0.2)"}}
                style={{
                    padding: padding ? padding : 6
                }}
                {...other}>
                <MaterialIcon
                    name={icon}
                    size={realSize}
                    style={{
                        width: realSize,
                        height: realSize
                    }}
                    color={color ? color : "#000000"} />
                {children}
            </Pressable>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default IconButton;