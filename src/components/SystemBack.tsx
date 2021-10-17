import { useFocusEffect } from "@react-navigation/core";
import React from "react";
import { BackHandler } from "react-native";

interface SystemBackProps {
    onBack: () => void;
    preventDefault?: boolean;
}

const SystemBack = ({ onBack, preventDefault }: SystemBackProps) => {
    useFocusEffect(
        React.useCallback(() => {
            const onHardwareBackPress = () => {
                onBack();
                return preventDefault === false ? false : true;
            }
            BackHandler.addEventListener("hardwareBackPress", onHardwareBackPress);
            return () => BackHandler.removeEventListener("hardwareBackPress", onHardwareBackPress);
        }, [onBack, preventDefault])
    );
    
    return null;
};

export default SystemBack;