import { Image, StyleSheet, Pressable } from "react-native";
import { Text, View } from "./themed";

interface CharacterCardProps {
  character: info;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  return (
    <View style={styles.container}>
      <Pressable>
        <Image
          style={styles.image}
          source={{
            uri: character.imageUrl,
            width: 120,
            height: 120,
          }}
          alt={character.fullName}
        />
        <Text style={styles.name}>{character.fullName}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    marginVertical: 20,
    justifyContent: "center",
    width: "40%",
  },
  image: {
    borderWidth: 2,
    borderColor: "#31363F",
    borderRadius: 20,
    alignSelf: "center",
    marginBottom: 5,
  },
  name: {
    fontSize: 13,
    alignSelf: "center",
    fontStyle: "italic",
    fontWeight: "600",
    color: "#B9B4C7",
  },
});
