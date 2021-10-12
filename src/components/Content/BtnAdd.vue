<template>
  <div :class="$style.add">
    <input type="text" name="new-task" placeholder="Add a new task" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.add {
  background: $bgAdd;
  border: 1.5px dashed $bgTitle;
  box-sizing: border-box;
  border-radius: 0.625rem;
  input {
    background: transparent;
    border: none;
    width: calc(100% - 2rem);
    padding: 1rem;
    font-family: Inter;
    font-size: 1.25rem;
    line-height: 1.75rem;
    display: flex;
    align-items: center;
    color: $fontDark;
  }
  input::placeholder {
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    color: $bgTitle;
  }
  @include mobileSmall {
    font-size: 1rem;
  }
}
</style>
