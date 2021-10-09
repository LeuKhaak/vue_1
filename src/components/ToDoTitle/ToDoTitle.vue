<template>
  <h3 class="todo-title">to do list</h3>
</template>

<script>
export default {
  //name: "ToDoTitle",
};
</script>

<style lang="scss">
.todo-title {
  padding: 0.75rem 0;
  text-align: center;
  background: $bg-title;
  @include filter-font;
  color: $font-dark;
}
</style>
