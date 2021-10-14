<template>
  <div :class="$style.filter">
    <div :class="$style.wrapper">
      <Tab
        v-for="category in categories"
        :key="category.id"
        :name="category.name"
        :isChecked="category.isChecked"
      />
    </div>
  </div>
</template>

<script>
import Tab from "@/components/atoms/Tab";

export default {
  data() {
    return {
      categories: [
        { id: 1, name: "All", isChecked: true },
        { id: 2, name: "Active", isChecked: false },
        { id: 3, name: "Completed", isChecked: false },
      ],
    };
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
