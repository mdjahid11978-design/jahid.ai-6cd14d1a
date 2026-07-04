// Todo App
const todoInput = document.getElementById('todoInput');
const addBtn = document.getElementById('addBtn');
const todoList = document.getElementById('todoList');
const emptyState = document.getElementById('emptyState');
const filterBtns = document.querySelectorAll('.filter-btn');
const clearCompletedBtn = document.getElementById('clearCompleted');
const clearAllBtn = document.getElementById('clearAll');
const totalTasksSpan = document.getElementById('totalTasks');
const completedTasksSpan = document.getElementById('completedTasks');
const remainingTasksSpan = document.getElementById('remainingTasks');

const STORAGE_KEY = 'jahid-todo-list';
let currentFilter = 'all';

// Initialize
function init() {
  loadTodos();
  addEventListeners();
  updateStats();
}

function addEventListeners() {
  addBtn.addEventListener('click', addTodo);
  todoInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addTodo();
  });

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      e.target.classList.add('active');
      currentFilter = e.target.dataset.filter;
      render();
    });
  });

  clearCompletedBtn.addEventListener('click', clearCompleted);
  clearAllBtn.addEventListener('click', clearAll);
}

function addTodo() {
  const text = todoInput.value.trim();
  if (!text) {
    alert('Please enter a task!');
    return;
  }

  const todos = getTodos();
  todos.push({
    id: Date.now(),
    text: text,
    completed: false,
    createdAt: new Date().toLocaleString()
  });

  saveTodos(todos);
  todoInput.value = '';
  todoInput.focus();
  render();
  updateStats();
}

function toggleTodo(id) {
  const todos = getTodos();
  const todo = todos.find(t => t.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    saveTodos(todos);
    render();
    updateStats();
  }
}

function deleteTodo(id) {
  const todos = getTodos();
  const filtered = todos.filter(t => t.id !== id);
  saveTodos(filtered);
  render();
  updateStats();
}

function clearCompleted() {
  const todos = getTodos();
  const completed = todos.filter(t => t.completed).length;
  if (completed === 0) {
    alert('No completed tasks!');
    return;
  }
  const filtered = todos.filter(t => !t.completed);
  saveTodos(filtered);
  render();
  updateStats();
}

function clearAll() {
  if (getTodos().length === 0) {
    alert('No tasks to clear!');
    return;
  }
  if (confirm('Delete all tasks?')) {
    saveTodos([]);
    render();
    updateStats();
  }
}

function getTodos() {
  const todos = localStorage.getItem(STORAGE_KEY);
  return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

function loadTodos() {
  render();
}

function render() {
  const todos = getTodos();
  let filtered = todos;

  if (currentFilter === 'active') {
    filtered = todos.filter(t => !t.completed);
  } else if (currentFilter === 'completed') {
    filtered = todos.filter(t => t.completed);
  }

  todoList.innerHTML = '';

  if (filtered.length === 0) {
    emptyState.classList.add('show');
  } else {
    emptyState.classList.remove('show');
  }

  filtered.forEach(todo => {
    const li = document.createElement('li');
    li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
    li.innerHTML = `
      <input type="checkbox" class="checkbox" ${todo.completed ? 'checked' : ''} onchange="toggleTodo(${todo.id})">
      <span class="todo-text">${escapeHtml(todo.text)}</span>
      <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
    `;
    todoList.appendChild(li);
  });
}

function updateStats() {
  const todos = getTodos();
  const completed = todos.filter(t => t.completed).length;
  totalTasksSpan.textContent = todos.length;
  completedTasksSpan.textContent = completed;
  remainingTasksSpan.textContent = todos.length - completed;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// Global functions for inline onclick
window.toggleTodo = toggleTodo;
window.deleteTodo = deleteTodo;

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
