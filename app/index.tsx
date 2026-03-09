import FilterTabs from "@/src/components/FilterTabs";
import TaskInput from "@/src/components/TaskInput";
import TaskItem from "@/src/components/TaskItem";
import { useTasks } from "@/src/hooks/useTasks";
import { View, Text, StyleSheet, FlatList } from "react-native";

export default function Index() {
  const { tasks, addTask, toggleTask, filter, setFilter } = useTasks();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Task Tracker.</Text>
      <Text style={styles.subtitle}>Your tasks will appear here</Text>
      <TaskInput onAddTask={addTask} />
      <FilterTabs filter={filter} setFilter={setFilter} />
      
      {/* Task list */}
      {tasks.length === 0 ? (
        <Text style={styles.emptyText}>No tasks here!</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <TaskItem task={item} onToggle={toggleTask} />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", paddingHorizontal: 16, paddingVertical: 50 },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 8 },
  subtitle: { fontSize: 16, color: "#555" },
  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
    color: "#888",
  },
});