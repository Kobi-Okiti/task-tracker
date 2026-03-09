import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Keyboard } from "react-native";

type TaskInputProps = {
  onAddTask: (title: string) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");

  const handleAdd = () => {
    if (!title.trim()) return; // prevent empty task
    onAddTask(title);
    setTitle(""); // clear input
    Keyboard.dismiss(); // close keyboard
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Enter a new task"
        value={title}
        onChangeText={setTitle}
        onSubmitEditing={handleAdd} // allows pressing Enter/Return to add
      />
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    height: 40,
  },
});

export default TaskInput;