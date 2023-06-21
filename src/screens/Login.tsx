import { SafeAreaView, StyleSheet, TextInput, Text, View } from "react-native";
import React, { useState, useRef } from "react";

import Colors from "../constants/Colors";
import auth from '@react-native-firebase/auth'

import JadeTreeLogo from "@assets/JadeTreeLogo";
import SignUp from "@components/login/SignUp";
import SignIn from "@components/login/SignIn";


const Login = (props: any) => {
    const [showSignUp, setShowSignUp] = useState(false);

    
    const user = auth().currentUser;
  console.log(user)

  

    return (
        <SafeAreaView style={styles.safeArea}>
            <View
                style={{
                    width: "80%",
                    height: "35%",
                    alignItems: "center",
                    justifyContent: "flex-end",
                }}>
                <JadeTreeLogo />
                <Text
                    style={{
                        fontSize: 30,
                        color: Colors.lightGreen,
                        marginVertical: 20,
                    }}>
                    {showSignUp ? "SIGN UP" : "SIGN IN"}
                </Text>
            </View>
            {showSignUp ? (
                <SignUp
                    setShowSignUp={setShowSignUp}
                    setIsSignedIn={props.setIsSignedIn}
                />
            ) : (
                <SignIn
                    setShowSignUp={setShowSignUp}
                    setIsSignedIn={props.setIsSignedIn}
                />
            )}
            
            
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
