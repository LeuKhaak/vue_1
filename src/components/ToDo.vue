<template>
  <div :class="$style.todo">
    <div :class="$style.bgImage">
      <div :class="$style.container">
        <div :class="$style.area">
          <Title />
          <Content :tasks="tasks" />
          <Filter :categories="categories" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Filter from "@/components/Filter/Filter.vue";
import Title from "./Title/Title.vue";
import Content from "./Content/Content.vue";

export default {
  data() {
    return {
      categories: [
        { id: 1, name: "All", checked: true },
        { id: 2, name: "Active", checked: false },
        { id: 3, name: "Completed", checked: false },
      ],
      tasks: [
        { id: 1, name: "Task 1" },
        { id: 2, name: "Task 2" },
        { id: 3, name: "Task 3" },
      ],
    };
  },
  components: {
    Filter,
    Title,
    Content,
  },
};
</script>

<style lang="scss" module>
.todo {
  background-image: $mainBgi;
  .bgImage {
    margin: 0 auto 0 auto;
    max-width: 74rem;
    padding-top: 6rem;
    min-height: 100vh;
    background-image: url(../assets/images/background.png);
    background-repeat: no-repeat;
    background-position: 41rem 4rem;
    @include desktop {
      background-position: 35rem 4rem;
    }
    @include tabletLandscape {
      background-position: 30rem 4rem;
    }
    @include tabletSmall {
      background-position: 20rem 1rem;
    }
    @include tabletSmallSecond {
      background-position: 10rem 1rem;
    }
    .container {
      padding: 0 0.5rem;
      .todo-area {
        max-width: 34rem;
        margin: 0 auto 0 auto;
        background: $bgLight;
        border: 0.125rem solid $bgTitle;
        box-sizing: border-box;
        box-shadow: 0px 0.5rem 2.2rem 0.3rem $shadow;
        .todo-content {
          padding: 2rem;
        }
      }
    }
  }
}
</style>
