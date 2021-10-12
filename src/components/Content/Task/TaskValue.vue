<template>
  <span :class="$style.text">{{ task.name }}</span>
</template>

<script>
export default {
  props: {
    task: {
      type: Object,
      requared: true,
    },
  },
};
</script>

<style lang="scss" module>
span {
  font-family: Inter;
  font-size: 1.25rem;
  line-height: 1.75rem;
  display: flex;
  align-items: center;
  color: $fontDark;
  @include mobileSmall {
    font-size: 1rem;
  }
}
</style>
