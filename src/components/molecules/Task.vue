<template>
  <label :class="$style.task">
    <input
      :class="$style.check"
      type="checkbox"
      name="task"
      :checked="isChecked"
    />
    <span :class="$style.text">{{ name }}</span>
    <button :class="$style.delete"></button>
  </label>
</template>

<script>
export default {
  props: {
    name: String,
    isChecked: Boolean,
  },
};
</script>

<style lang="scss" module>
.task {
  @extend %task;
  .check {
    appearance: none;
    &:before {
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
    &:checked:before {
      background: $bgChecked url(../../assets/images/checked.png) center
        no-repeat;
      border: 0;
    }
  }
  .text {
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
  .delete {
    width: 1.5rem;
    height: 1.5rem;
    margin-left: auto;
    border: 0.1rem solid $bgTitle;
    border-radius: 0.3rem;
    background: transparent;
    position: relative;
    &:before,
    &:after {
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
    &:after {
      transform: rotate(-45deg);
    }
    &:hover {
      border: 0.1rem solid $hover;
    }
    &:hover:after,
    &:hover:before {
      background-color: $hover;
    }
  }
}
</style>
