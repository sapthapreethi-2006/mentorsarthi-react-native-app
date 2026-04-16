import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";

const MentorDetailScreen = ({ mentor, onBack }) => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [booked, setBooked] = useState(false);
  const [loading, setLoading] = useState(false);

  const timeSlots = ["10:00 AM", "12:00 PM", "3:00 PM", "5:00 PM"];

  const handleBooking = () => {
    if (!selectedSlot) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setBooked(true);
    }, 1500);
  };

  return (
    <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#F9F5FF" }}>
      
      {/* Back Button */}
      <TouchableOpacity onPress={onBack}>
        <Text style={{ color: "#6B46C1", marginBottom: 20, fontWeight: "600" }}>
          ← Back
        </Text>
      </TouchableOpacity>

      {/* Mentor Info Card */}
      <View
        style={{
          backgroundColor: "#FFFFFF",
          padding: 20,
          borderRadius: 16,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 8,
          elevation: 3,
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
          {mentor.name}
        </Text>

        <Text style={{ color: "#6B7280", marginBottom: 10 }}>
          {mentor.expertise}
        </Text>

        <Text style={{ color: "#6B46C1", fontWeight: "600", marginBottom: 10 }}>
          ⭐ {mentor.rating} Rating
        </Text>

        <Text style={{ color: "#6B7280" }}>
          Experienced mentor helping students achieve career goals.
        </Text>
      </View>

      {/* Time Slot Selection */}
      <Text style={{ fontSize: 18, fontWeight: "bold", marginTop: 20, marginBottom: 10 }}>
        Select Time Slot
      </Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {timeSlots.map((slot, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => {
              setSelectedSlot(slot);
              setBooked(false);
            }}
            style={{
              paddingVertical: 10,
              paddingHorizontal: 16,
              borderRadius: 20,
              marginRight: 10,
              backgroundColor:
                selectedSlot === slot ? "#6B46C1" : "#EDE9FE",
            }}
          >
            <Text
              style={{
                color: selectedSlot === slot ? "#fff" : "#6B46C1",
                fontWeight: "600",
              }}
            >
              {slot}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {/* Book Button */}
      <TouchableOpacity
        onPress={handleBooking}
        disabled={!selectedSlot || loading}
        style={{
          backgroundColor: selectedSlot ? "#6B46C1" : "#C4B5FD",
          padding: 16,
          borderRadius: 12,
          marginTop: 30,
          opacity: loading ? 0.7 : 1,
        }}
      >
        <Text
          style={{
            color: "#fff",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 16,
          }}
        >
          {loading ? "Booking..." : "Book Session"}
        </Text>
      </TouchableOpacity>

      {/* Validation Message */}
      {!selectedSlot && (
        <Text style={{ marginTop: 10, color: "red", textAlign: "center" }}>
          Please select a time slot
        </Text>
      )}

      {/* Success Message */}
      {booked && selectedSlot && (
        <Text
          style={{
            marginTop: 15,
            color: "green",
            textAlign: "center",
            fontWeight: "600",
          }}
        >
          ✅ Session booked at {selectedSlot}
        </Text>
      )}
    </ScrollView>
  );
};

export default MentorDetailScreen;