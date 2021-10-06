<template>
  <div class="todo">
    <div class="todo-image">
      <div class="todo-container">
        <div class="todo-area">
          <h3 class="todo-title">to do list</h3>

          <div class="todo-content">
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

            <div class="todo-add">
              <input type="text" name="new-task" placeholder="Add a new task" />
            </div>
          </div>

          <div class="todo-filter">
            <span class="todo-left">1/3 left</span>
            <div class="todo-wrapper">
              <label>
                <input type="radio" name="tasks" checked />
                <span>All</span>
              </label>

              <label>
                <input type="radio" name="tasks" />
                <span>Active</span>
              </label>

              <label>
                <input type="radio" name="tasks" class="completed" />
                <span>Completed</span>
              </label>
            </div>
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
    .todo-container {
      padding: 0 0.5rem;
      .todo-area {
        max-width: 34rem;
        margin: 0 auto 0 auto;
        background: $bg-light;
        border: 0.125rem solid $bg-title;
        box-sizing: border-box;
        box-shadow: 0px 0.5rem 2.2rem 0.3rem $shadow;
        .todo-title {
          padding: 0.75rem 0;
          text-align: center;
          background: $bg-title;
          @include filter-font;
          color: $font-dark;
        }
        .todo-content {
          padding: 2rem;
          .todo-list {
            padding-bottom: 0;
            li {
              @extend %task;
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
                background: $bg-checked url(../assets/images/checked.png) center
                  no-repeat;
                border: 0;
              }
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
            }
          }
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
        }
        .todo-filter {
          background: $bg-title;
          padding: 0.4rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          @include mobile {
            flex-direction: column;
          }
          .todo-left {
            @include filter-font;
            @include mobile {
              margin-bottom: 0.4rem;
            }
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
              .completed ~ span {
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
        }
      }
    }
  }
}
</style>
