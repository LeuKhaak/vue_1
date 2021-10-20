<template>
  <div :class="$style.list">
    <div
      :class="$style.noTasks"
      :style="{ display: GET_ALL_TASKS.length > 0 ? 'none' : 'flex' }"
    >
      NO TASKS!
    </div>
    <Task
      v-for="task in GET_ALL_TASKS"
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
    ...mapGetters(["GET_ALL_TASKS"]),
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
