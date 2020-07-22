import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-evenly",
    alignItems: "center",
  },

  eInput: {
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "space-around",
    padding: 15,
    paddingRight: 250,
    marginTop: 30,
  },

  pInout: {
    borderWidth: 1,
    borderRadius: 100,
    justifyContent: "space-around",
    padding: 15,
    paddingRight: 250,
    marginTop: 30,
  },

  signInBtn: {
    backgroundColor: "green",
    borderRadius: 100,
  },

  logInBtn: {
    backgroundColor: "green",
    borderRadius: 100,
    padding: 5,
    marginBottom: 50,
    marginTop: 30,
    marginRight: 30,
    marginLeft: 30,
  },

  fbsignInBtn: {
    marginTop: 20,
    marginRight: 20,
    marginLeft: 20,
  },

  // fbBtn: {
  //   borderWidth: 1,
  //   borderRadius: 100,
  //   padding: 10,
  //   marginBottom: 150,
  //   marginTop: 50,
  //   marginRight: 30,
  //   marginLeft: 30,
  //   backgroundColor: "darkblue",
  // },

  or: {
    fontWeight: "bold",
    textAlign: "center",
    paddingBottom: 30,
    fontSize: "20px",
  },

  signInTxt: {
    color: "#008000",
    fontWeight: "bold",
    fontStyle: "normal",
    paddingBottom: 10,
    fontSize: "30px",
  },
});
