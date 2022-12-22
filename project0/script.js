const classNames = {
  TODO_ID: 0,
  TODO_ITEM: function () { return `<li class="todo-container" id=${this.TODO_ID}></li>`},
  TODO_CHECKBOX: `<input type="checkbox" class="todo-checkbox">`,
  TODO_TEXT: '<input type="text" class="todo-text">',
  TODO_DELETE: function () { return `<input type="button" class="todo-delete" value="Delete" data-id=${this.TODO_ID} onClick="deleteTodo(this)">`},
}

const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
let countTodo = 0
let countChecked = 0

function newTodo() {
  const id = countTodo + 1
  classNames.TODO_ID = id

  list.innerHTML += classNames.TODO_ITEM()
  document.getElementById(id).innerHTML += classNames.TODO_CHECKBOX + classNames.TODO_TEXT + classNames.TODO_DELETE()
  countTodo += 1
  itemCountSpan.innerHTML = countTodo
}

function deleteTodo(element){
  // todoItemId = element.parentElement.id
  // document.getElementById(todoItemId).remove()
  // console.log(todoItemId)
  document.getElementById(element.getAttribute('data-id')).remove()
  countTodo -= 1
  itemCountSpan.innerHTML = countTodo
}

