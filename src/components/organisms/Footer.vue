<template>
  <div :class="$style.filter">
    <span :class="$style.counter"
      >{{ getCompletedTasksAmount }}/{{ getTasksAmount }} left</span
    >
    <TabList />
  </div>
</template>

<script>
import TabList from "@/components/molecules/TabList.vue";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTasksAmount", "getCompletedTasksAmount"]),
  },
  components: {
    TabList,
  },
};
</script>

<style lang="scss" module>
.filter {
  background: $bgTitle;
  padding: 0.4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mobile {
    flex-direction: column;
  }
  .counter {
    @include filterFont;
    @include mobile {
      margin-bottom: 0.4rem;
    }
  }
  .wrapper {
    width: 18.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
