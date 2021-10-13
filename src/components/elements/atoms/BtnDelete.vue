<template>
  <button :class="$style.delete"></button>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.delete {
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
  border: 0.1rem solid $bgTitle;
  border-radius: 0.3rem;
  background: transparent;
  position: relative;
}
.delete:before,
.delete:after {
  display: block;
  content: "";
  width: 1rem;
  height: 0.1rem;
  border-radius: 0.05rem;
  background-color: $bgTitle;
  position: absolute;
  left: calc(50% - 0.5rem);
  top: 50%;
  transform: rotate(45deg);
}
.delete:after {
  transform: rotate(-45deg);
}
.delete:hover {
  border: 0.1rem solid $hover;
}
.delete:hover:after,
.delete:hover:before {
  background-color: $hover;
}
</style>
