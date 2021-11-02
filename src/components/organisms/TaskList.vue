<template>
  <div data-tasks :class="$style.list">
    <div :class="$style.noTasks" v-if="!getAllTasks.length">NO TASKS!</div>
    <Task
      v-for="task in getAllTasks"
      :key="task.id"
      :id="task.id"
      :name="task.name"
      :isChecked="task.isChecked"
      :isVisible="task.isVisible"
    />
  </div>
</template>

<script>
import Task from "@/components/molecules/Task.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getAllTasks"]),
  },
  components: {
    Task,
  },
};
</script>

<style lang="scss" module>
.list {
  padding-bottom: 0;
  .noTasks {
    @extend %task;
    justify-content: center;
  }
}
</style>
