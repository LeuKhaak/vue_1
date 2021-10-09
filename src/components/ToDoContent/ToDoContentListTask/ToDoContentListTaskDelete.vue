<template>
  <button class="todo-delete"></button>
</template>

<script>
export default {};
</script>

<style lang="scss">
.todo-delete {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  border: 0.1rem solid $bg-title;
  border-radius: 0.3rem;
  background: transparent;
  position: relative;
}
.todo-delete:before,
.todo-delete:after {
  display: block;
  content: "";
  width: 1rem;
  height: 0.1rem;
  border-radius: 0.05rem;
  background-color: $bg-title;
  position: absolute;
  left: calc(50% - 0.5rem);
  top: 50%;
  transform: rotate(45deg);
}
.todo-delete:after {
  transform: rotate(-45deg);
}
.todo-delete:hover {
  border: 0.1rem solid $hover;
}
.todo-delete:hover:after,
.todo-delete:hover:before {
  background-color: $hover;
}
</style>
