import { ScrollView, View } from "react-native";
import Profile from "./Profile";
import React from "react";
import Margin from "./Margin";

export default (props) => {
  return props.isOpened ? (
    <ScrollView showsVerticalScrollIndicator={false}>
      {props.data.map((item, index) => (
        <View key={index}>
          <Profile
            key={index}
            uri={item.uri}
            name={item.name}
            introduction={item.introduction}
          />
          <Margin height={13} />
        </View>
      ))}
    </ScrollView>
  ) : null;
};
