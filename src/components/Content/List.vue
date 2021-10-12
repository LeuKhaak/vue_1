<template>
  <ul :class="$style.list">
    <Task v-for="task in tasks" :key="task.name" :task="task" />
  </ul>
</template>

<script>
import Task from "./Task/Task.vue";
export default {
  props: ["tasks"],
  components: {
    Task,
  },
};
</script>

<style lang="scss" module>
.list {
  padding-bottom: 0;
}
</style>
