import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Keyboard, Text } from "react-native";

type TaskInputProps = {
  onAddTask: (title: string) => void;
};

const TaskInput: React.FC<TaskInputProps> = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [error, setError] = useState("")

  const handleAdd = () => {
    if (!title.trim()) {
      setError("Task cannot be empty!");
      return;
    }
    onAddTask(title);
    setTitle("");
    setError("");
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <TextInput
          style={[styles.input, error ? styles.inputError : null]}
          placeholder="Enter a new task"
          value={title}
          onChangeText={text => {
            setTitle(text);
            if (error) setError("");
          }}
          onSubmitEditing={handleAdd}
        />
        {error ? <Text style={styles.errorText}>{error}</Text> : null}
      </View>
      <Button title="Add" onPress={handleAdd} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: "row",
    paddingHorizontal: 16,
    marginVertical: 12,
  },
  input: {
    // flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    marginRight: 8,
    height: 40,
  },
  inputError: {
    borderColor: "#FF5252",
  },
  errorText: {
    color: "#FF5252",
    fontSize: 12,
    marginTop: 4,
  },
});

export default TaskInput;