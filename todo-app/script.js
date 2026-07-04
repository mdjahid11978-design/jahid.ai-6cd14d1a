// DOM Elements
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

// Local Storage Key
const STORAGE_KEY = 'todoList';

// Current Filter
let currentFilter = 'all';

// Initialize App
function init() {
    loadTodos();
    addEventListeners();
    updateStats();
}

// Add Event Listeners
function addEventListeners() {
    addBtn.addEventListener('click', addTodo);
    todoInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTodo();
        }
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

// Add Todo
function addTodo() {
    const text = todoInput.value.trim();

    if (text === '') {
        alert('Please enter a task!');
        return;
    }

    const todos = getTodos();
    const newTodo = {
        id: Date.now(),
        text: text,
        completed: false,
        createdAt: new Date().toLocaleString(),
    };

    todos.push(newTodo);
    saveTodos(todos);
    todoInput.value = '';
    todoInput.focus();
    render();
    updateStats();
}

// Toggle Todo
function toggleTodo(id) {
    const todos = getTodos();
    const todo = todos.find((t) => t.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        saveTodos(todos);
        render();
        updateStats();
    }
}

// Delete Todo
function deleteTodo(id) {
    const todos = getTodos();
    const filteredTodos = todos.filter((t) => t.id !== id);
    saveTodos(filteredTodos);
    render();
    updateStats();
}

// Clear Completed
function clearCompleted() {
    const todos = getTodos();
    const completedCount = todos.filter((t) => t.completed).length;

    if (completedCount === 0) {
        alert('No completed tasks to clear!');
        return;
    }

    const filteredTodos = todos.filter((t) => !t.completed);
    saveTodos(filteredTodos);
    render();
    updateStats();
}

// Clear All
function clearAll() {
    if (getTodos().length === 0) {
        alert('No tasks to clear!');
        return;
    }

    if (confirm('Are you sure you want to delete all tasks? This cannot be undone.')) {
        saveTodos([]);
        render();
        updateStats();
    }
}

// Get Todos from Local Storage
function getTodos() {
    const todos = localStorage.getItem(STORAGE_KEY);
    return todos ? JSON.parse(todos) : [];
}

// Save Todos to Local Storage
function saveTodos(todos) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// Load Todos
function loadTodos() {
    render();
}

// Render Todos
function render() {
    const todos = getTodos();
    let filteredTodos = todos;

    if (currentFilter === 'active') {
        filteredTodos = todos.filter((t) => !t.completed);
    } else if (currentFilter === 'completed') {
        filteredTodos = todos.filter((t) => t.completed);
    }

    todoList.innerHTML = '';

    if (filteredTodos.length === 0) {
        emptyState.classList.add('show');
    } else {
        emptyState.classList.remove('show');
    }

    filteredTodos.forEach((todo) => {
        const li = document.createElement('li');
        li.className = `todo-item ${todo.completed ? 'completed' : ''}`;
        li.innerHTML = `
            <input 
                type="checkbox" 
                class="checkbox" 
                ${todo.completed ? 'checked' : ''}
                onchange="toggleTodo(${todo.id})"
            >
            <span class="todo-text">${escapeHtml(todo.text)}</span>
            <button 
                class="delete-btn" 
                onclick="deleteTodo(${todo.id})"
            >
                Delete
            </button>
        `;
        todoList.appendChild(li);
    });
}

// Update Stats
function updateStats() {
    const todos = getTodos();
    const completed = todos.filter((t) => t.completed).length;
    const remaining = todos.length - completed;

    totalTasksSpan.textContent = todos.length;
    completedTasksSpan.textContent = completed;
    remainingTasksSpan.textContent = remaining;
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Initialize App on Load
window.addEventListener('DOMContentLoaded', init);