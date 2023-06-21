import { Platform, StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { moderateScale } from "react-native-size-matters";

// Constants
import Colors from "@constants/Colors";

// Types
import type { IButtonProps } from "../Button";

const Basic = (props: IButtonProps) => {
    // Constant with the styles 
    const styles =
        props.type == "basic"
            ? basicStyles
            : props.variant === "primary"
                ? primaryStyles
                : secondaryStyles;
    return (
        <TouchableOpacity
            activeOpacity={props.activeOpacity}
            onPress={props.onPress}
            onLongPress={props.onLongPress}
            disabled={props.disabled}
            style={[
                styles.button,
                props.styleButton,
                props.disabled && styles.buttonDisabled,
                props.iconPosition === "left" && {
                    flexDirection: "row-reverse"
                }
            ]}
        >
            {props.text && (
                <Text
                    style={[
                        styles.text,
                        props.disabled &&
                            (props.styleTextDisabled ?? styles.textDisabled),
                        props.styleText
                    ]}
                >
                    {props.text}
                </Text>
            )}

            {props.icon && props.icon}
        </TouchableOpacity>
    );
};

export default Basic;

const primaryStyles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: Colors.primaryYellow,
        borderColor: Colors.primaryYellow,
        borderRadius: moderateScale(10),
        borderWidth: moderateScale(1),
        flexDirection: "row",
        justifyContent: "center",
        marginTop: moderateScale(15),
        paddingVertical: moderateScale(12),
        ...Platform.select({
            ios: {
                shadowColor: Colors.primaryYellow,
                shadowOffset: {
                    width: 0,
                    height: 3
                },
                shadowOpacity: 0,
                shadowRadius: 6
            }
        })
    },
    buttonDisabled: {
        backgroundColor: Colors.lightGray,
        borderColor: Colors.lightGray,
        borderWidth: moderateScale(1),
        shadowOpacity: 0
    },
    text: {
        color: Colors.primaryGreen,
        fontSize: moderateScale(18),
        fontWeight: "bold",
        marginHorizontal: moderateScale(10)
    },
    textDisabled: {}
});

const secondaryStyles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderColor: Colors.lightGreen ,
        flexDirection: "row",
        borderWidth: moderateScale(1),
        paddingVertical: moderateScale(12),
        borderRadius: moderateScale(10),
        marginTop: moderateScale(15)
    },
    buttonDisabled: {
        borderColor: Colors.lightGray,
        backgroundColor: "transparent",
        borderWidth: 1
    },
    text: {
        fontSize: moderateScale(18),
        fontWeight: "bold",
        color: Colors.lightGreen,
        marginHorizontal: moderateScale(10)
    },
    textDisabled: {
        color: Colors.lightGray
    }
});

const basicStyles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    buttonDisabled: {},
    text: {
        fontSize: moderateScale(18),
        fontWeight: "bold",
        color:  Colors.darkGreen,
    },
    textDisabled: {
        color: Colors.lightGray
    }
});

