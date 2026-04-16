import { useState } from "react";
import LoginScreen from "../../src/screens/auth/LoginScreen";
import HomeScreen from "../../src/screens/home/HomeScreen";
import MentorDetailScreen from "../../src/screens/mentors/MentorDetailScreen";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedMentor, setSelectedMentor] = useState(null);

  if (!isLoggedIn) {
    return <LoginScreen onLogin={() => setIsLoggedIn(true)} />;
  }

  if (selectedMentor) {
    return (
      <MentorDetailScreen
        mentor={selectedMentor}
        onBack={() => setSelectedMentor(null)}
      />
    );
  }

  return (
    <HomeScreen
      onSelectMentor={(mentor) => setSelectedMentor(mentor)}
    />
  );
}