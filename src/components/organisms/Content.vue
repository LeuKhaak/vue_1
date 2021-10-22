<template>
  <div :class="$style.content">
    <TaskList />
    <div :class="$style.add">
      <input
        :class="$style.taskInput"
        type="text"
        name="new-task"
        placeholder="Add a new task"
        v-model="taskText"
        @keydown.enter="add"
      />
    </div>
  </div>
</template>

<script>
import TaskList from "@/components/organisms/TaskList.vue";
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["addTask"]),
    add() {
      this.addTask(this.taskText);
      this.taskText = "";
    },
  },
  data: function () {
    return {
      taskText: "",
    };
  },
  components: {
    TaskList,
  },
};
</script>

<style lang="scss" module>
.content {
  padding: 2rem;
  .add {
    background: $bgAdd;
    border: 1.5px dashed $bgTitle;
    box-sizing: border-box;
    border-radius: 0.625rem;
    .taskInput {
      background: transparent;
      border: none;
      width: calc(100% - 2rem);
      padding: 1rem;
      font-family: Inter;
      font-size: 1.25rem;
      line-height: 1.75rem;
      display: flex;
      align-items: center;
      color: $fontDark;
      &::placeholder {
        text-align: center;
        font-family: Inter;
        font-size: 1.25rem;
        color: $bgTitle;
      }
    }
    @include mobileSmall {
      font-size: 1rem;
    }
  }
}
</style>
