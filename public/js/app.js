// Landing page app
import { renderLanding } from './components.js';

const app = document.getElementById('app');

// Initialize landing page
function init() {
  app.innerHTML = renderLanding();
  attachEventListeners();
}

function attachEventListeners() {
  // Dashboard button
  const dashboardBtn = document.querySelector('[data-action="dashboard"]');
  if (dashboardBtn) {
    dashboardBtn.addEventListener('click', () => {
      window.location.href = '/dashboard';
    });
  }

  // Todo button
  const todoBtn = document.querySelector('[data-action="todo"]');
  if (todoBtn) {
    todoBtn.addEventListener('click', () => {
      window.location.href = '/todo';
    });
  }
}

// Initialize on load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
