import { useState, useEffect } from "react";
import { Task } from "../types/task";
import { saveTasks, loadTasks } from "../storage/taskStorage";
import uuid from "react-native-uuid";

export type Filter = "all" | "active" | "completed";

export const useTasks = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [filter, setFilter] = useState<Filter>("all");

  // Load all tasks on mount
  useEffect(() => {
    const fetchTasks = async () => {
      const storedTasks = await loadTasks();
      setTasks(storedTasks);
    };
    fetchTasks();
  }, []);

  // Save tasks whenever status is changed
  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  // Add a new task
  const addTask = (title: string) => {
    if (!title.trim()) return;
    const newTask: Task = { id: uuid.v4().toString(), title, completed: false };
    setTasks(prev => [newTask, ...prev]);
  };

  // Toggle task completion
  const toggleTask = (id: string) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Filtered tasks based on current filter
  const filteredTasks = tasks.filter(task => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return { tasks: filteredTasks, addTask, toggleTask, filter, setFilter };
};