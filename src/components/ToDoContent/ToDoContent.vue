<template>
  <div class="todo-content">
    <ToDoContentList v-bind:tasks="tasks" />
    <ToDoContentAdd />
  </div>
</template>

<script>
import ToDoContentAdd from "./ToDoContentAdd.vue";
import ToDoContentList from "./ToDoContentList.vue";

export default {
  props: ["tasks"],
  components: {
    ToDoContentAdd,
    ToDoContentList,
  },
};
</script>

<style lang="scss">
.todo-container {
  padding: 0 0.5rem;
  .todo-area {
    max-width: 34rem;
    margin: 0 auto 0 auto;
    background: $bg-light;
    border: 0.125rem solid $bg-title;
    box-sizing: border-box;
    box-shadow: 0px 0.5rem 2.2rem 0.3rem $shadow;
    .todo-content {
      padding: 2rem;
    }
  }
}
</style>
