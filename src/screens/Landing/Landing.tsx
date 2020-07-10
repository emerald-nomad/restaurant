import React from "react";
import { View, Button } from "react-native";
import styles from "./Landing.styles";
import { LandingScreenProps } from "../../navigation";

const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="Sign Up" onPress={() => navigation.push("SignUp")} />
      <Button title="Sign In" onPress={() => navigation.push("SignIn")} />
    </View>
  );
};

export default LandingScreen;
