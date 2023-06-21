import {StyleSheet, TextInput, Text, View } from "react-native";
import React, { useEffect, useState, useRef } from "react";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
import auth from "@react-native-firebase/auth";

import Colors from "@constants/Colors";

import UserIcon from "@assets/UserIcon";
import PasswordIcon from "@assets/PasswordIcon";
import EyeCloseIcon from "@assets/EyeCloseIcon";
import EyeOpenIcon from "@assets/EyeOpenIcon";
import GoogleIcon from "@assets/GoogleIcon";
import Button from "@components/Buttons/Button";
import DropdownAlert  from "@components/DropdownAlert";


const SignIn = (props: any) => {
    const [showPassword, setShowPassword] = useState(false);

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const showDropdownAlert = () => {
        

      };

    useEffect(() => {
        GoogleSignin.configure({
            webClientId:
                "898862576645-k4htba5h6u4mi8nb27h82hv19edshaop.apps.googleusercontent.com",
        });
    }, []);

    const onGoogleButtonPress = async () => {
        // Check if your device supports Google Play
        await GoogleSignin.hasPlayServices({ showPlayServicesUpdateDialog: true });
        // Get the users ID token
        const { idToken } = await GoogleSignin.signIn();

        // Create a Google credential with the token
        const googleCredential = auth.GoogleAuthProvider.credential(idToken);

        // Sign-in the user with the credential
        return auth().signInWithCredential(googleCredential);
    };

    const onSignIn = () => {
        if (email === "" || password === "") {
            DropdownAlert.current.show({
                type: "error",
                title: "Error",
                message: "Please enter your email and password",
            });
            return;
        }
        auth()
            .signInWithEmailAndPassword(email, password)
            .then((result) => {
                console.log(result)
                console.log("User signed in!");
                props.setIsSignedIn(true);
            })
            .catch(error => {
                console.log(error)
                let errorMessage = "Verify your email and password!";
                if (error.code === "auth/invalid-email") {
                    errorMessage = "That email address is invalid!";
                }
                if (error.code === "auth/user-not-found") {
                    errorMessage = "That email address is not found!";
                }
                if (error.code === "auth/wrong-password") {
                    errorMessage = "That password is incorrect!";
                }
                if (error.code === "auth/user-disabled") {
                    errorMessage = "That user is disabled!";
                }
                if (error.code === "auth/too-many-requests") {
                    errorMessage = "Too many requests, wait a bit and try again";
                }

                DropdownAlert.current?.show({
                    type: "error",
                    title: "Error",
                    message: errorMessage,
                });
            });
    };

    const onForgetPassword = () => {
        auth()
            .sendPasswordResetEmail(email)
            .then(() => {
                console.log("Password reset email sent!");
            })
            .catch(error => {
                if (error.code === "auth/invalid-email") {
                    console.log("That email address is invalid!");
                }
                if (error.code === "auth/user-not-found") {
                    console.log("That email address is not found!");
                }
                console.error(error);
            });
    };
    return (
        <View
            style={{
                width: "80%",
                height: "65%",
                justifyContent: "center",
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
                    value={email}
                    onChangeText={setEmail}
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
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                }}>
                <Button
                    text="Remember me"
                    type="basic"
                    styleText={{
                        color: Colors.lightGreen,
                        fontSize: 15,
                    }}
                    onPress={() => showDropdownAlert()}
                />
                <Button
                    text="Forget password?"
                    type="basic"
                    styleText={{
                        color: Colors.lightGreen,
                        fontSize: 15,
                    }}
                    onPress={() => onForgetPassword()}
                />
            </View>
            <Button text="SIGN IN" type="button" onPress={() => onSignIn()} />

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
                    onPress={() => props.setShowSignUp(true)}
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
                <Button
                    type="basic"
                    icon={<GoogleIcon width={35} height={35} />}
                    onPress={() =>
                        onGoogleButtonPress().then(result => {
                            console.log(result);
                            props.setIsSignedIn(true);
                        })
                    }
                />
            </View>
            
        </View>
    );
};

export default SignIn;

const styles = StyleSheet.create({});
