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
  //it("addTask", () => {
  //  let newTask = "newTask";
  //  store.commit("addTask", newTask);
  //  expect(store.state.tasks[0].taskText).toBe("newTask");
  //  expect(store.state.tasks[0].isComplete).toBe(false);
  //});

  it("checkTab", () => {
    let tabId = "id";
    store.commit("checkTab", tabId);
    console.log(store.state.tabs.tabs[0]);
    expect(store.state.tabs.tabs[0].isChecked).toBe(false);
    expect(store.state.tabs.tabs[1].isChecked).toBe(true);
  });
});
