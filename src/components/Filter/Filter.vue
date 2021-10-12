<template>
  <div :class="$style.filter">
    <Left />
    <div :class="$style.wrapper">
      <Category
        v-for="category in categories"
        :key="category.name"
        :category="category"
      />
    </div>
  </div>
</template>

<script>
import Left from "./Left.vue";
import Category from "./Category.vue";

export default {
  props: ["categories"],
  components: {
    Left,
    Category,
  },
};
</script>

<style lang="scss" module>
.filter {
  background: $bgTitle;
  padding: 0.4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mobile {
    flex-direction: column;
  }
  .wrapper {
    display: flex;
    align-items: center;
    label {
      display: flex;
      span {
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
      input:checked ~ span {
        padding: 0.3rem 0.5625rem;
        border: 0.0625rem solid $filter;
        box-sizing: border-box;
        border-radius: 0.625rem;
      }
    }
  }
}
</style>
