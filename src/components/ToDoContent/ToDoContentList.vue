<template>
  <ul>
    <ToDoContentListTask
      v-for="task in tasks"
      :key="task.name"
      v-bind:task="task"
    />
  </ul>
</template>

<script>
import ToDoContentListTask from "./ToDoContentListTask/ToDoContentListTask.vue";
export default {
  props: ["tasks"],
  components: {
    ToDoContentListTask,
  },
};
</script>

<style lang="scss">
.todo-list {
  padding-bottom: 0;
}
</style>
