<template>
  <div class="content">
    <List :tasks="tasks" />
    <BtnAdd />
  </div>
</template>

<script>
import BtnAdd from "./BtnAdd.vue";
import List from "./List.vue";

export default {
  props: ["tasks"],
  components: {
    BtnAdd,
    List,
  },
};
</script>
