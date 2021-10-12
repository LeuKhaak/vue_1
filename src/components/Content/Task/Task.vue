<template>
  <label>
    <li :class="$style.task">
      <Checkbox />
      <TaskValue :name="name" />
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
    name: String,
  },
};
</script>

<style lang="scss" module>
li {
  @extend %task;
}
</style>
