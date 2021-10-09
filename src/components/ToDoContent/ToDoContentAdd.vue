<template>
  <div class="todo-add">
    <input type="text" name="new-task" placeholder="Add a new task" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.todo-add {
  background: $bg-add;
  border: 1.5px dashed $bg-title;
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
    color: $font-dark;
  }
  input::placeholder {
    text-align: center;
    font-family: Inter;
    font-size: 1.25rem;
    color: $bg-title;
  }
  @include mobile-small {
    font-size: 1rem;
  }
}
</style>
