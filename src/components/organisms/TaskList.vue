<template>
  <div :class="$style.list">
    <Task v-for="task in tasks" :key="task.id" :name="task.name" />
  </div>
</template>

<script>
import Task from "@/components/molecules/Task.vue";
export default {
  data() {
    return {
      tasks: [
        { id: 1, name: "Task 1" },
        { id: 2, name: "Task 2" },
        { id: 3, name: "Task 3" },
      ],
    };
  },
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
