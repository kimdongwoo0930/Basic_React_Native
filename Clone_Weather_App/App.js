import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";

// ScrollView를 사용하면 style이 적용이 안되기 때문에 contentContainerStyle을 사용해줘야 한다.
// 그리고 scrollview에는 flex가 적용되지 않기떄문에 제거 해야한다.
const windowWidth = Dimensions.get("window").width;

const App = () => {
  const API_KEY = "784ab24ff2ed5d94d4288abed9e25d13";

  const icons = {
    Clouds: "cloudy",
    Clear: "day-sunny",
    Atmosphere: "cloudy-gusts",
    Snow: "snow",
    Rain: "rains",
    Drizzle: "rain",
    Thunderstorm: "lightning",
  };

  const [city, setcity] = useState("Loading...");
  const [days, setdays] = useState([]);
  const [ok, setok] = useState(true);

  const ask = async () => {
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
    console.log(location);
    setcity(location[0].region);
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=alerts&appid=${API_KEY}&units=metric`
    );
    const json = await response.json();
    setdays(json.daily);
  };

  useEffect(() => {
    ask();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.City}>
        <Text style={styles.CityName}>{city}</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.Weather}
        pagingEnabled={true} // 스크롤화면을 자유롭게 할수 없게 제어
        showsHorizontalScrollIndicator={false} // 가로 스크롤 제거
      >
        {days.length === 0 ? (
          <View style={{ ...styles.Day, alignItems: "center" }}>
            <ActivityIndicator
              color={"white"}
              size={"large"}
              style={{ marginTop: 10 }}
            />
          </View>
        ) : (
          days.map((day, index) => (
            <View key={index} style={styles.Day}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Text style={styles.temp}>
                  {parseFloat(day.temp.day).toFixed(1)}
                </Text>
                <Fontisto
                  name={icons[day.weather[0].main]}
                  size={68}
                  color="white"
                />
              </View>

              <Text style={styles.description}>{day.weather[0].main}</Text>
              <Text style={styles.tinyText}>{day.weather[0].description}</Text>
            </View>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "tomato",
  },
  City: {
    flex: 1.2,
    justifyContent: "center",
    alignItems: "center",
  },
  CityName: {
    fontSize: 48,
    color: "white",
    fontWeight: "500",
  },
  Day: {
    width: windowWidth,
  },
  temp: {
    marginTop: 30,
    fontSize: 100,
    color: "white",
    fontWeight: "500",
    marginLeft: 20,
  },
  description: {
    marginTop: -30,
    fontSize: 40,
    color: "white",
    marginLeft: 30,
    fontWeight: "400",
  },
  tinyText: {
    fontSize: 20,
    color: "white",
    marginLeft: 30,
    marginTop: -10,
    fontWeight: "500",
  },
});

export default App;
