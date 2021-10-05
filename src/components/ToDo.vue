<template>
  <div class="todo">
    <div class="todo-image">
      <div class="todo-area">
        <h3 class="todo-title">to do list</h3>

        <ul class="todo-list">
          <label>
            <li class="todo-task">
              <input class="todo-check" type="checkbox" name="task" />
              <span class="todo-text">Task1</span>
              <button class="todo-delete"></button>
            </li>
          </label>

          <label>
            <li class="todo-task">
              <input class="todo-check" type="checkbox" name="task" />
              <span class="todo-text">Task2</span>
              <button class="todo-delete"></button>
            </li>
          </label>

          <label>
            <li class="todo-task">
              <input class="todo-check" type="checkbox" name="task" />
              <span class="todo-text">Task3</span>
              <button class="todo-delete"></button>
            </li>
          </label>
        </ul>

        <input
          class="todo-add"
          type="text"
          name="new-task"
          placeholder="Add a new task"
        />

        <div class="todo-filter">
          <span class="todo-left">1/3 left</span>
          <div class="todo-wrapper">
            <label>
              <input type="radio" name="tasks" id="all" checked />
              <span>All</span>
            </label>

            <label>
              <input type="radio" name="tasks" id="active" />
              <span>Active</span>
            </label>

            <label>
              <input type="radio" name="tasks" id="completed" />
              <span>Completed</span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ToDo",
};
</script>

<style lang="scss">
.todo {
  background-image: $main-bgi;
}

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

.todo-area {
  width: 34rem;
  margin: 0 auto 0 auto;
  background: $bg-light;
  border: 0.125rem solid $bg-title;
  box-sizing: border-box;
  box-shadow: 0px 0.5rem 2.2rem 0.3rem $shadow;
  @include tablet-portrait {
    width: 32rem;
  }
  @include mobile-big {
    width: 28rem;
  }
  @include mobile {
    width: 25rem;
  }
  @include mobile-small {
    width: 20rem;
  }
}

.todo-title {
  padding: 0.625rem 0;
  text-align: center;
  background: $bg-title;
  @include filter-font;
  color: $font-dark;
}

.todo-list {
  padding: 2rem;
  padding-bottom: 0;
  @include tablet-portrait {
    padding: 2rem 1rem;
  }

  li {
    @extend %task;

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
  }
}

.todo-check {
  appearance: none;
}

.todo-check:before {
  content: "";
  font-weight: bold;
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
  background: $bg-checked;
  border: 0;
  background-image: url(../assets/images/checked.png);
  background-repeat: no-repeat;
  background-position: center center;
}

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
  border: 0.1rem solid #fc8f1a;
}

.todo-delete:hover:after,
.todo-delete:hover:before {
  background-color: #fc8f1a;
}

.todo-add {
  width: 30rem;
  margin-left: 2rem;
  //border-image: url(./images/dash.png) ...; - variant of the border

  //background: #FFECD8;           - variant of the border
  // border: 1.5px dashed $bg-title;
  // box-sizing: border-box;

  background-image: url(../assets/images/bg-button.png);
  background-repeat: no-repeat;
  background-size: 100% 100%;
  border: 0;
  border-radius: 0.625rem;
  padding: 1rem 0;

  font-family: Inter;
  font-size: 1.25rem;
  line-height: 1.75rem;
  display: flex;
  align-items: center;
  color: $font-dark;
  @include tablet-portrait {
    width: 29.5rem;
    margin-left: 1rem;
  }
  @include mobile-big {
    width: 25.5rem;
  }
  @include mobile {
    width: 22.5rem;
  }
  @include mobile-small {
    width: 17.5rem;
    font-size: 1rem;
  }
}

.todo-add::placeholder {
  text-align: center;
  font-family: Inter;
  font-size: 1.25rem;
  color: $bg-title;
}

.todo-filter {
  background: $bg-title;
  padding: 0.625rem 2rem;
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @include mobile {
    flex-direction: column;
  }
}

.todo-left {
  @include filter-font;
}

.todo-wrapper {
  display: flex;
  align-items: center;
  label {
    display: flex;
    span {
      display: block;
      @include filter-font;
      margin-right: 1.5rem;
      padding: 0.3rem 0.625rem;
    }
    #completed ~ span {
      margin-right: 0;
    }
    input {
      appearance: none;
    }

    input:checked ~ span {
      padding: 0.3rem 0.5625rem;
      border: 0.0625rem solid $filter;
      box-sizing: border-box;
      border-radius: 0.625rem;
    }
  }
}
</style>
