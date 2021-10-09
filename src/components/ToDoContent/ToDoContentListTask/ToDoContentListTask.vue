<template>
  <label>
    <li class="todo-task">
      <ToDoContentListTaskCheckbox />
      <ToDoContentListTaskValue v-bind:task="task" />
      <ToDoContentListTaskDelete />
    </li>
  </label>
</template>

<script>
import ToDoContentListTaskCheckbox from "./ToDoContentListTaskCheckbox.vue";
import ToDoContentListTaskValue from "./ToDoContentListTaskValue.vue";
import ToDoContentListTaskDelete from "./ToDoContentListTaskDelete.vue";

export default {
  components: {
    ToDoContentListTaskCheckbox,
    ToDoContentListTaskValue,
    ToDoContentListTaskDelete,
  },
  props: {
    task: {
      type: Object,
      requared: true,
    },
  },
};
</script>

<style lang="scss">
li {
  @extend %task;
}
</style>
