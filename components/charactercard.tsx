import { Image, StyleSheet, Text, View } from "react-native";

interface CharacterCardProps {
  image: string;
  name: string;
}

export default function CharacterCard({ image, name }: CharacterCardProps) {
  return (
    <View style={styles.image}>
      <Image
        source={{
          uri: image,
          width: 300,
          height: 300,
        }}
        alt={name}
      />
      <Text style={styles.name}>{name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    marginVertical: 20,
  },
  name: {
    fontSize: 20,
  },
});
