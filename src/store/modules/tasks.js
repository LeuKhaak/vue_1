import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    tab: "All",
    tasks: [
      {
        id: uuidv4(),
        name: "Task 1",
        isChecked: true,
      },
      {
        id: uuidv4(),
        name: "Task 2",
        isChecked: false,
      },
      {
        id: uuidv4(),
        name: "Task 3",
        isChecked: false,
      },
    ],
  },
  mutations: {
    checkTask(state, id) {
      state.tasks.forEach((element) => {
        if (element.id === id) element.isChecked = !element.isChecked;
      });
    },
    addTask(state, text) {
      if (text !== "") {
        const newTask = {
          id: uuidv4(),
          name: text,
          isChecked: false,
        };
        state.tasks.push(newTask);
      }
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter((item) => item.id !== id);
    },
    filterTasks(state, tab) {
      state.tab = tab;
    },
  },
  actions: {},
  getters: {
    getAllTasks(state) {
      switch (state.tab) {
        case "Active":
          return state.tasks.filter((item) => item.isChecked === false);
        case "Completed":
          return state.tasks.filter((item) => item.isChecked === true);
        default:
          return state.tasks;
      }
    },
    getTasksAmount(state) {
      return state.tasks.length;
    },
    getCompletedTasksAmount(state) {
      return state.tasks.filter((item) => item.isChecked === true).length;
    },
  },
};
