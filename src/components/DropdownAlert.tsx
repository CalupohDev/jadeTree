import React, { Component, ComponentProps } from "react";
import { Animated, View, TouchableOpacity, Text, StyleSheet } from "react-native";

import SuccessIcon from "@assets/SuccessIcon";
import ErrorIcon from "@assets/ErrorIcon";
import WarningIcon from "@assets/WarningIcon";
import InfoIcon from "@assets/InfoIcon";

interface DropdownAlertProps {
    animatedValue: Animated.Value;
    showAlert: boolean;
    alertMessage: string;
    alertType: string;
    alertTitle: string;
}

class DropdownAlert extends Component {
    static current: any;
    state: DropdownAlertProps;
    constructor(props: ComponentProps<any>) {
        super(props);
        this.state = {
            animatedValue: new Animated.Value(-200),
            showAlert: false,
            alertMessage: "",
            alertType: "",
            alertTitle: "",
        };
    }

    animate = (toValue: number, onComplete: () => void) => {
        Animated.spring(this.state.animatedValue, {
            toValue,
            friction: 6,
            useNativeDriver: true,
        }).start(onComplete);
    };

    static setReference = (reference: any) => {
        this.current = reference;
    };

    show = ({ message = "", type = "info", title = "" }) => {
        if (!this.state.showAlert) {
            this.setState({
                showAlert: true,
                alertMessage: message,
                alertType: type,
                alertTitle: title,
            });
            this.animate(10, () => {
                console.log("show");
            });
            setTimeout(() => {
                this.animate(-200, () => {
                    this.setState({
                        showAlert: false,
                        alertMessage: "",
                        alertType: "",
                        alertTitle: "",
                    });
                    console.log("hide");
                });
            }, 5000);
        }
    };

    icon = () => {
        const { alertType } = this.state;
        switch (alertType) {
            case "success":
                return (
                    <SuccessIcon
                        width={50}
                        height={50}
                        color={"#fff"}
                        style={styles.alertIcon}
                    />
                );
            case "error":
                return (
                    <ErrorIcon
                        width={50}
                        height={50}
                        color={"#fff"}
                        style={styles.alertIcon}
                    />
                );
            case "warning":
                return (
                    <WarningIcon
                        width={50}
                        height={50}
                        color={"#fff"}
                        style={styles.alertIcon}
                    />
                );
            default:
                return (
                    <InfoIcon
                        width={50}
                        height={50}
                        color={"#fff"}
                        style={styles.alertIcon}
                    />
                );
        }
    };

    render() {
        const { alertMessage, alertType, alertTitle } = this.state;
        return (
            <Animated.View
                style={[
                    styles.alertContainer,
                    styles[alertType],
                    {
                        transform: [{ translateY: this.state.animatedValue }],
                    },
                ]}>
                {this.icon()}
                <View style={{ flex: 1 }}>
                    <Text style={styles.alertTitle}>{alertTitle}</Text>
                    <Text style={styles.alertText}>{alertMessage}</Text>
                </View>
            </Animated.View>
        );
    }
}

const styles: any = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        backgroundColor: "blue",
        padding: 10,
        borderRadius: 5,
        marginBottom: 20,
    },
    buttonText: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    alertContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        paddingVertical: 10,
        marginHorizontal: 20,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        borderRadius: 10,
        minHeight: 80,
    },
    alertIcon: {
        marginRight: 10,
    },
    alertText: {
        color: "white",
        fontSize: 16,
    },
    alertTitle: {
        color: "white",
        fontSize: 18,
        fontWeight: "bold",
    },
    info: {
        backgroundColor: "#1E90FF",
    },
    success: {
        backgroundColor: "#2E8B57",
    },
    error: {
        backgroundColor: "#DC143C",
    },
    warning: {
        backgroundColor: "#FFA500",
    },
});

export default DropdownAlert;
