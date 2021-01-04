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
import { validate } from "gerador-validador-cpf";

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
    cpf: "",
    creditCard: {
      valid: true,
      cvc: "",
      expiry: "",
      name: "",
      number: "",
      type: "",
    },
    check_textInputNameChange: false,
    check_textInputEmailChange: false,
    check_textInputCpfChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
    isValidName: true,
    isValidEmail: true,
    isValidPassword: true,
    isValidConfirmPassword: true,
    isValidCpf: true,
  });

  const textInputEmailChange = (email) => {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (regex.test(String(email).toLocaleLowerCase())) {
      setData({
        ...data,
        email: email,
        isValidEmail: true,
        check_textInputEmailChange: true,
      });
    } else {
      setData({
        ...data,
        email: email,
        isValidEmail: false,
        check_textInputEmailChange: false,
      });
    }
  };

  const textInputNameChange = (value) => {
    if (value.trim().length >= 4) {
      setData({
        ...data,
        name: value,
        isValidName: true,
        check_textInputNameChange: true,
      });
    } else {
      setData({
        ...data,
        name: value,
        isValidName: false,
        check_textInputNameChange: false,
      });
    }
  };

  const textInputCpfChange = (value) => {
    const cpfWithMask = value
      .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, "$1.$2") // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, "$1.$2")
      .replace(/(\d{3})(\d{1,2})/, "$1-$2")
      .replace(/(-\d{2})\d+?$/, "$1"); // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada

    if (validate(cpfWithMask)) {
      setData({
        ...data,
        cpf: cpfWithMask,
        check_textInputCpfChange: true,
        isValidCpf: true,
      });
    } else {
      setData({
        ...data,
        cpf: cpfWithMask,
        check_textInputCpfChange: false,
        isValidCpf: false,
      });
    }
  };

  const textInputPasswordChange = (value) => {
    if (value.trim().length >= 8) {
      setData({
        ...data,
        password: value,
        isValidPassword: true,
      });
    } else {
      setData({
        ...data,
        password: value,
        isValidPassword: false,
      });
    }
  };

  const textInputConfirmPasswordChange = (value) => {
    if (value === data.password) {
      setData({
        ...data,
        confirm_password: value,
        isValidConfirmPassword: true,
      });
    } else {
      setData({
        ...data,
        confirm_password: value,
        isValidConfirmPassword: false,
      });
    }
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

  const signUpHandle = () => {
    console.log(data);

    //signUp()
  };

  const _onChange = (formData) => {
    setData({
      ...data,
      creditCard: {
        valid: formData.valid,
        cvc: formData.values.cvc,
        expiry: formData.values.expiry,
        name: formData.values.name,
        number: formData.values.number,
        type: formData.values.type,
      },
    });
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.header}></SafeAreaView>
      <Animatable.View animation="fadeInUpBig" style={styles.footer}>
        <ScrollView
          style={styles.scroolView}
          showsVerticalScrollIndicator={false}
        >
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
          {data.isValidName ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Nome deve ter no mínimo 4 caracteres.
              </Text>
            </Animatable.View>
          )}

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
          {data.isValidEmail ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Email deve ser um e-mail válido.
              </Text>
            </Animatable.View>
          )}

          <View style={[styles.action, { marginTop: SIZES.marginTop }]}>
            <FontAwesome name="lock" color={COLORS.primary} size={25} />
            <TextInput
              placeholder="Senha"
              style={styles.textInput}
              secureTextEntry={data.secureTextEntry ? true : false}
              onChangeText={(value) => textInputPasswordChange(value)}
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <Feather name="eye-off" color={COLORS.gray} size={25} />
              ) : (
                <Feather name="eye" color={COLORS.gray} size={25} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Senha deve ter no mínimo 8 caracteres.
              </Text>
            </Animatable.View>
          )}

          <View style={[styles.action, { marginTop: SIZES.marginTop }]}>
            <FontAwesome name="lock" color={COLORS.primary} size={25} />
            <TextInput
              placeholder="Confirmar Senha"
              style={styles.textInput}
              secureTextEntry={data.confirm_secureTextEntry ? true : false}
              onChangeText={(value) => textInputConfirmPasswordChange(value)}
            />
            <TouchableOpacity onPress={updateConfirmSecureTextEntry}>
              {data.confirm_secureTextEntry ? (
                <Feather name="eye-off" color={COLORS.gray} size={25} />
              ) : (
                <Feather name="eye" color={COLORS.gray} size={25} />
              )}
            </TouchableOpacity>
          </View>
          {data.isValidConfirmPassword ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                As senhas não são correspondentes.
              </Text>
            </Animatable.View>
          )}

          <View style={[styles.action, { marginTop: SIZES.marginTop }]}>
            <FontAwesome name="user" color={COLORS.primary} size={25} />
            <TextInput
              value={data.cpf}
              placeholder="CPF"
              keyboardType="number-pad"
              style={styles.textInput}
              onChangeText={(value) => textInputCpfChange(value)}
            />
            {data.check_textInputCpfChange ? (
              <Animatable.View animation="bounceIn">
                <Feather name="check-circle" color="green" size={25} />
              </Animatable.View>
            ) : null}
          </View>
          {data.isValidCpf ? null : (
            <Animatable.View animation="fadeInLeft" duration={500}>
              <Text style={styles.errorMsg}>
                Você deve digitar um CPF válido.
              </Text>
            </Animatable.View>
          )}

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
            />
          </View>

          <View style={styles.footerSection}>
            <TouchableOpacity
              style={styles.signInButton}
              onPress={() => {
                signUpHandle();
              }}
            >
              <Text style={[styles.signInButtonText, { color: COLORS.white }]}>
                Registrar-se
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </Animatable.View>
    </View>
  );
}

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
  },
  scroolView: {
    flex: 1,
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
  },
  signUpButton: {
    paddingLeft: 6,
  },
  signUpButtonText: {
    fontWeight: "bold",
    color: "#FC955F",
  },
  errorMsg: {
    color: COLORS.red,
    fontSize: SIZES.body4,
  },
});
