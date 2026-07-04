// Dashboard functionality
const navItems = document.querySelectorAll('.nav-item');
const pageSections = document.querySelectorAll('.page-section');
const pageTitle = document.getElementById('page-title');
const currentTimeEl = document.getElementById('current-time');

// Update time
function updateTime() {
  const now = new Date();
  currentTimeEl.textContent = now.toLocaleTimeString('en-AE', { hour12: false, timeZone: 'Asia/Dubai' });
}

setInterval(updateTime, 1000);
updateTime();

// Navigation
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = item.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      // Remove active classes
      navItems.forEach(ni => ni.classList.remove('active'));
      pageSections.forEach(ps => ps.classList.remove('active'));

      // Add active classes
      item.classList.add('active');
      targetSection.classList.add('active');

      // Update title
      const titleMap = {
        'overview': 'Overview',
        'agents': 'Agent Swarm',
        'analytics': 'Analytics',
        'tasks': 'Task Management',
        'settings': 'Settings'
      };
      pageTitle.textContent = titleMap[targetId] || 'Dashboard';
    }
  });
});
