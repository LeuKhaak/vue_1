<template>
  <div id="app">
    <ToDo />
  </div>
</template>

<script>
import ToDo from "@/components/organisms/ToDo.vue";
import { mapMutations } from "vuex";

export default {
  name: "App",
  mounted() {
    if (localStorage.getItem("tasks")) this.setData();
  },
  methods: {
    ...mapMutations(["setSavedData"]),
    setData() {
      this.setSavedData();
    },
  },
  components: {
    ToDo,
  },
};
</script>
