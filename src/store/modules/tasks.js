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
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    addTask(state, text) {
      if (text) {
        const newTask = {
          id: uuidv4(),
          name: text,
          isChecked: false,
        };
        state.tasks.push(newTask);
        localStorage.setItem("tasks", JSON.stringify(state.tasks));
      }
    },
    removeTask(state, id) {
      state.tasks = state.tasks.filter((item) => item.id !== id);
      localStorage.setItem("tasks", JSON.stringify(state.tasks));
    },
    filterTasks(state, tab) {
      state.tab = tab;
    },
    setSavedData(state) {
      state.tasks = JSON.parse(localStorage.getItem("tasks"));
    },
  },
  actions: {
    //setSavedData: async () => {
    //  const data = await localStorage.getItem("tasks");
    //  console.log(data);
    //  return data;
    //},
  },
  getters: {
    getAllTasks(state) {
      switch (state.tab) {
        case "Active":
          return state.tasks.filter((item) => !item.isChecked);
        case "Completed":
          return state.tasks.filter((item) => item.isChecked);
        default:
          return state.tasks;
      }
    },
    getTasksAmount(state) {
      return state.tasks.length;
    },
    getCompletedTasksAmount(state) {
      return state.tasks.filter((item) => item.isChecked).length;
    },
  },
};
