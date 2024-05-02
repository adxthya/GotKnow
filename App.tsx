import { useEffect, useState } from "react";
import { ScrollView, StatusBar, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Text, View } from "./components/themed";
import CharacterCard from "./components/charactercard";
import GradientText from "./components/gradienttext";

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
    <View style={[styles.container]}>
      <StatusBar />
      <ScrollView
        style={styles.imageContainer}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <GradientText style={styles.title}>GOTapp</GradientText>
        <Text style={[styles.desc]}>
          GOTapp is a all in all stop for GOT fans
        </Text>
        <Text style={styles.charTitle}>Characters</Text>
        <View style={styles.infoContainer}>
          {details.map((data: info) => (
            <CharacterCard
              character={data}
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
    alignItems: "center",
    padding: 10,
    paddingVertical: 20,
  },
  title: {
    fontSize: 50,
    fontWeight: "500",
    backgroundColor: "transparent",
  },
  desc: {
    fontSize: 20,
    fontStyle: "italic",
    marginVertical: 10,
    color: "#526D82",
  },
  charTitle: {
    fontSize: 20,
    alignSelf: "center",
    marginTop: 10,
    fontWeight: "500",
    fontStyle: "italic",
    color: "#526D82",
  },
  imageContainer: {
    flex: 1,
  },
  scrollView: {
    alignItems: "center",
  },
  infoContainer: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
