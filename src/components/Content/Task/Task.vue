<template>
  <label>
    <li :class="$style.task">
      <Checkbox />
      <TaskValue :task="task" />
      <BtnDelete />
    </li>
  </label>
</template>

<script>
import Checkbox from "./Checkbox.vue";
import TaskValue from "./TaskValue.vue";
import BtnDelete from "./BtnDelete.vue";

export default {
  components: {
    Checkbox,
    TaskValue,
    BtnDelete,
  },
  props: {
    task: {
      type: Object,
      requared: true,
    },
  },
};
</script>

<style lang="scss" module>
li {
  @extend %task;
}
</style>
