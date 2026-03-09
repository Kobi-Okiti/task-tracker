import AsyncStorage from "@react-native-async-storage/async-storage";
import { Task } from "../types/task";

const TASKS_KEY = "TASKS";

// Save tasks array to AsyncStorage
export const saveTasks = async (tasks: Task[]) => {
  try {
    await AsyncStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
  } catch (error) {
    console.error("Error saving tasks:", error);
  }
};

// Load tasks array from AsyncStorage
export const loadTasks = async (): Promise<Task[]> => {
  try {
    const data = await AsyncStorage.getItem(TASKS_KEY);
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error loading tasks:", error);
    return [];
  }
};