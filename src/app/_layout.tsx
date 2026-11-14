import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerStyle: { backgroundColor: "#0A0A0A" },
        headerTintColor: "#FFFFFF",
        headerTitleStyle: { fontWeight: "bold" },
        tabBarStyle: {
          backgroundColor: "#121212",
          borderTopColor: "#262626",
          height: 60,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#E50914",
        tabBarInactiveTintColor: "#737373",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? "#E50914" : "#737373"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="about"
        options={{
          title: "About Me",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? "#E50914" : "#737373"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="projects"
        options={{
          title: "Projects",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "folder-open" : "folder-open-outline"}
              size={24}
              color={focused ? "#E50914" : "#737373"}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="contact"
        options={{
          title: "Contact",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "mail" : "mail-outline"}
              size={24}
              color={focused ? "#E50914" : "#737373"}
            />
          ),
        }}
      />
    </Tabs>
  );
}
