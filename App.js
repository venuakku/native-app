import { useState } from "react";
import { StyleSheet, View, Modal, Text, Button } from "react-native";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const handlePress = (text) => {
    if (text.length < 1) {
      setModalVisible(true);
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), task: text },
    ]);
  };

  const deleteTask = (id) => {
    setTasks((currentTasks) => {
      return currentTasks.filter((item) => id !== item.id);
    });
  };

  return (
    <View style={styles.screen}>
      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modal}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>Enter some task!</Text>
            <Button onPress={() => setModalVisible(false)} title="Back" />
          </View>
        </View>
      </Modal>
      <TaskInput handlePress={handlePress} modalVisible={modalVisible} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    padding: 20,
    marginTop: 50,
  },
  modal: {
    flex: 1,
    backgroundColor: "gray",
    justifyContent: "center",
  },
  modalBox: {
    backgroundColor: "white",
    width: "50%",
    margin: "auto",
    padding: 20,
  },
  modalText: {
    fontSize: 20,
    marginBottom: 5,
  },
});
