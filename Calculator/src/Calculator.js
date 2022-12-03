import { StyleSheet, Text, View, Switch, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { Feather } from "@expo/vector-icons";

const Calculator = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const [InputNum, setInpuNum] = useState("");

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
            fontSize: 50,
            color: "#a5aead",
            fontWeight: "800",
            marginTop: 10,
          }}
        >
          = 100
        </Text>
      </View>
      <View style={styles.body}>
        <View style={styles.themeSwitch}>
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
        <View style={styles.btnArea}>
          <View
            style={{ ...styles.numberbtn, marginLeft: 20, marginBottom: 20 }}
          >
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#fab82a",
                }}
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
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>(</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#4f473e",
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
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>√</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#4f473e",
                }}
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>%</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.keyArea,
                  flex: 1,
                  backgroundColor: "#4f473e",
                }}
              >
                <Text style={{ color: "#a88e67", fontSize: 20 }}>±</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>7</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>8</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>9</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>4</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>5</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>6</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>1</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>2</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>3</Text>
              </TouchableOpacity>
            </View>
            <View style={{ flex: 1, flexDirection: "row" }}>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>.</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                }}
              >
                <Text style={{ ...styles.numtext }}>0</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.numbtn,
                  backgroundColor: "#2b2c30",
                }}
              >
                <Feather name="delete" size={24} color="#49494b" />
              </TouchableOpacity>
            </View>
          </View>
          <View style={{ ...styles.keybtn, marginRight: 20, marginBottom: 20 }}>
            <TouchableOpacity style={{ ...styles.keyArea }}>
              <Text style={styles.btnstyle}>×</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.keyArea }}>
              <Text style={styles.btnstyle}>÷</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.keyArea }}>
              <Text style={styles.btnstyle}>－</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ ...styles.keyArea }}>
              <Text style={styles.btnstyle}>＋</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ ...styles.keyArea, flex: 2, backgroundColor: "#7d33e5" }}
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
    borderRadius: 40,
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
