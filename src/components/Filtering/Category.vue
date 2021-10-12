<template>
  <label>
    <input type="radio" name="tasks" :checked="isChecked" />
    <span :class="$style.category">{{ name }}</span>
  </label>
</template>

<script>
export default {
  props: {
    name: String,
    isChecked: Boolean,
  },
  requared: true,
};
</script>

<style lang="scss" module>
label {
  display: flex;
  .category {
    display: block;
    @include filterFont;
    margin-right: 1.5rem;
    padding: 0.3rem 0.625rem;
  }
  .completed ~ span {
    margin-right: 0;
  }
  input {
    appearance: none;
  }
  input:checked ~ .category,
  .checkboxChecked {
    padding: 0.3rem 0.5625rem;
    border: 0.0625rem solid $filter;
    box-sizing: border-box;
    border-radius: 0.625rem;
  }
}
</style>
