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
import Checkbox from "@/components/elements/atoms/Checkbox.vue";
import TaskValue from "@/components/elements/atoms/TaskValue.vue";
import BtnDelete from "@/components/elements/atoms/BtnDelete.vue";

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
