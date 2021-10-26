import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Tab from "@/components/atoms/Tab.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Tab", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      checkTab: jest.fn(),
      filterTasks: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  it('call "checkTab"', () => {
    const wrapper = shallowMount(Tab, { store, localVue });
    wrapper.find("input").trigger("input");
    expect(mutations.checkTab).toHaveBeenCalled();
  });

  it('call "filterTasks"', () => {
    const wrapper = shallowMount(Tab, { store, localVue });
    wrapper.find("input").trigger("click");
    expect(mutations.filterTasks).toHaveBeenCalled();
  });

  it("renders props.name when passed", () => {
    const name = "tab";
    const wrapper = shallowMount(Tab, {
      propsData: { name },
    });
    expect(wrapper.text()).toMatch(name);
  });
});
