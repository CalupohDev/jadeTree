/**
 * @fileoverview Button component with switch style.
 * @version v2.17.0
 * @author Francisco Manuel López García manuel.lopez@resser.com
 * @date 25/04/2023
 * @copyright Industrias Resser 2023
 */

import {
    Platform,
    StyleSheet,
    Switch as SwitchButton,
    Text,
    View
} from "react-native";
import React, { useEffect, useState } from "react";
import { moderateScale } from "react-native-size-matters";

// Constants
import Colors from "@constants/Colors";
// Types
import { IButtonProps } from "../Button";

const Switch = (props: IButtonProps) => {
    /** State with the value of switch */
    const [value, setValue] = useState(false);
    /** Constant with the track color of switch */
    const trackColor = props.trackColor ?? {
        false: Platform.OS == "ios" ? Colors.whiteButton : Colors.grayButton,
        true: Colors.greenButton
    };
    /** Constant with the thumb color of switch */
    const thumbColor = props.thumbColor ?? {
        false: Colors.whiteButton,
        true: Colors.whiteButton
    };

    /**
     * Effect to update the value of switch
     * when the value of props.value changes
     */
    useEffect(() => {
        setValue(props.value ?? false);
    }, [props.value]);

    /**
     * Function to change the value of switch
     */
    const toggleSwitch = () => {
        setValue(!value);
        props.onValueChange?.(!value);
    };

    return (
        <View style={[styles.button, props.styleButton]}>
            <SwitchButton
                value={value}
                onValueChange={toggleSwitch}
                trackColor={trackColor}
                thumbColor={value ? thumbColor.true : thumbColor.false}
                ios_backgroundColor={trackColor.false}
                disabled={props.disabled}
                style={
                    props.disabled && {
                        opacity: 0.4
                    }
                }
            />
            {props.text && (
                <Text
                    style={[
                        styles.text,
                        props.styleText,
                        props.disabled && styles.textDisabled
                    ]}
                >
                    {props.text}
                </Text>
            )}
        </View>
    );
};

export default Switch;

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row"
    },
    text: {
        color: "#142240",
        fontSize: moderateScale(18),
        fontWeight: "bold",
        marginHorizontal: moderateScale(10)
    },
    textDisabled: {
        color: Colors.grayButton
    }
});
