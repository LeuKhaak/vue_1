import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import App from "@/App.vue";

const localVue = createLocalVue();
localVue.use(Vuex);

describe("test for App", () => {
  let store;
  let actions;

  beforeEach(() => {
    actions = {
      setSavedData: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
  });

  it('call "setSavedData"', () => {
    const wrapper = shallowMount(App, { store, localVue });
    expect(wrapper.find("#app")).toBeTruthy();
  });
});
