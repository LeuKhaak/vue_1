<template>
  <input class="todo-check" type="checkbox" name="task" />
</template>

<script>
export default {};
</script>

<style lang="scss">
.todo-check {
  appearance: none;
}
.todo-check:before {
  content: "";
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 0.125rem solid $bg-checked;
  box-sizing: border-box;
  border-radius: 0.3rem;
  margin-right: 1.5rem;
}
.todo-check:checked:before {
  background: $bg-checked url(../../../assets/images/checked.png) center
    no-repeat;
  border: 0;
}
</style>
