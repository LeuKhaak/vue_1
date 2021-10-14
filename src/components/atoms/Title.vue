<template>
  <h3 :class="$style.title">{{ title }}</h3>
</template>

<script>
export default {
  props: {
    title: String,
  },
  requared: true,
};
</script>

<style lang="scss" module>
.title {
  padding: 0.75rem 0;
  text-align: center;
  background: $bgTitle;
  @include filterFont;
  color: $fontDark;
}
</style>
