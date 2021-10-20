import React from "react";
import { Pressable, PressableProps, View } from "react-native";

const RipplePressable = React.forwardRef((props: PressableProps, ref: React.Ref<View>) => {
    const { android_ripple, children, ...other } = props;

    return (
        <Pressable
            android_ripple={android_ripple ? android_ripple : { color: "rgba(0, 0, 0, 0.15)" }}
            ref={ref}
            {...other}>
            {children}
        </Pressable>
    );
});

export default RipplePressable;