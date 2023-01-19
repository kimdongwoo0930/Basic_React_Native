import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";

const TextInputs = ({ Text, setText, holder, password }) => {
  return (
    <TextInput
      placeholderTextColor={"#535353"}
      placeholder={holder}
      value={Text}
      style={styles.TextInputs}
      onChangeText={setText}
      cursorColor={"#DE5549"}
      selectionColor={"#DE5549"}
      autoCapitalize={"none"}
      secureTextEntry={password}
    />
  );
};

const Header = styled.View`
  align-items: center;
  padding-top: 50px;
  flex: 1;
`;

const Footer = styled.View`
  justify-content: center;
  width: 100%;
  flex-direction: row;
  align-items: center;
  flex: 0.5;
`;

const Screen = styled.View`
  width: 100%;
  height: 100%;
  background-color: #121212;
  align-items: center;
`;

const Login = styled.View`
  width: 100%;
  align-items: center;
  padding-top: 50px;
  flex: 4;
`;

export default ({ navigation }) => {
  const [LoginText, setLoginText] = useState("");
  const [RegisterText, setRegisterText] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <Screen>
          {/*  아이콘및 글자  */}

          <Header>
            <Ionicons
              name="ios-alarm-outline"
              size={60}
              color="#DE5549"
              style={{ paddingBottom: 10 }}
            />
            <Text style={{ color: "gray" }}>대학 생활을 더 편하게 즐겁게</Text>
            <Text
              style={{ color: "#DE5549", fontSize: 20, fontWeight: "bold" }}
            >
              에브리타임
            </Text>
          </Header>

          {/* 인풋창 및 로그인 버튼 */}

          <Login>
            <TextInputs
              Text={LoginText}
              setText={setLoginText}
              password={false}
              holder={"아이디"}
            />
            <TextInputs
              Text={RegisterText}
              setText={setRegisterText}
              password={true}
              holder={"비밀번호"}
            />

            <TouchableOpacity style={styles.LoginButton}>
              <Text style={{ color: "black", fontWeight: "bold" }}>
                에브리타임 로그인
              </Text>
            </TouchableOpacity>

            {/* 아이디찾기 버튼 및 회원가입 */}

            <TouchableOpacity style={{ marginTop: 20 }}>
              <Text style={{ color: "#595959", fontWeight: "bold" }}>
                아이디/비밀번호 찾기
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{ marginTop: 10 }}
              onPress={() => navigation.push("register")}
            >
              <Text
                style={{ color: "white", fontWeight: "bold", fontSize: 15 }}
              >
                회원가입
              </Text>
            </TouchableOpacity>
          </Login>

          {/* 푸터 */}

          <Footer>
            <Text
              style={[
                {
                  color: "darkgray",
                },
                styles.FooterText,
              ]}
            >
              개인정보 처리방침
            </Text>
            <Text style={styles.FooterText}>문의하기</Text>
            <Text style={styles.FooterText}>이용약관</Text>
          </Footer>
        </Screen>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  TextInputs: {
    width: "80%",
    height: 40,
    backgroundColor: "#242424",
    borderRadius: 30,
    marginBottom: 10,
    paddingHorizontal: 20,
    color: "white",
  },
  FooterText: {
    color: "gray",
    marginHorizontal: 10,
    fontWeight: "bold",
    fontSize: 12,
  },
  LoginButton: {
    backgroundColor: "#DE5549",
    borderRadius: 30,
    width: "80%",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
});
