import { useEffect, useState } from "react";
import { Image, ScrollView, StatusBar, StyleSheet } from "react-native";
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
        <GradientText
          firstColor="rgb(32, 38, 57)"
          secondColor="rgb(63, 76, 119)"
          style={styles.title}
        >
          GotKnow
        </GradientText>
        <Image
          style={styles.image}
          source={require("./assets/got.jpg")}
        />
        <Text style={[styles.desc]}>
          GotKnow is a all in all stop for GOT fans. Explore about your
          favourite characters and get to know them more.
        </Text>
        <GradientText
          secondColor="rgb(63, 61, 61)"
          firstColor="rgba(35, 35, 35, 0.8)"
          style={styles.charTitle}
        >
          Characters
        </GradientText>
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
    paddingVertical: 15,
  },
  title: {
    fontSize: 50,
    backgroundColor: "transparent",
    fontStyle: "italic",
  },
  desc: {
    fontSize: 20,
    fontStyle: "italic",
    marginVertical: 10,
    color: "#526D82",
    textAlign: "center",
  },
  charTitle: {
    fontSize: 25,
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
  image: {
    width: 300,
    height: 170,
    borderWidth: 2,
    borderColor: "#31363F",
    borderRadius: 20,
    objectFit: "cover",
    marginVertical: 10,
  },
});
