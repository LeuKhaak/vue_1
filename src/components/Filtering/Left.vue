<template>
  <span :class="$style.left">1/3 left</span>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.left {
  @include filterFont;
  @include mobile {
    margin-bottom: 0.4rem;
  }
}
</style>
