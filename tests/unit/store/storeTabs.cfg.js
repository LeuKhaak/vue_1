import vuex from "@/store/modules/tabs.js";
import { v4 as uuidv4 } from "uuid";

export default {
  state: {
    tabs: [
      { id: uuidv4(), name: "All", isChecked: true },
      { id: uuidv4(), name: "Active", isChecked: false },
      { id: uuidv4(), name: "Completed", isChecked: false },
    ],
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters,
};
