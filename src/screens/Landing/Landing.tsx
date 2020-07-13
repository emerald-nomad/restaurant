import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-elements";

import styles from "./Landing.styles";
import { LandingScreenProps } from "../../navigation";

const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.welcome}> Welcome to our restaurant </Text>
        <Text style={styles.oneClick}>
          Order food and make reservations with one click.
        </Text>
      </View>
      <View style={styles.buttons}>
        <Button
          title="Log In"
          onPress={() => navigation.push("SignIn")}
          containerStyle={styles.signInBtnContainer}
          buttonStyle={styles.signInBtn}
        />
        <View style={styles.signUpContainer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.push("SignUp")}
            containerStyle={styles.signUpBtnContainer}
            buttonStyle={styles.signUpBtn}
            titleStyle={{ color: "black" }}
          />
        </View>
      </View>
    </View>
  );
};

export default LandingScreen;
