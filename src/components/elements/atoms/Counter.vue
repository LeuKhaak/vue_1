<template>
  <span :class="$style.counter">1/3 left</span>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.counter {
  @include filterFont;
  @include mobile {
    margin-bottom: 0.4rem;
  }
}
</style>
