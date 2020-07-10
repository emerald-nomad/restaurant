import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";

export type AuthStackParamList = {
  Landing: undefined;
  SignIn: undefined;
  SignUp: undefined;
};

type LandingScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "Landing"
>;
type LandingScreenRouteProp = RouteProp<AuthStackParamList, "Landing">;
export type LandingScreenProps = {
  navigation: LandingScreenNavigationProp;
  route: LandingScreenRouteProp;
};

type SignInScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "SignIn"
>;
type SignInScreenRouteProp = RouteProp<AuthStackParamList, "SignIn">;
export type SignInScreenProps = {
  navigation: SignInScreenNavigationProp;
  route: SignInScreenRouteProp;
};

type SignUpScreenNavigationProp = StackNavigationProp<
  AuthStackParamList,
  "SignUp"
>;
type SignUpScreenRouteProp = RouteProp<AuthStackParamList, "SignUp">;
export type SignUpScreenProps = {
  navigation: SignUpScreenNavigationProp;
  route: SignUpScreenRouteProp;
};
