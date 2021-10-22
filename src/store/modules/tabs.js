import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    tabs: [
      { id: uuidv4(), name: "All", isChecked: true },
      { id: uuidv4(), name: "Active", isChecked: false },
      { id: uuidv4(), name: "Completed", isChecked: false },
    ],
  },
  mutations: {
    checkTab(state, id) {
      state.tabs.forEach((element) => {
        if (element.id === id) element.isChecked = true;
        else element.isChecked = false;
      });
    },
  },
  actions: {},
  getters: {
    getTabs(state) {
      return state.tabs;
    },
  },
};
