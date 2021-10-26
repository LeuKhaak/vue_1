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
      getTabs: () => [],
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it('call "getTabs"', () => {
    const wrapper = shallowMount(TabList, { store, localVue });
    const tab = wrapper.find("Tab");
    expect(tab.text()).toBe(getters.getTabs());
  });
});
