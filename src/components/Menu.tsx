import { Portal } from "@gorhom/portal";
import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Dimensions, Pressable, StyleSheet, Text, View } from "react-native";
import Card from "./Card";
import MaterialIcon from "./MaterialIcon";
import SystemBack from "./SystemBack";

interface MenuProps {
    children: ReactNode;
    anchor?: ReactNode;
    visible: boolean;
    dismiss: () => void;
}

const Menu = ({ children, anchor, visible, dismiss }: MenuProps) => {
    const anchorConRef = useRef<View>(null);
    const fakeMenuRef = useRef<View>(null);

    const anchorLeft = useRef(0);
    const anchorTop = useRef(0);
    const menuWidth = useRef(0);
    const menuHeight = useRef(0);

    const [left, setLeft] = useState(0);
    const [top, setTop] = useState(0);

    const [isShowFakeMenu, setIsShowFakeMenu] = useState(true);

    useEffect(() => {
        const windowWidth = Dimensions.get("window").width;
        const windowHeight = Dimensions.get("window").height;

        // console.log(windowWidth, windowHeight);
        // console.log(anchorLeft.current, anchorTop.current, menuWidth.current, menuHeight.current);

        if (anchorLeft.current + menuWidth.current > windowWidth) {
            setLeft(windowWidth - menuWidth.current - 8);
        } else {
            setLeft(anchorLeft.current);
        }

        if (anchorTop.current + menuHeight.current > windowHeight) {
            setTop(windowHeight - menuHeight.current - 8);
        } else {
            setTop(anchorTop.current);
        }
        
    }, [anchorLeft.current, anchorTop.current, menuWidth.current, menuHeight.current]);

    useEffect(() => {
        setIsShowFakeMenu(true);
    }, [children]);

    return (
        <>
            <View
                ref={anchorConRef}
                onLayout={() => {
                    anchorConRef.current?.measure((fx, fy, w, h, px, py) => {
                        anchorLeft.current = px;
                        anchorTop.current = py;
                    });
                }}>
                {anchor}
            </View>
            {isShowFakeMenu ?
                <Card
                    border
                    pointerEvents="none"
                    style={[styles.menu, styles.transparent]}
                    ref={fakeMenuRef}
                    onLayout={() => {
                        fakeMenuRef.current?.measure((fx, fy, w, h, px, py) => {
                            menuWidth.current = w;
                            menuHeight.current = h;
                        });
                        setIsShowFakeMenu(false);
                    }}>
                    {children}
                </Card>
            : null}
            {visible ?
                <>
                    <SystemBack
                        onBack={dismiss} />
                    <Portal>
                        <Pressable
                            style={styles.mask}
                            android_disableSound
                            onPress={dismiss} />
                        <Card
                            border
                            style={[styles.menu, {
                                top, left
                            }]}>
                            {children}
                        </Card>
                    </Portal>
                </>
            : null}
        </>
    );
};

interface MenuItemProps {
    title: string;
    onPress?: () => void;
    icon?: string;
}

Menu.Item = ({ title, onPress, icon }: MenuItemProps) => {
    return (
        <Card
            style={styles.item}
            onPress={onPress}>
            {icon ?
                <MaterialIcon
                    name={icon}
                    size={20}
                    color="#000"
                    style={styles.icon} />
            : null}
            <Text style={styles.itemText}>{title}</Text>
        </Card>
    );
};

const styles = StyleSheet.create({
    menu: {
        position: "absolute",
        elevation: 8,
        minWidth: 150,
        padding: 5
    },
    transparent: {
        opacity: 0
    },
    mask: {
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    item: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        flexDirection: "row",
        alignItems: "center"
    },
    icon: {
        marginRight: 10
    },
    itemText: {
        color: "#000",
        fontSize: 16
    }
});

export default Menu;