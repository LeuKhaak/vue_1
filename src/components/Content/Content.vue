<template>
  <div :class="$style.content">
    <List :tasks="tasks" />
    <AddTask />
  </div>
</template>

<script>
import AddTask from "@/components/elements/atoms/AddTask.vue";
import List from "@/components/elements/organisms/List.vue";

export default {
  props: ["tasks"],
  components: {
    AddTask,
    List,
  },
};
</script>

<style lang="scss" module>
.content {
  padding: 2rem;
}
</style>
