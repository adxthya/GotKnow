import { Image, StyleSheet, Pressable, Modal, Button } from "react-native";
import { Text, View } from "./themed";
import { useState } from "react";

interface CharacterCardProps {
  character: info;
}

export default function CharacterCard({ character }: CharacterCardProps) {
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
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={() => {
          setIsModalVisible(false);
        }}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modal}>
            <Image
              style={[styles.image, { borderColor: "red" }]}
              source={{
                uri: character.imageUrl,
                width: 200,
                height: 200,
              }}
              alt={character.fullName}
            />
            <Text style={styles.modalText}>{character.title}</Text>
            <Text style={styles.modalText}>{character.fullName}</Text>
            <Text style={styles.modalText}>{character.family}</Text>
            <Button
              title="Close"
              color="midnightblue"
              onPress={() => setIsModalVisible(false)}
            ></Button>
          </View>
        </View>
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
  modalContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  modal: {
    padding: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "gray",
    alignSelf: "center",
    backgroundColor: "#000",
  },
  modalText: {
    alignSelf: "center",
    fontSize: 18,
  },
});
