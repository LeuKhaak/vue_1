<template>
  <div :class="$style.filter">
    <div :class="$style.wrapper">
      <Tab
        v-for="tab in getTabs"
        :key="tab.id"
        :id="tab.id"
        :name="tab.name"
        :isChecked="tab.isChecked"
      />
    </div>
  </div>
</template>

<script>
import Tab from "@/components/atoms/Tab";
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["getTabs"]),
  },
  components: {
    Tab,
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
  .wrapper {
    width: 18.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
