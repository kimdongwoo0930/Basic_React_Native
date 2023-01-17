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

export default ({ navigation }) => {
  const [LoginText, setLoginText] = useState("");
  const [passwordText, setpasswordText] = useState("");
  const [Checkpassword, setCheckpassword] = useState("");
  const [nickname, setNickname] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View style={{ width: "100%", height: "100%" }}>
          {/*  헤더부분 나가기 버튼 및 회원가입 */}
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
              <Text style={styles.texts}>아이디</Text>
              <TextInput
                value={LoginText}
                placeholder={"아이디를 입력해주세요."}
                style={styles.Inputs}
                onChangeText={setLoginText}
              />

              <Text style={styles.texts}>비밀번호</Text>
              <TextInput
                value={passwordText}
                placeholder={"비밀번호를 입력해주세요."}
                style={styles.Inputs}
                onChangeText={setpasswordText}
                secureTextEntry={true}
              />

              <Text style={styles.texts}>비밀번호 확인</Text>
              <TextInput
                value={Checkpassword}
                placeholder={"비밀번호 확인"}
                style={styles.Inputs}
                onChangeText={setCheckpassword}
                secureTextEntry={true}
              />

              <Text style={styles.texts}>닉네임</Text>
              <TextInput
                value={nickname}
                placeholder={"사용할 닉네임을 입력해주세요."}
                onChangeText={setNickname}
                style={styles.Inputs}
              />
            </View>
            {/*  회원가입 버튼  */}
            <TouchableOpacity
              style={{
                backgroundColor: "#BE271D",
                borderRadius: 15,
                width: "90%",
                alignItems: "center",
                justifyContent: "center",
                height: 40,
              }}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>다음</Text>
            </TouchableOpacity>
          </View>
        </View>
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
});
