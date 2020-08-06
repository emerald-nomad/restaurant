import React from "react";
import { StyleSheet, View, Text, TextInput } from "react-native";
import styles from "./SignIn.styles";
import { Button } from "react-native-elements";
import { SocialIcon } from "react-native-elements";
import { FacebookSocialButton } from "react-native-social-buttons";

const SignInScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View>
        <View>
          <Text style={styles.signInTxt}>Sign In</Text>
        </View>
        <View style={styles.eInput}>
          <TextInput placeholder="Email or phone number" />
        </View>
        <View style={styles.pInout}>
          <TextInput placeholder="Password" />
        </View>
        <View style={styles.buttons}>
          <View style={styles.logInBtn}>
            <Button
              title="Log In"
              buttonStyle={styles.signInBtn}
              titleStyle={{ color: "white" }}
            />
          </View>
          <View>
            <Text style={styles.or}>OR</Text>
          </View>
          <View style={styles.fbsignInBtn}>
            <SocialIcon title="Sign In With Facebook" button type="facebook" />
          </View>
        </View>
      </View>
    </View>
  );
};

//const styles = styleSheet.create({
//screen: {},
//});//

export default SignInScreen;
