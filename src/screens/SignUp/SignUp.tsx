import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import styles from "./SignUp.styles";
import { Button } from "react-native-elements";

const SignUpScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.nwActTxt}>Create new account</Text>
        </View>
        <View style={styles.fnInput}>
          <TextInput placeholder="Full Name" />
        </View>
        <View style={styles.pnInput}>
          <TextInput placeholder="Phone Number" />
        </View>
        <View style={styles.eaInput}>
          <TextInput placeholder="Email Address" />
        </View>
        <View style={styles.pInput}>
          <TextInput placeholder="Password" />
        </View>
        <View style={styles.signUpContainer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.push("SignUp")}
            containerStyle={styles.signUpBtnContainer}
            buttonStyle={styles.signUpBtn}
          />
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;
