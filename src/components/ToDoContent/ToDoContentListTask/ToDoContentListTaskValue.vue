<template>
  <span class="todo-text">{{ task.name }}</span>
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

<style lang="scss">
span {
  font-family: Inter;
  font-size: 1.25rem;
  line-height: 1.75rem;
  display: flex;
  align-items: center;
  color: $font-dark;
  @include mobile-small {
    font-size: 1rem;
  }
}
</style>
