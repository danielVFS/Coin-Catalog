import React from "react";
import {
  View,
  SafeAreaView,
  Text,
  StyleSheet,
  UIManager,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import { CreditCardInput } from "react-native-credit-card-input";

import { COLORS, FONTS, SIZES } from "../../themes/theme";

import { AuthContext } from "../../hooks/authContext";

UIManager.setLayoutAnimationEnabledExperimental(true);

export default function SignIn({ navigation }) {
  const { signUp } = React.useContext(AuthContext);

  const [data, setData] = React.useState({
    name: "",
    email: "",
    password: "",
    confirm_password: "",
    check_textInputNameChange: false,
    check_textInputEmailChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputEmailChange = (value) => {
    if (value.lenght !== 0) {
      setData({
        ...data,
        email: value,
        check_textInputEmailChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputEmailChange: false,
      });
    }
  };

  const textInputNameChange = (value) => {
    if (value.lenght !== 0) {
      setData({
        ...data,
        name: value,
        check_textInputNameChange: true,
      });
    } else {
      setData({
        ...data,
        email: value,
        check_textInputNameChange: false,
      });
    }
  };

  const handlePasswordChange = (value) => {
    setData({
      ...data,
      password: value,
    });
  };

  const handleConfirmPasswordChange = (value) => {
    setData({
      ...data,
      confirm_password: value,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  const _onChange = (form) => console.log(form);

  const _onFocus = (field) => console.log("focusing", field);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}></SafeAreaView>
      <ScrollView style={styles.footer} showsVerticalScrollIndicator={false}>
        <View style={styles.titleArea}>
          <Text style={styles.titleText}>Registre-se</Text>
          <View style={styles.accountRegister}>
            <Text style={{ fontSize: SIZES.body4, color: COLORS.darkgray }}>
              Já tem uma conta ?
            </Text>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={styles.signUpButton}
            >
              <Text style={styles.signUpButtonText}>Voltar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={[styles.action]}>
          <FontAwesome name="male" color={COLORS.primary} size={25} />
          <TextInput
            placeholder="Nome Completo"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => textInputNameChange(value)}
          />
          {data.check_textInputNameChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={25} />
            </Animatable.View>
          ) : null}
        </View>
        <View style={[styles.action, { marginTop: SIZES.marginTop }]}>
          <FontAwesome name="user" color={COLORS.primary} size={25} />
          <TextInput
            placeholder="E-mail"
            autoCompleteType="email"
            keyboardType="email-address"
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(value) => textInputEmailChange(value)}
          />
          {data.check_textInputEmailChange ? (
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

        <View style={[styles.action, { marginTop: SIZES.marginTop }]}>
          <FontAwesome name="lock" color={COLORS.primary} size={25} />
          <TextInput
            placeholder="Confirmar Senha"
            style={styles.textInput}
            secureTextEntry={data.confirm_secureTextEntry ? true : false}
            onChangeText={(value) => handleConfirmPasswordChange(value)}
          />
          <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
            {data.confirm_secureTextEntry ? (
              <Feather name="eye-off" color={COLORS.gray} size={25} />
            ) : (
              <Feather name="eye" color={COLORS.gray} size={25} />
            )}
          </TouchableOpacity>
        </View>

        <View style={[styles.action, { marginTop: SIZES.marginTop }]}>
          <CreditCardInput
            requiresName={true}
            requiresCVC={true}
            validColor={COLORS.darkGreen}
            invalidColor={COLORS.red}
            placeholderColor="darkgray"
            allowScroll
            placeholders={{
              number: "5386 9596 2508 0429",
              expiry: "08/21",
              cvc: "416",
              name: "JOSÉ DA SILVA",
            }}
            labels={{
              number: "NÚMERO DO CARTÃO",
              expiry: "VALIDO ATÉ",
              cvc: "CVV/CVC",
              name: "NOME COMPLETO",
            }}
            labelStyle={{ color: "black", fontSize: 12 }}
            inputStyle={{ color: "black", fontSize: 16 }}
            onChange={_onChange}
            onFocus={_onFocus}
          />
        </View>

        <View style={styles.footerSection}>
          <TouchableOpacity
            style={styles.signInButton}
            onPress={() => signUp()}
          >
            <Text style={[styles.signInButtonText, { color: COLORS.white }]}>
              Registrar-se
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

const { height } = Dimensions.get("screen");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary,
  },
  header: {
    width: "100%",
    height: 100,
  },
  footer: {
    flex: 3,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginBottom: 0,
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
    marginBottom: 50,
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
  },
  signUpButton: {
    paddingLeft: 6,
  },
  signUpButtonText: {
    fontWeight: "bold",
    color: "#FC955F",
  },
});
