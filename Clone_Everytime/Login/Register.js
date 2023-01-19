import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import { useAccount } from "./AccountAxios";

const TextInputs = ({ value, holder, setText, password, text }) => {
  return (
    <View>
      <Text style={styles.texts}>{text}</Text>
      <TextInput
        value={value}
        placeholder={holder}
        style={styles.Inputs}
        onChangeText={setText}
        secureTextEntry={password}
      />
    </View>
  );
};

const Screen = styled.View`
  width: 100%;
  height: 100%;
`;

const Header = ({ navigation }) => {
  return (
    <View
      style={{
        backgroundColor: "black",
        height: 50,
        alignItems: "center",
        flexDirection: "row",
      }}
    >
      <Text
        style={{
          color: "white",
          fontWeight: "bold",
          fontSize: 18,
          paddingStart: 20,
        }}
      >
        회원가입
      </Text>
      <TouchableOpacity
        style={{ marginLeft: "65%" }}
        onPress={navigation.goBack}
      >
        <Entypo name="cross" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
};

export default ({ navigation }) => {
  const { Signup } = useAccount();
  const [LoginText, setLoginText] = useState("");
  const [passwordText, setPasswordText] = useState("");
  const [CheckPassword, setCheckPassword] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Screen>
          {/*  헤더부분 나가기 버튼 및 회원가입 */}
          <Header navigation={navigation} />

          <View style={{ paddingStart: 25 }}>
            {/*  회원가입 부분  */}
            <View>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 25,
                  paddingTop: 20,
                }}
              >
                임시 페이지
              </Text>

              <TextInputs
                setText={setLoginText}
                value={LoginText}
                password={false}
                text={"아이디"}
                holder={"아이디를 입력해주세요."}
              />

              <TextInputs
                setText={setPasswordText}
                value={passwordText}
                password={true}
                text={"비밀번호"}
                holder={"비밀번호를 입력해주세요."}
              />

              <TextInputs
                setText={setCheckPassword}
                value={CheckPassword}
                password={true}
                text={"비밀번호 확인"}
                holder={"비밀번호 확인"}
              />

              <TextInputs
                setText={setNickname}
                value={nickname}
                password={false}
                text={"닉네임"}
                holder={"사용할 닉네임을 입력해주세요."}
              />
            </View>
            {/*  회원가입 버튼  */}
            <TouchableOpacity
              style={styles.SignupButton}
              onPress={() =>
                Signup(LoginText, passwordText, CheckPassword, nickname)
              }
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>다음</Text>
            </TouchableOpacity>
          </View>
        </Screen>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  Inputs: {
    paddingLeft: 10,
    width: "90%",
    height: 40,
    borderRadius: 15,
    backgroundColor: "#f8f8f8",
    marginBottom: 20,
  },
  texts: {
    paddingLeft: 10,
    fontSize: 13,
    color: "#757575",
    fontWeight: "bold",
    paddingTop: 15,
    paddingBottom: 5,
  },
  SignupButton: {
    backgroundColor: "#BE271D",
    borderRadius: 15,
    width: "90%",
    alignItems: "center",
    justifyContent: "center",
    height: 40,
  },
});
