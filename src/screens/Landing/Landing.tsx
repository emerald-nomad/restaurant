import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";

import styles from "./Landing.styles";
import { LandingScreenProps } from "../../navigation";

const LandingScreen: React.FC<LandingScreenProps> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button
        title="Login"
        onPress={() => navigation.push("SignIn")}
        containerStyle={styles.signInBtnContainer}
        buttonStyle={styles.signInBtn}
      />
    </View>
  );
};

export default LandingScreen;
