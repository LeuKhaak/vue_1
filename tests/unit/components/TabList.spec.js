import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import TabList from "@/components/molecules/TabList.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for TabList", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getTabs: jest.fn(),
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("render a Tab", () => {
    const wrapper = shallowMount(TabList, { store, localVue });
    expect(wrapper.find("Tab")).toBeTruthy();
    expect(wrapper.isVisible()).toBe(true);
  });
});
