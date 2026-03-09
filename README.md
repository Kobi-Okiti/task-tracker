# Task Tracker App

A simple mobile app built with **React Native**, **Expo**, and **TypeScript** for tracking tasks.  

Users can:

- View a list of tasks  
- Add new tasks  
- Mark tasks as complete/incomplete  
- Filter tasks by **All / Active / Completed**  
- Persist tasks locally on the device  
- See validation messages for empty tasks  

---

## Features

- Add and complete tasks with **visual feedback**  
- Tasks persist locally using `AsyncStorage`  
- Filter tabs for All / Active / Completed tasks  
- Visual validation for empty tasks  
- Empty state messaging when no tasks exist  
- Clean, responsive UI with status bar customization  

---

## Architecture & Code Structure
- **Home Screen** (`app/index.tsx`)
  - Renders `TaskInput`, `FilterTabs`, and a list of `TaskItem`s
- **Components** (`src/components/`)
  - `TaskInput.tsx` → Input field + Add button + visual validation
  - `TaskItem.tsx` → Task row with completion toggle
  - `FilterTabs.tsx` → All / Active / Completed filter buttons
- **Hooks** (`src/hooks/`)
  - `useTasks.ts` → Main hook handling state, persistence, and filtering
- **Storage** (`src/storage/`)
  - `taskStorage.ts` → AsyncStorage save/load functions
- **Types** (`src/types/`)
  - `task.ts` → Task type definition

- **`useTasks` hook** contains all logic:  
  - Loading and saving tasks  
  - Adding tasks  
  - Toggling completion  
  - Filtering tasks  

- Components are **presentational**, consuming hook data.  
- Separation ensures **clean, maintainable, and testable code**.  

---

## Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Kobi-Okiti/task-tracker
cd task-tracker
```

2. Install dependencies:
```bash
npm install
npx expo install
```

3. Start the app:
```bash
npx expo start
```

4. Run on a simulator or your device using Expo Go.

---

## Libraries Used**
- react-native: Base framework for building the app
- expo: Managed workflow and fast development environment
- typescript: Type safety and better code quality
- @react-native-async-storage/async-storage: Persist tasks locally
- react-native-uuid: Generate unique IDs for tasks

## UX Handling
- Empty state: Shows a message if there are no tasks
- Validation: Prevents empty tasks and shows a warning
- Completion status: Completed tasks are struck through and grayed out
- Filter tabs: Clear visual indicator for active filter

## Future Improvements
**If given more time, the app could include**:
- Swipe-to-delete tasks for faster management
- Edit tasks in place
- Dark mode support
- Animations for adding, completing, or toggling tasks
- Unit tests for useTasks and components
