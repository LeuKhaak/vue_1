import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import TaskList from "@/components/organisms/TaskList.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for TaskList", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getAllTasks: () => [],
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("render a Task", () => {
    const wrapper = shallowMount(TaskList, { store, localVue });
    expect(wrapper.find("Task")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
