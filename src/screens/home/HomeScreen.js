import { View, Text, TextInput, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

const HomeScreen = ({ onSelectMentor }) => {
  const mentors = [
    { id: 1, name: "Rahul Sharma", expertise: "Career Guidance", rating: 4.8 },
    { id: 2, name: "Anjali Mehta", expertise: "Software Engineering", rating: 4.7 },
    { id: 3, name: "Vikram Singh", expertise: "Business Strategy", rating: 4.9 },
  ];

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#F9F5FF", padding: 16 }}>
      
      {/* Greeting */}
      <Text style={{ fontSize: 26, fontWeight: "bold", marginBottom: 5 }}>
        Hello 👋
      </Text>
      <Text style={{ color: "#6B7280", marginBottom: 20 }}>
        Find your mentor today
      </Text>

      {/* Search */}
      <TextInput
        placeholder="Search mentors..."
        style={{
          backgroundColor: "#FFFFFF",
          padding: 14,
          borderRadius: 14,
          marginBottom: 20,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 5,
          elevation: 2,
        }}
      />

      {/* Categories */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>
        Categories
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {["Career", "Coding", "Business", "Design"].map((item, index) => (
          <View
            key={index}
            style={{
              backgroundColor: "#EDE9FE",
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 20,
              marginRight: 10,
            }}
          >
            <Text style={{ color: "#6B46C1", fontWeight: "600" }}>
              {item}
            </Text>
          </View>
        ))}
      </ScrollView>

      {/* Top Mentors */}
      <Text
        style={{
          fontSize: 18,
          fontWeight: "bold",
          marginTop: 20,
          marginBottom: 10,
        }}
      >
        Top Mentors
      </Text>

      {mentors.map((mentor) => (
        <TouchableOpacity
          key={mentor.id}
          onPress={() => onSelectMentor(mentor)}
          style={{
            backgroundColor: "#FFFFFF",
            padding: 16,
            borderRadius: 16,
            marginBottom: 12,
            shadowColor: "#000",
            shadowOpacity: 0.05,
            shadowRadius: 8,
            elevation: 3,
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 16,
              marginBottom: 4,
            }}
          >
            {mentor.name}
          </Text>

          <Text style={{ color: "#6B7280", marginBottom: 6 }}>
            {mentor.expertise}
          </Text>

          <Text style={{ color: "#6B46C1", fontWeight: "600" }}>
            ⭐ {mentor.rating}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default HomeScreen;