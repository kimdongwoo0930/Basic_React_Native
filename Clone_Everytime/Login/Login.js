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

export default ({ navigation }) => {
  const [LoginText, setLoginText] = useState("");
  const [RegisterText, setRegisterText] = useState("");

  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <View
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "#121212",
            alignItems: "center",
          }}
        >
          {/*  아이콘및 글자  */}

          <View
            style={{
              alignItems: "center",
              paddingTop: 50,
            }}
          >
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
          </View>

          {/* 인풋창 및 로그인 버튼 */}

          <View style={{ width: "100%", alignItems: "center", paddingTop: 50 }}>
            <TextInput
              placeholderTextColor={"#535353"}
              placeholder={"아이디"}
              value={LoginText}
              style={styles.TextInputs}
              onChangeText={setLoginText}
              cursorColor={"#DE5549"}
              selectionColor={"#DE5549"}
              autoCapitalize={"none"}
            />
            <TextInput
              placeholderTextColor={"#535353"}
              placeholder={"비밀번호"}
              value={RegisterText}
              style={styles.TextInputs}
              onChangeText={setRegisterText}
              cursorColor={"#DE5549"}
              selectionColor={"#DE5549"}
              autoCapitalize={"none"}
              secureTextEntry={true}
            />
            <TouchableOpacity
              style={{
                backgroundColor: "#DE5549",
                borderRadius: 30,
                width: "80%",
                height: 40,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={{ color: "black", fontWeight: "bold" }}>
                에브리타임 로그인
              </Text>
            </TouchableOpacity>
          </View>

          {/* 아이디찾기 버튼 및 회원가입 */}

          <View style={{ alignItems: "center" }}>
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
          </View>

          {/* 푸터 */}

          <View
            style={{ flexDirection: "row", alignItems: "center", top: "85%" }}
          >
            <Text
              style={{
                color: "darkgray",
                marginHorizontal: 10,
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              개인정보 처리방침
            </Text>
            <Text
              style={{
                color: "gray",
                marginHorizontal: 10,
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              문의하기
            </Text>
            <Text
              style={{
                color: "gray",
                marginHorizontal: 10,
                fontWeight: "bold",
                fontSize: 12,
              }}
            >
              이용약관
            </Text>
          </View>
        </View>
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
});
