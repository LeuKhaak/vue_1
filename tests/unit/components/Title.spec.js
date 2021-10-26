import { shallowMount } from "@vue/test-utils";
import Title from "@/components/atoms/Title.vue";

describe("test for Title", () => {
  it("renders props.title when passed", () => {
    const title = "title";
    const wrapper = shallowMount(Title, {
      propsData: { title },
    });
    expect(wrapper.text()).toMatch(title);
  });
});
