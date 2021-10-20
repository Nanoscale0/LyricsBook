import React from "react";
import { ColorValue, PressableProps, StyleProp, StyleSheet, View, ViewStyle } from "react-native";
import MaterialIcon from "./MaterialIcon";
import RipplePressable from "./RipplePressable";

interface IconButtonProps extends PressableProps {
    icon: string;
    size?: number;
    color?: ColorValue | number;
    style?: StyleProp<ViewStyle>;
    padding?: number;
}

const IconButton = React.forwardRef((props: IconButtonProps, ref: React.Ref<View>) => {
    const { icon, size, color, style, padding, children, ...other } = props;
    const realSize = size ? size : 22;
    
    return (
        <View style={[{
            borderRadius: realSize
        }, styles.container, style]}>
            <RipplePressable
                style={{
                    padding: padding ? padding : 6
                }}
                ref={ref}
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
            </RipplePressable>
        </View>
    );
});

const styles = StyleSheet.create({
    container: {
        overflow: "hidden",
        justifyContent: "center",
        alignItems: "center"
    }
})

export default IconButton;