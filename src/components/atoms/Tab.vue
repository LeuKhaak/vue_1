<template>
  <label :class="$style.categoryLabel">
    <input
      :class="$style.categoryInput"
      type="radio"
      name="tasks"
      :checked="isChecked"
      @input="check"
      @click="filter"
    />
    <span :class="$style.category">{{ name }}</span>
  </label>
</template>

<script>
import { mapMutations } from "vuex";
export default {
  methods: {
    ...mapMutations(["checkTab", "filterTasks"]),
    check() {
      this.checkTab(this.id);
    },
    filter() {
      this.filterTasks(this.name);
    },
  },
  props: {
    name: String,
    isChecked: Boolean,
    id: String,
  },
  requared: true,
};
</script>

<style scoped lang="scss" module>
.categoryLabel {
  display: flex;
  .category {
    display: block;
    @include filterFont;
    padding: 0.3rem 0.625rem;
  }
  .categoryInput {
    appearance: none;
  }
  .categoryInput:checked ~ .category {
    padding: 0.3rem 0.5625rem;
    border: 0.0625rem solid $filter;
    box-sizing: border-box;
    border-radius: 0.625rem;
  }
}
</style>
