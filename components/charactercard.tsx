import {
  Image,
  StyleSheet,
  Pressable,
  Modal,
  TouchableOpacity,
} from "react-native";
import { Text, View } from "./themed";
import { useState } from "react";
import { useColorScheme } from "react-native";

interface CharacterCardProps {
  character: info;
}

export default function CharacterCard({ character }: CharacterCardProps) {
  const colorScheme = useColorScheme();
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <Pressable onPress={() => setIsModalVisible(true)}>
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
      <Modal
        transparent
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <TouchableOpacity
          style={styles.modalContainer}
          activeOpacity={1}
          onPressOut={() => setIsModalVisible(false)}
        >
          <View
            style={[
              styles.modal,
              {
                backgroundColor: colorScheme === "dark" ? "#222831" : "#E5E1DA",
              },
            ]}
          >
            <Image
              style={[
                styles.image,
                { borderColor: "gray", width: 150, height: 150 },
              ]}
              source={{
                uri: character.imageUrl,
                width: 200,
                height: 200,
              }}
              alt={character.fullName}
            />
            <Text style={styles.modalHeader}>Title</Text>
            <Text style={styles.modalText}>{character.title}</Text>
            <Text style={styles.modalHeader}>Name</Text>
            <Text style={styles.modalText}>{character.fullName}</Text>
            <Text style={styles.modalHeader}>House</Text>
            <Text style={styles.modalText}>{character.family}</Text>
          </View>
        </TouchableOpacity>
      </Modal>
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
    borderWidth: 4,
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
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(52, 52, 52, 0.5)",
  },
  modal: {
    padding: 30,
    paddingHorizontal: 50,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "gray",
    alignSelf: "center",
  },
  modalText: {
    alignSelf: "center",
    fontSize: 18,
    marginVertical: 5,
  },
  modalHeader: {
    fontStyle: "italic",
    textDecorationLine: "underline",
  },
});
