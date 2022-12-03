import { StyleSheet, Text, SafeAreaView } from "react-native";
import Calculator from "./src/Calculator";
import React from "react";

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
