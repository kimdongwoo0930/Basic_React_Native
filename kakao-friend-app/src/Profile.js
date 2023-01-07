import { Text, View, Image } from "react-native";
import Margin from "./Margin";

export default ({ uri, name, introduction, isMe }) => {
  const size = isMe ? 50 : 40;
  const Weight = isMe ? "bold" : undefined;
  return (
    <View style={{ flexDirection: "row" }}>
      <Image
        source={{ uri }}
        style={{ width: size, height: size, borderRadius: size * 0.4 }}
      />
      <View style={{ justifyContent: "center", marginLeft: 10 }}>
        <Text style={{ fontWeight: Weight, fontSize: isMe ? 16 : 12 }}>
          {name}
        </Text>
        {!!introduction && (
          <View>
            <Margin height={isMe ? 6 : 2} />
            <Text style={{ fontSize: isMe ? 12 : 11, color: "gray" }}>
              {introduction}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};
