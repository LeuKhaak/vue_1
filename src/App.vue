<template>
  <div id="app">
    <ToDo />
  </div>
</template>

<script>
import ToDo from "@/components/organisms/ToDo.vue";
//import { mapActions } from "vuex";

export default {
  name: "App",
  mounted() {
    this.$store.dispatch("setSavedData");
  },
  components: {
    ToDo,
  },
};
</script>
