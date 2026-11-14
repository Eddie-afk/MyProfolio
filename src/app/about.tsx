import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

const SKILLS = [
  {
    category: "Frontend & Web",
    items: ["HTML", "JavaScript", "React"],
  },
  {
    category: "Backend & Databases",
    items: ["Node.js", "Firebase", "MONGODB", "MySQL"],
  },
  {
    category: "Tools & Workflow",
    items: ["GitHub", "VS Code", "Figma"],
  },
];

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* PERSONAL PROFILE CARD */}
      <View style={styles.profileCard}>
        <Image
          source={require("../../assets/images/Eddie-removebg-preview.png")}
          style={styles.avatar}
        />
        <Text style={styles.name}>Eddie Burciaga</Text>
        <Text style={styles.role}>
          Software Engineering Student / Junior Developer
        </Text>
        <Text style={styles.location}>📍 Mexico</Text>
      </View>

      {/* PROFESSIONAL SUMMARY */}
      <Text style={styles.sectionTitle}>Professional Summary</Text>
      <View style={styles.box}>
        <Text style={styles.bioText}>
          Engineering student at the Universidad de la Laguna in Durango,
          passionate about software development and the management of SQL and
          NoSQL databases.
        </Text>
      </View>

      {/* TECHNOLOGIES & TOOLS */}
      <Text style={styles.sectionTitle}>Technologies & Tools</Text>
      {SKILLS.map((group, idx) => (
        <View key={idx} style={styles.skillGroup}>
          <Text style={styles.categoryTitle}>{group.category}</Text>
          <View style={styles.tagsWrapper}>
            {group.items.map((tech, index) => (
              <View key={index} style={styles.tag}>
                <Text style={styles.tagText}>{tech}</Text>
              </View>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#0A0A0A" },
  content: { padding: 20, paddingBottom: 40 },
  profileCard: {
    alignItems: "center",
    backgroundColor: "#141414",
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: "#262626",
    marginBottom: 24,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: "#E50914",
    marginBottom: 14,
  },
  name: { fontSize: 24, fontWeight: "bold", color: "#FFFFFF", marginBottom: 4 },
  role: {
    fontSize: 15,
    color: "#E50914",
    fontWeight: "600",
    marginBottom: 6,
    textAlign: "center",
  },
  location: { fontSize: 13, color: "#A3A3A3" },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 12,
  },
  box: {
    backgroundColor: "#141414",
    padding: 16,
    borderRadius: 12,
    borderLeftWidth: 4,
    borderLeftColor: "#E50914",
    marginBottom: 24,
  },
  bioText: { color: "#CCCCCC", fontSize: 14, lineHeight: 22 },
  skillGroup: {
    backgroundColor: "#141414",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#222222",
  },
  categoryTitle: {
    color: "#E50914",
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 10,
  },
  tagsWrapper: { flexDirection: "row", flexWrap: "wrap", gap: 8 },
  tag: {
    backgroundColor: "#1F1F1F",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#333333",
  },
  tagText: { color: "#FFFFFF", fontSize: 13 },
});
