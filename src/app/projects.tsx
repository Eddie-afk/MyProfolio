import { Ionicons } from "@expo/vector-icons";
import {
  Alert,
  Image,
  Linking,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

// 1. Cambia los nombres de archivo por tus imágenes guardadas en assets/images/
const WEB_PROJECTS = [
  {
    id: "1",
    title: "My_Website",
    description:
      "The project is about one of my favorite video games: *Five Nights at Freddy's 2*, developed by Scott Cawthon. The site provides information about the game and includes a gameplay video at the end.",
    image: require("../../assets/images/fnaf2.png"),
    technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    url: "https://eddie-afk.github.io/my_website/",
  },
];

export default function ProjectsScreen() {
  const openWebsite = async (url: string) => {
    try {
      const supported = await Linking.canOpenURL(url);
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert("Error", "Cannot open this URL: " + url);
      }
    } catch (error) {
      console.error("Error opening URL:", error);
    }
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.headerTitle}>Web Projects</Text>
      <Text style={styles.headerDesc}>
        This is the only project that is somewhat more concrete, because the
        others are not yet finished.
      </Text>

      {WEB_PROJECTS.map((project, index) => (
        <View key={project.id} style={styles.projectSection}>
          <View style={styles.sectionHeader}>
            <Text style={styles.projectNumber}>PROJECT 0{index + 1}</Text>
            <View style={styles.liveBadge}>
              <View style={styles.liveDot} />
              <Text style={styles.liveText}>WEB</Text>
            </View>
          </View>

          <View style={styles.card}>
            <TouchableOpacity
              activeOpacity={0.85}
              onPress={() => openWebsite(project.url)}
            >
              {/* Nota: Aquí ya no lleva {{ uri: ... }}, solo {project.image} */}
              <Image source={project.image} style={styles.cardImage} />
            </TouchableOpacity>

            <View style={styles.cardBody}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => openWebsite(project.url)}
                style={styles.titleRow}
              >
                <Text style={styles.cardTitle}>{project.title}</Text>
                <Ionicons name="open-outline" size={20} color="#E50914" />
              </TouchableOpacity>

              <Text style={styles.cardDesc}>{project.description}</Text>

              <View style={styles.tagsRow}>
                {project.technologies.map((tech, i) => (
                  <View key={i} style={styles.tag}>
                    <Text style={styles.tagText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0A0A0A",
  },
  content: {
    padding: 20,
    paddingBottom: 40,
  },
  headerTitle: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#FFFFFF",
    marginBottom: 6,
  },
  headerDesc: {
    color: "#A3A3A3",
    fontSize: 14,
    marginBottom: 24,
    lineHeight: 20,
  },
  projectSection: {
    marginBottom: 28,
  },
  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
    paddingHorizontal: 4,
  },
  projectNumber: {
    color: "#E50914",
    fontSize: 12,
    fontWeight: "bold",
    letterSpacing: 1.5,
  },
  liveBadge: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#141414",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#262626",
    gap: 5,
  },
  liveDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: "#E50914",
  },
  liveText: {
    color: "#CCCCCC",
    fontSize: 10,
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#141414",
    borderRadius: 16,
    overflow: "hidden",
    borderWidth: 1,
    borderColor: "#262626",
    borderLeftWidth: 4,
    borderLeftColor: "#E50914",
  },
  cardImage: {
    width: "100%",
    height: 180,
    resizeMode: "cover",
  },
  cardBody: {
    padding: 18,
  },
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 8,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#FFFFFF",
    textDecorationLine: "underline",
    textDecorationColor: "#E50914",
    flex: 1,
    marginRight: 8,
  },
  cardDesc: {
    fontSize: 14,
    color: "#B3B3B3",
    lineHeight: 20,
    marginBottom: 14,
  },
  tagsRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  tag: {
    backgroundColor: "rgba(229, 9, 20, 0.15)",
    borderColor: "#E50914",
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },
  tagText: {
    color: "#FF4D4D",
    fontSize: 12,
    fontWeight: "600",
  },
});
