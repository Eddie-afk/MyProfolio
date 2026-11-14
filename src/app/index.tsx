import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function HomeScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />

      <View style={styles.iconContainer}>
        <Ionicons name="code-slash" size={50} color="#E50914" />
      </View>

      <Text style={styles.badge}>PROFESSIONAL PORTFOLIO</Text>
      <Text style={styles.title}>
        Hi, I'm{"\n"}
        <Text style={styles.redText}>Eddie Burciaga</Text>
      </Text>

      <Text style={styles.subtitle}>
        Software Developer. Welcome to my digital space showcasing my projects
        and technical skills.
      </Text>

      <TouchableOpacity
        style={styles.enterButton}
        onPress={() => router.push("/about")}
      >
        <Text style={styles.buttonText}>Explore Portfolio</Text>
        <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
    justifyContent: "center",
    paddingHorizontal: 28,
  },
  iconContainer: {
    width: 90,
    height: 90,
    borderRadius: 24,
    backgroundColor: "#141414",
    borderWidth: 1,
    borderColor: "#E50914",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
  },
  badge: {
    color: "#E50914",
    fontSize: 13,
    fontWeight: "bold",
    letterSpacing: 2,
    marginBottom: 8,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 40,
    fontWeight: "bold",
    lineHeight: 46,
    marginBottom: 16,
  },
  redText: {
    color: "#E50914",
  },
  subtitle: {
    color: "#A3A3A3",
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 40,
  },
  enterButton: {
    backgroundColor: "#E50914",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 16,
    borderRadius: 12,
    gap: 10,
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "bold",
  },
});
