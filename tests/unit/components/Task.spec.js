import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Task from "@/components/molecules/Task.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Task", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      checkTask: jest.fn(),
      removeTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "checkTask"', () => {
    const wrapper = shallowMount(Task, { store, localVue });
    wrapper.find("input").trigger("input");
    expect(mutations.checkTask).toHaveBeenCalled();
  });

  it('call "removeTask"', () => {
    const wrapper = shallowMount(Task, { store, localVue });
    wrapper.find("button").trigger("click");
    expect(mutations.removeTask).toHaveBeenCalled();
  });

  it("renders props.name when passed", () => {
    const name = "new Task";
    const wrapper = shallowMount(Task, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
