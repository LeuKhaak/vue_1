import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import tasks from "./storeTasks.cfg";
import tabs from "./storeTabs.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store({
  modules: {
    tasks,
    tabs,
  },
});

describe("tests for store", () => {
  it("addTask", () => {
    let newTask = "newTask";
    store.commit("addTask", newTask);
    expect(store.state.tasks.tasks[0].name).toBe("newTask");
    expect(store.state.tasks.tasks[0].isChecked).toBe(false);
  });

  it("checkTask", () => {
    store.commit("checkTask", store.state.tasks.tasks[0].id);
    expect(store.state.tasks.tasks[0].isChecked).toBe(true);
  });

  it("removeTask", () => {
    let tasksAmount = store.state.tasks.tasks.length;
    store.commit("removeTask", store.state.tasks.tasks[0].id);
    expect(tasksAmount).toBe(tasksAmount--);
  });

  it("filterTasks", () => {
    store.commit("filterTasks", store.state.tabs.tabs[1].name);
    expect(store.state.tasks.tab).toBe(store.state.tabs.tabs[1].name);
  });

  it("setSavedData", () => {
    store.dispatch("setSavedData");
  });

  it("checkTab", () => {
    store.commit("checkTab", store.state.tabs.tabs[1].id);
    expect(store.state.tabs.tabs[1].isChecked).toBe(true);
  });

  it("getAllTasks", () => {
    for (let i = 0; i < 3; i++) {
      if (store.state.tabs.tabs[i - 1])
        store.state.tabs.tabs[i - 1].isChecked = false;
      store.state.tabs.tabs[i].isChecked = true;
      //store.commit("checkTab", store.state.tabs.tabs[i].id);
      switch (store.state.tasks.tab) {
        case "All":
          expect(store.getters.getAllTasks.length).toBe(1);
          break;
        case "Active":
          expect(store.getters.getAllTasks.length).toBe(0);
          break;
        case "Completed":
          expect(store.getters.getAllTasks.length).toBe(1);
          break;
      }
    }
  });

  it("getTasksAmount", () => {
    expect(store.getters.getTasksAmount).toBe(store.state.tasks.tasks.length);
  });

  it("getCompletedTasksAmount", () => {
    let amount = store.getters.getCompletedTasksAmount;
    expect(amount >= 0 && amount <= store.state.tasks.tasks.length).toBe(true);
  });

  it("getTabs", () => {
    expect(store.getters.getTabs).toStrictEqual([
      { id: store.state.tabs.tabs[0].id, name: "All", isChecked: false },
      { id: store.state.tabs.tabs[1].id, name: "Active", isChecked: true },
      { id: store.state.tabs.tabs[2].id, name: "Completed", isChecked: false },
    ]);
  });
});
