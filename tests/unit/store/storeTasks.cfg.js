import vuex from "@/store/modules/tasks.js";
export default {
  state: {
    tab: "All",
    tasks: [],
  },
  actions: vuex.actions,
  mutations: vuex.mutations,
  getters: vuex.getters,
};
