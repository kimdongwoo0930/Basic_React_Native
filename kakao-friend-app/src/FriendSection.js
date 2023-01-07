import { Text, TouchableOpacity, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

export default (props) => {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={{ color: "gray" }}>친구 {props.FriendProfileLen}</Text>

      <TouchableOpacity onPress={props.onPress}>
        <MaterialIcons
          name={props.isOpened ? "keyboard-arrow-up" : "keyboard-arrow-down"}
          size={24}
          color="lightgray"
        />
      </TouchableOpacity>
    </View>
  );
};
