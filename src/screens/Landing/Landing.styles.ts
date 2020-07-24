import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  signInBtnContainer: {
    width: "100%",
  },
  signUpContainer: {
    paddingTop: 20,
  },
  signUpBtnContainer: {
    paddingTop: 20,
  },

  signInBtn: {
    backgroundColor: "green",
    borderRadius: 100,
  },
  signUpBtn: {
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 100,
    paddingRight: 122,
    paddingLeft: 122,
    backgroundColor: "rgba(255, 255, 255, 0)",
  },

  welcome: {
    color: "#008000",
    fontWeight: "bold",
    fontStyle: "normal",
    paddingBottom: 20,
    textAlign: "center",
    fontSize: 20,
  },
  oneClick: {
    textAlign: "center",
    paddingBottom: 50,
    marginRight: 90,
    marginLeft: 90,
  },
});
