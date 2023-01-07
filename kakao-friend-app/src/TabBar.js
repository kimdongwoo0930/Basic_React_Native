import { TouchableOpacity, View } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { getBottomSpace } from "react-native-iphone-x-helper";

const Bottomspace = getBottomSpace();

const TabButton = ({
  isSelected,
  onPress,
  activeIconName,
  inactiveIconName,
  isIconFontisto,
  isIconIonicons,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: 10,
      }}
    >
      {isIconFontisto && (
        <Fontisto
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
      {isIconIonicons && (
        <Ionicons
          name={isSelected ? activeIconName : inactiveIconName}
          size={24}
          color="black"
        />
      )}
    </TouchableOpacity>
  );
};

export default ({ selectedTabIdx, setSelectTabIdx }) => {
  return (
    <View
      style={{
        width: "100%",
        flexDirection: "row",
        paddingBottom: Bottomspace,
        borderTopWidth: 0.5,
        borderTopColor: "grey",
      }}
    >
      <TabButton
        isSelected={selectedTabIdx === 0}
        onPress={() => setSelectTabIdx(0)}
        activeIconName={"person"}
        inactiveIconName={"person-outline"}
        isIconIonicons
      />
      <TabButton
        isSelected={selectedTabIdx === 1}
        onPress={() => setSelectTabIdx(1)}
        activeIconName={"chatbubble"}
        inactiveIconName={"chatbubble-outline"}
        isIconIonicons
      />
      <TabButton
        isSelected={selectedTabIdx === 2}
        onPress={() => setSelectTabIdx(2)}
        activeIconName={"pricetag"}
        inactiveIconName={"pricetag-outline"}
        isIconIonicons
      />
      <TabButton
        isSelected={selectedTabIdx === 3}
        onPress={() => setSelectTabIdx(3)}
        activeIconName={"add-circle"}
        inactiveIconName={"add-circle-outline"}
        isIconIonicons
      />
    </View>
  );
};
