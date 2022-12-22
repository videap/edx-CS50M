const classNames = {
  TODO_ID: 0,
  TODO_ITEM: function () { return `<li class="todo-container" id=${this.TODO_ID}></li>`},
  TODO_CHECKBOX: `<input type="checkbox" class="todo-checkbox" onClick="checkTodos()">`,
  TODO_TEXT: '<input type="text" class="todo-text">',
  TODO_DELETE: function () { return `<input type="button" class="todo-delete" value="Delete" data-id=${this.TODO_ID} onClick="deleteTodo(this)">`},
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let countTodo = 0
let countUnchecked = 0

function newTodo() {
  const id = countTodo + 1
  classNames.TODO_ID = id

  list.innerHTML += classNames.TODO_ITEM()
  document.getElementById(id).innerHTML += classNames.TODO_CHECKBOX + classNames.TODO_TEXT + classNames.TODO_DELETE()

  countTodo += 1
  itemCountSpan.innerHTML = countTodo
  checkTodos()
}

function deleteTodo(element){
  document.getElementById(element.getAttribute('data-id')).remove()
  countTodo -= 1
  itemCountSpan.innerHTML = countTodo
  checkTodos()
}

function checkTodos() {
  countUnchecked = 0
  document.querySelectorAll(".todo-checkbox").forEach(element => {

    if (element.checked === false){
      countUnchecked += 1
    }
    uncheckedCountSpan.innerHTML = countUnchecked
  });
}