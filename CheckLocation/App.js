import * as Location from "expo-location";
import {
  ActivityIndicator,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useEffect, useState } from "react";

const App = () => {
  const [ok, setok] = useState(true);
  const [FirstPoint, setFirstPoint] = useState({});
  const [SecondPoint, setSecondPoint] = useState({});
  const [City, setCity] = useState("Loading....");

  const StartCheck = async () => {
    const { granted } = Location.requestForegroundPermissionsAsync();
    if (!granted) {
      setok(false);
    }
    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = await Location.reverseGeocodeAsync(
      { latitude, longitude },
      { useGoogleMaps: false }
    );
    setCity(location[0].region);
  };

  const CheckLocation = async (point) => {
    const {
      coords: { latitude, longitude, altitude },
    } = await Location.getCurrentPositionAsync({ accuracy: 5 });
    const location = {
      lat: latitude,
      lon: longitude,
      alt: altitude,
    };
    point === 1 ? setSecondPoint(location) : setFirstPoint(location);
  };

  useEffect(() => {
    StartCheck();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.City}>{City}</Text>
      </View>
      <View style={styles.main}>
        <View style={styles.checkbtn}>
          <TouchableOpacity onPress={() => CheckLocation(0)}>
            <Text style={styles.pointbtn}>First Point</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => CheckLocation(1)}>
            <Text style={styles.pointbtn}>Second Point</Text>
          </TouchableOpacity>
        </View>
        {Object.keys(FirstPoint).length === 0 ? (
          <View style={{ ...styles.pointView, backgroundColor: "black" }}>
            <ActivityIndicator
              color={"white"}
              size={"large"}
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          <View style={{ ...styles.pointView, backgroundColor: "white" }}>
            <Text style={styles.infoText}>First Point</Text>
            <Text style={styles.infoText}>
              ---------------------------------
            </Text>

            <Text style={styles.infoText}>경도 : {FirstPoint["lat"]}</Text>
            <Text style={styles.infoText}>위도 : {FirstPoint["lon"]}</Text>
            <Text style={styles.infoText}>고도: {FirstPoint["alt"]}</Text>
          </View>
        )}
        {Object.keys(SecondPoint).length === 0 ? (
          <View style={{ ...styles.pointView, backgroundColor: "black" }}>
            <ActivityIndicator
              color={"white"}
              size={"large"}
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          <View style={{ ...styles.pointView, backgroundColor: "white" }}>
            <Text style={styles.infoText}>Second Point</Text>
            <Text style={styles.infoText}>
              ---------------------------------
            </Text>
            <Text style={styles.infoText}>경도 : {SecondPoint["lat"]}</Text>
            <Text style={styles.infoText}>위도 : {SecondPoint["lon"]}</Text>
            <Text style={styles.infoText}>고도: {SecondPoint["alt"]}</Text>
          </View>
        )}
      </View>
      <View style={styles.bottom}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
  },
  header: {
    flex: 1,
  },
  City: {
    textAlign: "center",
    color: "white",
    fontSize: 48,
    marginTop: 30,
  },
  main: {
    flex: 5,
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "white",
  },
  checkbtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
  pointbtn: {
    marginVertical: 50,
    color: "white",
    fontSize: 20,
    marginHorizontal: 30,
    fontWeight: "500",
  },
  infoText: {
    color: "black",
    borderRadius: 20,
    marginHorizontal: 50,
    fontSize: 20,
    fontWeight: "400",
  },
  pointView: {
    marginHorizontal: 30,
    borderRadius: 15,
    marginVertical: 20,
  },
});

export default App;
