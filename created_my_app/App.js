import { StyleSheet ,View } from "react-native";
import { useState } from "react";
import CustomHook from "/CustomHook";

export default function App() {
    const [isTrue, setIsTrue] = useState(true);
    return (
        <View style={styles.container}>
            {/*<StateWithClassComponet />*/}
            {/*<StateWithFunctionalComponet />*/}
            {/*{isTrue ? <UseEffectWithClassComponent /> : null}*/}
            {/*{isTrue ? <UseEffectWithFunctionalComponent /> : null}*/}
            {/*<Button title="toggle" onPress={() => setIsTrue(!isTrue)} />*/}
            <CustomHook />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
});
