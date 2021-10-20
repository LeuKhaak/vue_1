export default {
  state: {
    tabs: [
      { id: 1, name: "All", isChecked: true },
      { id: 2, name: "Active", isChecked: false },
      { id: 3, name: "Completed", isChecked: false },
    ],
  },
  mutations: {
    checkTab(state, event) {
      state.tabs.forEach((element) => {
        element.isChecked = false;
      });
      state.tabs[event.target.id - 1].isChecked = true;
      //console.log(state.tabs);
    },
  },
  actions: {},
  getters: {
    GET_TABS(state) {
      return state.tabs;
    },
  },
};
