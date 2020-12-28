import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";

import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

import { COLORS, FONTS, SIZES } from "../../themes/theme";

export default function SignIn({ navigation }) {
  const [data, setData] = React.useState({
    email: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const textInputChange = (value) => {
    if (value.lenght !== 0) {
      setData({
        ...data,
        email: value,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}>
        <Animatable.Image
          source={require("../../assets/images/IconLogo.png")}
          style={styles.Logo}
          resizeMode="stretch"
          animation="pulse"
          iterationCount={10}
        />
      </SafeAreaView>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>Login</Text>
        </View>
        <View style={[styles.action, { marginTop: 25 }]}>
          <FontAwesome name="user" color={COLORS.primary} size={25} />
          <TextInput
            placeholder="E-mail"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => textInputChange(value)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={25} />
            </Animatable.View>
          ) : null}
        </View>
        <View style={[styles.action, { marginTop: SIZES.marginTop }]}>
          <FontAwesome name="lock" color={COLORS.primary} size={25} />
          <TextInput
            placeholder="Senha"
            style={styles.textInput}
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(value) => handlePasswordChange(value)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color={COLORS.gray} size={25} />
            ) : (
              <Feather name="eye" color={COLORS.gray} size={25} />
            )}
          </TouchableOpacity>
        </View>

        <View style={styles.footerSection}>
          <TouchableOpacity
            onPress={() => alert(`${data.email} + ${data.password}`)}
            style={styles.signInButton}
          >
            <Text style={[styles.signInButtonText, { color: COLORS.white }]}>
              Entrar
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => alert("A implementar")}
            style={styles.rememberButton}
          >
            <Text style={styles.rememberButtonText}>Esqueci minha senha</Text>
          </TouchableOpacity>

          <View style={styles.accountRegister}>
            <Text style={{ fontSize: SIZES.body4, color: COLORS.darkgray }}>
              Ainda não tem uma conta ?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("SignUp")}
              style={styles.signUpButton}
            >
              <Text style={styles.signUpButtonText}>Registre-se</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Animatable.View>
    </View>
  );
}

const { height } = Dimensions.get("screen");
const height_logo = height * 0.2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingBottom: 60,
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
  },
  Logo: {
    width: height_logo,
    height: height_logo,
    marginTop: 70,
  },
  text_footer: {
    color: COLORS.primary,
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    borderRadius: SIZES.radius,
    backgroundColor: COLORS.lightGray,
    justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    paddingLeft: 10,
    color: COLORS.primary,
  },
  titleArea: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  titleText: {
    ...FONTS.h1,
    fontWeight: "bold",
  },
  footerSection: {
    alignItems: "center",
    marginTop: 50,
  },
  signInButton: {
    width: "100%",
    height: 50,
    backgroundColor: COLORS.tertiary,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: SIZES.radius,
  },
  signInButtonText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  rememberButton: {
    marginTop: 20,
  },
  rememberButtonText: {
    fontSize: SIZES.body4,
    color: COLORS.darkgray,
  },
  accountRegister: {
    flexDirection: "row",
    marginTop: 20,
  },
  signUpButton: {
    paddingLeft: 6,
  },
  signUpButtonText: {
    fontWeight: "bold",
    color: "#FC955F",
  },
});
