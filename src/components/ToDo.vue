<template>
  <div class="todo">
    <div class="todo-image">
      <div class="todo-container">
        <div class="todo-area">
          <ToDoTitle />
          <ToDoContent v-bind:tasks="tasks" />
          <ToDoFilter v-bind:categories="categories" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoFilter from "./ToDoFilter/ToDoFilter.vue";
import ToDoTitle from "./ToDoTitle/ToDoTitle.vue";
import ToDoContent from "./ToDoContent/ToDoContent.vue";

export default {
  //name: "ToDo",
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
    ToDoFilter,
    ToDoTitle,
    ToDoContent,
  },
};
</script>

<style lang="scss">
.todo {
  background-image: $main-bgi;
  .todo-image {
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
    @include tablet-landscape {
      background-position: 30rem 4rem;
    }
    @include tablet-small {
      background-position: 20rem 1rem;
    }
    @include tablet-small-2 {
      background-position: 10rem 1rem;
    }
  }
}
</style>
