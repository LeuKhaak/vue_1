import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    tasks: [
      {
        id: uuidv4(),
        name: "Task 1",
        isChecked: true,
        isVisible: true,
      },
      {
        id: uuidv4(),
        name: "Task 2",
        isChecked: false,
        isVisible: true,
      },
      {
        id: uuidv4(),
        name: "Task 3",
        isChecked: false,
        isVisible: true,
      },
    ],
  },
  mutations: {
    checkTask(state, id) {
      state.tasks.forEach((element) => {
        if (element.id === id) element.isChecked = !element.isChecked;
      });
    },
    addTask(state, event) {
      if (event.key == "Enter") {
        const newTask = {
          id: uuidv4(),
          name: event.target.value,
          isChecked: false,
          isVisible: true,
        };
        event.target.value = "";
        state.tasks.push(newTask);
      }
    },
    removeTask(state, id) {
      const newTasks = state.tasks.filter((item) => item.id !== id);
      state.tasks = newTasks;
    },
    filterTasks(state, tab) {
      state.tasks.forEach((element) => {
        if (tab === "Active") {
          element.isVisible = element.isChecked === true ? false : true;
        } else if (tab === "Completed") {
          element.isVisible = element.isChecked === false ? false : true;
        } else if (tab === "All") {
          element.isVisible = true;
        }
      });
    },
  },
  actions: {},
  getters: {
    GET_ALL_TASKS(state) {
      return state.tasks;
    },
  },
};
