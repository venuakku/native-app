import { Pressable, StyleSheet, View, Text } from "react-native";

function TaskItem({ deleteTask, itemData }) {
  return (
    <Pressable android_ripple={{color: "red"}} onPress={() => deleteTask(itemData.item.id)}>
      <View style={styles.taskItem}>
        <Text style={styles.taskItemText}>{itemData.item.task}</Text>
      </View>
    </Pressable>
  );
}

export default TaskItem;

const styles = StyleSheet.create({
  taskItem: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    margin: 10,
  },
  taskItemText: {
    color: "black",
  },
});
