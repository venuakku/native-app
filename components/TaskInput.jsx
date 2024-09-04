import { useState } from "react";
import { StyleSheet, Button, TextInput, View } from "react-native";

function TaskInput({ handlePress }) {
  const [text, setText] = useState("");

  const handleChange = (enteredText) => {
    setText(enteredText);
  };

  return (
    <View style={styles.InputContainer}>
      <TextInput
        style={styles.inputBox}
        onChangeText={handleChange}
        placeholder="Enter your daily task..."
        value={text}
      />
      <View style={styles.button}>
        <Button
          onPress={() => {
            handlePress(text);
            setText("");
          }}
          title="Add"
        />
      </View>
    </View>
  );
}

export default TaskInput;

const styles = StyleSheet.create({
  InputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    borderBottomColor: "white",
    borderBottomWidth: 1,
    paddingBottom: 20,
  },
  inputBox: {
    backgroundColor: "#fff",
    width: "75%",
    padding: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    width: "20%",
    // borderRadius: 10,
  },
});
