import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Task } from "../types/task";

type TaskItemProps = {
  task: Task;
  onToggle: (id: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ task, onToggle }) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => onToggle(task.id)}
    >
      <View
        style={[
          styles.checkbox,
          task.completed ? styles.checkboxCompleted : styles.checkboxPending,
        ]}
      />
      <Text style={[styles.text, task.completed && styles.textCompleted]}>
        {task.title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: 4,
    borderWidth: 2,
    marginRight: 12,
  },
  checkboxPending: {
    borderColor: "#ccc",
    backgroundColor: "#fff",
  },
  checkboxCompleted: {
    borderColor: "#4CAF50",
    backgroundColor: "#4CAF50",
  },
  text: {
    fontSize: 16,
    color: "#333",
  },
  textCompleted: {
    textDecorationLine: "line-through",
    color: "#888",
  },
});

export default TaskItem;