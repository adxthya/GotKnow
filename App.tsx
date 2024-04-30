import { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import CharacterCard from "./components/charactercard";

export default function App() {
  const [details, setDetails] = useState<Array<info>>([]);
  useEffect(() => {
    fetchInfo();
  }, []);
  async function fetchInfo() {
    const response = await fetch("https://thronesapi.com/api/v2/Characters");
    const json = await response.json();
    setDetails(json);
  }

  return (
    <View style={styles.container}>
      <ScrollView style={styles.imageContainer}>
        <Text style={styles.title}>Welcome to GOTapp</Text>
        <Text style={styles.desc}>
          GOTapp is a all in all stop for GOT fans
        </Text>
        <Text style={styles.charTitle}>Characters</Text>
        <View>
          {details.map((data) => (
            <CharacterCard
              image={data.imageUrl}
              name={data.fullName}
              key={data.id}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    marginTop: StatusBar.currentHeight,
  },
  title: {
    fontSize: 22,
    fontWeight: "500",
  },
  desc: {
    fontSize: 18,
    fontStyle: "italic",
    marginVertical: 10,
  },
  charTitle: {
    fontSize: 20,
    alignSelf: "flex-start",
    marginTop: 20,
    fontWeight: "500",
  },
  imageContainer: {
    width: "100%",
  },
});
