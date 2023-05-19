import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import React, { useState } from "react";

import Colors from "../constants/Colors";

import JadeTreeLogo from "@assets/JadeTreeLogo";
import UserIcon from "@assets/UserIcon";
import PasswordIcon from "@assets/PasswordIcon";
import EyeCloseIcon from "@assets/EyeCloseIcon";
import EyeOpenIcon from "@assets/EyeOpenIcon";
import Button from "@components/Buttons/Button";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <SafeAreaView style={styles.safeArea}>
            <View
                style={{
                    width: "80%",
                    height: "50%",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
            <JadeTreeLogo />
            <Text
                style={{
                    fontSize: 30,
                    color: Colors.lightGreen,
                    marginVertical: 20,
                }}
            >
                SIGN IN
            </Text>
            </View>
            <View
                style={{
                    width: "80%",
                    height: "40%",
                }}
            >
                <View
                    style={{
                        borderColor: Colors.primaryYellow,
                        borderBottomWidth: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 20,
                    }}>
                    <UserIcon width={35} height={35} />
                    <TextInput
                        style={{
                            fontSize: 20,
                            marginLeft: 5,
                            width: "80%",
                        }}
                        placeholder="Email or username"
                        placeholderTextColor={Colors.darkGreen}
                    />
                </View>

                <View
                    style={{
                        borderColor: Colors.primaryYellow,
                        borderBottomWidth: 1,
                        flexDirection: "row",
                        alignItems: "center",
                        marginBottom: 20,
                }}>
                    <PasswordIcon width={35} height={35} />
                    <TextInput
                        style={{
                            marginLeft: 5,
                            fontSize: 20,
                            width: "80%",
                        }}
                        secureTextEntry={!showPassword}
                        placeholder="Password"
                        placeholderTextColor={Colors.darkGreen}
                    />
                    <Button
                        type="basic"
                        icon={
                            showPassword ? (
                                <EyeOpenIcon width={25} height={25} />
                            ) : (
                                <EyeCloseIcon width={25} height={25} />
                            )
                        }
                        onPress={() => setShowPassword(!showPassword)}
                    />
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                    }}
                >
                <Button
                    text="Remember me"
                    type="basic"
                    styleText={{
                        color: Colors.lightGreen,
                        fontSize: 15,
                    }}
                />
                <Button 
                    text="Forget password?" 
                    type="basic"
                    styleText={{
                        color: Colors.lightGreen,
                        fontSize: 15,
                    }}
                />
                
                </View>
                <Button text="SIGN IN" type="button"/>
                
                <View
                    style={{
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "center",
                        marginTop: 20,
                    }}
                >
                    <Text
                        style={{
                            color: Colors.lightGreen,
                            fontSize: 15,
                        }}
                    >
                        Don't have an account?
                    </Text>
                    <Button
                        text="Sign up"
                        type="basic"
                        styleText={{
                            color: Colors.lightGreen,
                            fontSize: 15,
                            marginLeft: 5,
                        }}
                    />
                </View>
                
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: Colors.primaryGreen,
        alignItems: "center",
        justifyContent: "center",
    },
});
