<template>
  <div class="todo-filter">
    <ToDoFilterLeft />
    <div class="todo-wrapper">
      <ToDoFilterCategory
        v-for="category in categories"
        :key="category.name"
        v-bind:category="category"
      />
    </div>
  </div>
</template>

<script>
import ToDoFilterLeft from "./ToDoFilterLeft.vue";
import ToDoFilterCategory from "./ToDoFilterCategory.vue";

export default {
  props: ["categories"],
  components: {
    ToDoFilterLeft,
    ToDoFilterCategory,
  },
};
</script>

<style lang="scss">
.todo-filter {
  background: $bg-title;
  padding: 0.4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mobile {
    flex-direction: column;
  }
  .todo-wrapper {
    display: flex;
    align-items: center;
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
