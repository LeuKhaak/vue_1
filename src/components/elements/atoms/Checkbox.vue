<template>
  <input :class="$style.check" type="checkbox" name="task" />
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.check {
  appearance: none;
}
.check:before {
  content: "";
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1.5rem;
  height: 1.5rem;
  border: 0.125rem solid $bgChecked;
  box-sizing: border-box;
  border-radius: 0.3rem;
  margin-right: 1.5rem;
}
.check:checked:before {
  background: $bgChecked url(../../../assets/images/checked.png) center
    no-repeat;
  border: 0;
}
</style>
