import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  const APP_URL = "https://www.damdam.store/main";
  return (
    <WebView
      style={styles.container}
      originWhitelist={["*"]}
      source={{ uri: APP_URL }}
    />
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
