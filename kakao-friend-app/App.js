import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./src/header";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Profile from "./src/Profile";
import { friendProfiles, myProfile } from "./src/data";
import Margin from "./src/Margin";
import Division from "./src/Division";
import FriendSection from "./src/FriendSection";
import FriendList from "./src/FriendList";
import { useState } from "react";
import TabBar from "./src/TabBar";

export default function App() {
  const [isOpened, setIsOpened] = useState(true);
  const [selectedTabIdx, setSelectedTabIdx] = useState(0);

  const onPressArrow = () => {
    setIsOpened(!isOpened);
  };

  const ItemSeparatorComponent = () => <Margin height={13} />;
  const renderItem = ({ item }) => (
    <View>
      <Profile
        uri={item.uri}
        name={item.name}
        introduction={item.introduction}
        isMe={false}
      />
    </View>
  );

  const ListHeaderComponent = () => (
    <View style={{ backgroundColor: "white" }}>
      <Header />

      <Margin height={10} />

      <Profile
        uri={myProfile.uri}
        name={myProfile.name}
        introduction={myProfile.introduction}
        isMe={true}
      />

      <Margin height={15} />

      <Division />

      <Margin height={12} />

      <FriendSection
        FriendProfileLen={friendProfiles.length}
        onPress={onPressArrow}
        isOpened={isOpened}
      />

      <Margin height={5} />
    </View>
  );

  const ListFooterComponent = () => <Margin height={10} />;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={isOpened ? friendProfiles : []}
          contentContainerStyle={{ paddingHorizontal: 15 }}
          keyExtractor={(_, index) => index}
          ItemSeparatorComponent={ItemSeparatorComponent}
          renderItem={renderItem}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={ListHeaderComponent}
          ListFooterComponent={ListFooterComponent}
          showsVerticalScrollIndicator={false}
        />
        <TabBar
          selectedTabIdx={selectedTabIdx}
          setSelectTabIdx={setSelectedTabIdx}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );

  // return (
  //   <SafeAreaProvider style={styles.container}>
  //     <SafeAreaView style={{ flex: 1, paddingHorizontal: 15 }}>
  //       <FriendList data={friendProfiles} isOpened={isOpened} />
  //     </SafeAreaView>
  //   </SafeAreaProvider>
  // );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
