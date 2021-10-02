<template>
  <div class="todo">
    <div class="todo-image">
      <div class="todo-area">
        <h3 class="todo-title">to do list</h3>

        <ul class="todo-list">
          <li class="todo-task">
            <input class="todo-check" type="checkbox" name="task">
            <span class="todo-text">Task1</span>
            <button class="todo-delete"></button>            
          </li>

          <li class="todo-task">
            <input class="todo-check" type="checkbox" name="task">
            <span class="todo-text">Task1</span>
            <button class="todo-delete"></button>            
          </li>

          <li class="todo-task">
            <input class="todo-check" type="checkbox" name="task">
            <span class="todo-text">Task1</span>
            <button class="todo-delete"></button>            
          </li>          
        </ul>

        <button class="todo-add">Add a new task</button>

        <div class="todo-filter">
          <span class="todo-left">1/3 left</span>
          <div class="todo-wrapper">
            <button class="todo-all filter-used">All</button>
            <button class="todo-active">Active</button>
            <button class="todo-completed">Completed</button>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
export default {
  name: "ToDo"
};
</script>


