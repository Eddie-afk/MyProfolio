import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import {
  Alert,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function ContactScreen() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = () => {
    if (!name.trim() || !message.trim()) {
      Alert.alert("Empty Fields", "Please enter your name and a message.");
      return;
    }
    Alert.alert(
      "Message Sent!",
      `Thank you ${name}, I will get back to you soon.`,
    );
    setName("");
    setMessage("");
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>Let's Connect</Text>
      <Text style={styles.subtitle}>
        Have a project in mind or an academic/job opportunity? Feel free to
        reach out through any of the following channels:
      </Text>

      {/* DIRECT CONTACT LINKS */}
      <TouchableOpacity
        style={styles.contactCard}
        onPress={() => Linking.openURL("mailto:your.email@example.com")}
      >
        <Ionicons name="mail" size={26} color="#E50914" />
        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>Email</Text>
          <Text style={styles.contactValue}>eddieburciaga120@gmail.com</Text>
        </View>
        <Ionicons name="open-outline" size={20} color="#737373" />
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.contactCard}
        onPress={() => Linking.openURL("https://github.com/your-username")}
      >
        <Ionicons name="logo-github" size={26} color="#E50914" />
        <View style={styles.contactInfo}>
          <Text style={styles.contactLabel}>GitHub</Text>
          <Text style={styles.contactValue}>https://github.com/Eddie-afk</Text>
        </View>
        <Ionicons name="open-outline" size={20} color="#737373" />
      </TouchableOpacity>

      {/* QUICK MESSAGE FORM */}
      <Text style={styles.formTitle}>Send a Direct Message</Text>
      <View style={styles.formBox}>
        <TextInput
          style={styles.input}
          placeholder="Your name"
          placeholderTextColor="#737373"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={[styles.input, styles.textArea]}
          placeholder="Write your message here..."
          placeholderTextColor="#737373"
          multiline
          numberOfLines={4}
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Send Message</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A" },
  content: { padding: 20, paddingBottom: 40 },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 14,
    color: "#A3A3A3",
    lineHeight: 20,
    marginBottom: 24,
  },
  contactCard: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#141414",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#262626",
  },
  contactInfo: { flex: 1, marginLeft: 14 },
  contactLabel: { color: "#FFFFFF", fontSize: 15, fontWeight: "bold" },
  contactValue: { color: "#A3A3A3", fontSize: 13, marginTop: 2 },
  formTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginTop: 20,
    marginBottom: 12,
  },
  formBox: {
    backgroundColor: "#141414",
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#262626",
  },
  input: {
    backgroundColor: "#0A0A0A",
    color: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#333333",
    borderRadius: 8,
    padding: 12,
    marginBottom: 12,
    fontSize: 14,
  },
  textArea: { height: 90, textAlignVertical: "top" },
  sendButton: {
    backgroundColor: "#E50914",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  sendButtonText: { color: "#FFFFFF", fontWeight: "bold", fontSize: 15 },
});
