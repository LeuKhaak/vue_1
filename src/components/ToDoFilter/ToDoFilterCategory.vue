<template>
  <label>
    <input type="radio" name="tasks" />
    <span>{{ category.name }}</span>
  </label>
</template>

<script>
export default {
  props: {
    category: {
      type: Object,
      requared: true,
    },
  },
};
</script>

<style scoped lang="scss">
label {
  display: flex;
  span {
    display: block;
    @include filter-font;
    margin-right: 1.5rem;
    padding: 0.3rem 0.625rem;
  }
  .completed ~ span {
    margin-right: 0;
  }
  input {
    appearance: none;
  }
  input:checked ~ span,
  .checkboxChecked {
    padding: 0.3rem 0.5625rem;
    border: 0.0625rem solid $filter;
    box-sizing: border-box;
    border-radius: 0.625rem;
  }
}
</style>
