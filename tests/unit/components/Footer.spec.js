import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import Footer from "@/components/organisms/Footer.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for Footer", () => {
  let store;
  let getters;

  beforeEach(() => {
    getters = {
      getTasksAmount: () => 2,
      getCompletedTasksAmount: () => 1,
    };
    store = new Vuex.Store({
      getters,
    });
  });

  it("return two amounts", () => {
    const wrapper = shallowMount(Footer, { store, localVue });
    const span = wrapper.find("span");
    expect(span.text()).toBe(
      getters.getCompletedTasksAmount() +
        "/" +
        getters.getTasksAmount() +
        " left"
    );
  });
});
