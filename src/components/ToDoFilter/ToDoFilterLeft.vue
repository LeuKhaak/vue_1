<template>
  <span class="todo-left">1/3 left</span>
</template>

<script>
export default {
  //name: "ToDoFilterLeft",
};
</script>

<style lang="scss">
.todo-left {
  @include filter-font;
  @include mobile {
    margin-bottom: 0.4rem;
  }
}
</style>
