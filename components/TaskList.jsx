import { StyleSheet, FlatList, View } from "react-native";
import TaskItem from "./TaskItem";

function TaskList({ tasks, deleteTask }) {
  return (
    <View style={styles.taskList}>
      <FlatList
        data={tasks}
        renderItem={(itemData) => {
          return (
            <TaskItem itemData={itemData} deleteTask={(id) => deleteTask(id)} />
          );
        }}
      />
    </View>
  );
}

export default TaskList;

const styles = StyleSheet.create({
  taskList: {
    width: "100%",
    margin: 20,
  },
});
