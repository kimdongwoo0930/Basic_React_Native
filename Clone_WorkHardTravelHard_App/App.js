import { StatusBar } from "expo-status-bar";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from "react-native";
import { theme } from "./colors";
import { Fontisto } from "@expo/vector-icons";

const STORAGE_KEY = "@toDos";

const App = () => {
  const [working, setworking] = useState(true);
  const [text, settext] = useState("");
  const [toDos, settoDos] = useState({});

  useEffect(() => {
    loadtoDo();
  }, []);

  const travel = () => setworking(false);
  const work = () => setworking(true);
  const onChangeText = (payload) => settext(payload);
  const savetoDo = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadtoDo = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    s !== null ? settoDos(JSON.parse(s)) : null;
  };
  const addTodo = async () => {
    if (text === "") {
      return;
    }
    // save to do
    const newTodos = { ...toDos, [Date.now()]: { text, working } };
    settoDos(newTodos);
    await savetoDo(newTodos);
    settext("");
  };

  const deleteTodo = async (key) => {
    Alert.alert("Delete To Do?", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "I'm Sure",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          settoDos(newToDos);
          savetoDo(newToDos);
        },
      },
    ]);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{ ...styles.btnText, color: working ? theme.grey : "white" }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
      <TextInput
        onSubmitEditing={addTodo}
        returnKeyType={"done"}
        onChangeText={onChangeText}
        placeholder={working ? "Add aa To Do" : "Where do you want to go?"}
        style={styles.input}
      />
      <ScrollView>
        {Object.keys(toDos).map((key) =>
          toDos[key].working === working ? (
            <View key={key} style={styles.toDo}>
              <Text style={styles.toDoText}>{toDos[key].text}</Text>
              <TouchableOpacity onPress={() => deleteTodo(key)}>
                <Fontisto name="trash" size={18} color={theme.grey} />
              </TouchableOpacity>
            </View>
          ) : null
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  toDo: {
    backgroundColor: theme.toDobg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default App;
