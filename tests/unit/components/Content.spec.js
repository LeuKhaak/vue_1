import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Content from "@/components/organisms/Content.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Content", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      addTask: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "addTask"', () => {
    const wrapper = shallowMount(Content, { store, localVue });
    wrapper.find("input").trigger("keydown.enter");
    expect(mutations.addTask).toHaveBeenCalled();
  });
});
