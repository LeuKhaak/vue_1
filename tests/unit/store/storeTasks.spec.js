import { createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import storeConfig from "./storeTasks.cfg";

const localVue = createLocalVue();
localVue.use(Vuex);
const store = new Vuex.Store(storeConfig);

describe("tests for store", () => {
  it("createTask", () => {
    let newTask = "newTask";
    store.commit("createTask", newTask);
    expect(store.state.tasks[0].taskText).toBe("newTask");
    expect(store.state.tasks[0].isComplete).toBe(false);
  });
});
