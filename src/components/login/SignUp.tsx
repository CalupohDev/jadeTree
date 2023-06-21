import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import React, { useState } from "react";
import auth from "@react-native-firebase/auth";

import Colors from "@constants/Colors";

import JadeTreeLogo from "@assets/JadeTreeLogo";
import UserIcon from "@assets/UserIcon";
import PasswordIcon from "@assets/PasswordIcon";
import EyeCloseIcon from "@assets/EyeCloseIcon";
import EyeOpenIcon from "@assets/EyeOpenIcon";
import GoogleIcon from "@assets/GoogleIcon";
import EmailIcon from "@assets/EmailIcon";
import Button from "@components/Buttons/Button";

const SignUp = (props: any) => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [username, setUsername] = useState("");

    const onSignUp = () => {
        auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async() => {
                console.log("User account created & signed in!");
                await auth().currentUser?.updateProfile({
                    displayName: username,
                }).then(() => {
                    console.log("User display name updated!");
                });
                props.setIsSignedIn(true);
            })
            .catch(error => {
                if (error.code === "auth/email-already-in-use") {
                    console.log("That email address is already in use!");
                }
                if (error.code === "auth/invalid-email") {
                    console.log("That email address is invalid!");
                }
                console.error(error);
            });
    };
    return (
        <View
            style={{
                width: "80%",
                height: "65%",
            }}>
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
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Username"
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
                <EmailIcon width={30} height={30} style={{ marginRight: 5 }} />
                <TextInput
                    style={{
                        fontSize: 20,
                        marginLeft: 5,
                        width: "80%",
                    }}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email"
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
                    value={password}
                    onChangeText={setPassword}
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
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!showPassword}
                    placeholder="Confirm Password"
                    placeholderTextColor={Colors.darkGreen}
                />
            </View>
            <Button text="SIGN UP" type="button" onPress={() => onSignUp()} />

            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                }}>
                <Text
                    style={{
                        color: Colors.lightGreen,
                        fontSize: 15,
                    }}>
                    Alredy have an account?
                </Text>
                <Button
                    text="Sign in"
                    type="basic"
                    styleText={{
                        color: Colors.lightGreen,
                        fontSize: 15,
                        marginLeft: 5,
                    }}
                    onPress={() => props.setShowSignUp(false)}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                }}>
                <View
                    style={{
                        borderColor: Colors.primaryYellow,
                        borderBottomWidth: 1,
                        width: "20%",
                        height: 25,
                        marginHorizontal: 10,
                    }}
                />
                <Text
                    style={{
                        color: Colors.lightGreen,
                        fontSize: 15,
                        marginTop: 20,
                        textAlign: "center",
                    }}>
                    Or continue with
                </Text>
                <View
                    style={{
                        borderColor: Colors.primaryYellow,
                        borderBottomWidth: 1,
                        width: "20%",
                        height: 25,
                        marginHorizontal: 10,
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    marginTop: 20,
                }}>
                <Button type="basic" icon={<GoogleIcon width={35} height={35} />} />
            </View>
        </View>
    );
};

export default SignUp;

const styles = StyleSheet.create({});
