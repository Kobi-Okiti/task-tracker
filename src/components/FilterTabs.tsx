import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Filter } from "../hooks/useTasks";

type FilterTabsProps = {
  filter: Filter;
  setFilter: (filter: Filter) => void;
};

const FilterTabs: React.FC<FilterTabsProps> = ({ filter, setFilter }) => {
  const tabs: Filter[] = ["all", "active", "completed"];

  return (
    <View style={styles.container}>
      {tabs.map(tab => (
        <TouchableOpacity
          key={tab}
          style={[
            styles.tab,
            filter === tab && styles.tabActive
          ]}
          onPress={() => setFilter(tab)}
        >
          <Text style={[styles.text, filter === tab && styles.textActive]}>
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    marginHorizontal: 16,
    marginBottom: 8,
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
  },
  tab: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
  },
  tabActive: {
    backgroundColor: "#4CAF50",
  },
  text: {
    fontSize: 14,
    color: "#555",
    fontWeight: "500",
  },
  textActive: {
    color: "#fff",
    fontWeight: "bold",
  },
});

export default FilterTabs;