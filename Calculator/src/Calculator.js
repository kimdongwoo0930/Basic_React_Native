import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";
import { postfix, countbracket } from "./postfix_notation";
import Toast from "react-native-toast-message";

const Calculator = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [InputNum, setInpuNum] = useState("");

  const showerrorToast = () => {
    Toast.show({
      type: "error",
      text1: "잘못된 수식",
      text2: "수식을 확인해주세요.",
    });
  };

  const showNoneReadyToast = () => {
    Toast.show({
      type: "error",
      text1: "아직 준비중입니다.",
      text2: "금방 준비해드리겠습니다.",
    });
  };

  const Calculate = (f) => {
    if (!InputNum === "" && countbracket(f)) {
      const result = postfix(f);
      setInpuNum(result);
    } else if (InputNum === "") {
    } else {
      showerrorToast();
    }
  };

  return (
    <LinearGradient
      style={styles.container}
      colors={["#484c4f", "#3a3e41", "#24282b"]}
    >
      <View style={styles.header}>
        <Text style={{ ...styles.formText, fontSize: 14, marginTop: 30 }}>
          2x4
        </Text>
        <Text style={{ ...styles.formText, fontSize: 14 }}>8%2(2+2)</Text>
        <Text style={{ ...styles.formText, fontSize: 18 }}>
          (1+27+25)x1,320754716981
        </Text>
        <Text style={{ ...styles.formText, fontSize: 20 }}>70 + 30</Text>
        <Text
          style={{
            ...styles.formText,
            fontSize: 30,
            color: "#a5aead",
            fontWeight: "800",
            marginTop: 10,
          }}
          numberOfLines={1}
        >
          {InputNum}
        </Text>
      </View>
      <View style={styles.body}>
        <View style={{ ...styles.themeSwitch, marginLeft: 20 }}>
          <Switch
            trackColor={{ false: "#767577", true: "#767577" }}
            thumbColor={"#f4f3f4"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ marginLeft: 10 }}
          />
          <Text style={{ color: "#747879" }}>SWITCH TO LIGHT THEME</Text>
        </View>
        <View style={{ ...styles.btnArea }}>
          <View style={{ ...styles.numberbtn }}>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#fab82a",
                }}
                onPress={() => setInpuNum("")}
              >
                <Text
                  style={{ color: "white", fontSize: 25, fontWeight: "700" }}
                >
                  C
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#4f473e",
                }}
                onPress={() => {
                  if (
                    InputNum === "" ||
                    isNaN(InputNum.charAt(InputNum.length - 1))
                  ) {
                    setInpuNum(InputNum + "(");
                  } else {
                    setInpuNum(InputNum + "×(");
                  }
                }}
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>(</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#4f473e",
                }}
                onPress={() => {
                  if (isNaN(InputNum.charAt(InputNum.length - 1))) {
                    showerrorToast();
                  } else {
                    setInpuNum(InputNum + ")");
                  }
                }}
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>)</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#4f473e",
                }}
                onPress={() => showNoneReadyToast()}
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>√</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#4f473e",
                }}
                onPress={() => showNoneReadyToast()}
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#4f473e",
                }}
                onPress={() => showNoneReadyToast()}
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>±</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "7")}
              >
                <Text style={{ ...styles.numtext }}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "8")}
              >
                <Text style={{ ...styles.numtext }}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "9")}
              >
                <Text style={{ ...styles.numtext }}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "4")}
              >
                <Text style={{ ...styles.numtext }}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "5")}
              >
                <Text style={{ ...styles.numtext }}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "6")}
              >
                <Text style={{ ...styles.numtext }}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "1")}
              >
                <Text style={{ ...styles.numtext }}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "2")}
              >
                <Text style={{ ...styles.numtext }}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "3")}
              >
                <Text style={{ ...styles.numtext }}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + ".")}
              >
                <Text style={{ ...styles.numtext }}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
                onPress={() => setInpuNum(InputNum + "0")}
              >
                <Text style={{ ...styles.numtext }}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                  backgroundColor: "#2b2c30",
                }}
                onPress={() => setInpuNum(InputNum.slice(0, -1))}
              >
                <Feather name="delete" size={24} color="#49494b" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ ...styles.keybtn }}>
            <TouchableOpacity
              style={{ ...styles.keyArea }}
              onPress={() => setInpuNum(InputNum + "×")}
            >
              <Text style={styles.btnstyle}>×</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.keyArea }}
              onPress={() => setInpuNum(InputNum + "÷")}
            >
              <Text style={styles.btnstyle}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.keyArea }}
              onPress={() => setInpuNum(InputNum + "-")}
            >
              <Text style={styles.btnstyle}>－</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.keyArea }}
              onPress={() => setInpuNum(InputNum + "+")}
            >
              <Text style={styles.btnstyle}>＋</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.keyArea, flex: 2, backgroundColor: "#7d33e5" }}
              onPress={() => Calculate(InputNum)}
            >
              <Text
                style={{ ...styles.btnstyle, color: "white", fontSize: 50 }}
              >
                =
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Toast />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#08090A",
  },
  header: {
    flex: 0.5,
  },
  body: {
    flex: 1.2,
  },
  formText: {
    color: "#747879",
    textAlign: "right",
    marginRight: 30,
    marginTop: 3,
  },
  themeSwitch: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    alignContent: "center",
  },
  btnArea: {
    flex: 6,
    flexDirection: "row",
    marginHorizontal: 15,
    marginBottom: 20,
  },
  numberbtn: {
    flex: 3,
  },
  keybtn: {
    flex: 1,
    marginRight: 10,
  },
  keyArea: {
    flex: 1,
    backgroundColor: "#4a355e",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginVertical: 5,
    marginHorizontal: 5,
    elevation: 20,
  },
  btnstyle: {
    color: "#885fa8",
    fontSize: 20,
    fontWeight: "400",
  },
  numbtn: {
    backgroundColor: "#3a3b3f",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 40,
    marginVertical: 5,
    marginHorizontal: 5,
    elevation: 20,
  },
  numtext: {
    color: "#b3b6b2",
    fontSize: 25,
  },
});

export default Calculator;
