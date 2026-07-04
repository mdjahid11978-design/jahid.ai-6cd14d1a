import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// ═══════════════════════════════════════════════════════════
// MIDDLEWARE
// ═══════════════════════════════════════════════════════════

app.use(morgan('combined'));
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true,
  optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(join(__dirname, 'public')));

// ═══════════════════════════════════════════════════════════
// API ROUTES
// ═══════════════════════════════════════════════════════════

// Health Check
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    platform: process.env.PLATFORM_NAME || 'Jahid.AI'
  });
});

// Platform Info
app.get('/api/platform', (req, res) => {
  res.json({
    name: 'Jahid.AI.01',
    version: '1.0.0',
    edition: 'Dubai Sovereign Edition',
    location: 'Dubai, UAE',
    year: 2026,
    registry: 'APEX-2026-MJ-001',
    primaryAdmin: 'Syan (mdjahid11978)',
    secondaryAdmin: 'Rina (rina.sons)'
  });
});

// ═══════════════════════════════════════════════════════════
// STATIC FILE ROUTES
// ═══════════════════════════════════════════════════════════

// Serve index.html for root
app.get('/', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'index.html'));
});

// Serve dashboard
app.get('/dashboard', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'dashboard.html'));
});

// Serve todo app
app.get('/todo', (req, res) => {
  res.sendFile(join(__dirname, 'public', 'todo.html'));
});

// ═══════════════════════════════════════════════════════════
// ERROR HANDLING
// ═══════════════════════════════════════════════════════════

app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error',
    status: err.status || 500
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
    message: `${req.method} ${req.path} not found`
  });
});

// ═══════════════════════════════════════════════════════════
// START SERVER
// ═══════════════════════════════════════════════════════════

app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════════╗
║        JAHID.AI.01 — APEX SOVEREIGN PLATFORM               ║
║                  SERVER RUNNING                            ║
╚════════════════════════════════════════════════════════════╝

✓ Server running on: http://localhost:${PORT}
✓ Environment: ${process.env.NODE_ENV || 'development'}
✓ Platform: ${process.env.PLATFORM_NAME || 'Jahid.AI'}
✓ Admin: ${process.env.PRIMARY_ADMIN_EMAIL || 'mdjahid11978@gmail.com'}
✓ Database: ${process.env.MONGODB_URI ? 'Connected' : 'Not configured'}

📊 Dashboard: http://localhost:${PORT}/dashboard
📝 Todo App: http://localhost:${PORT}/todo
🏥 Health Check: http://localhost:${PORT}/api/health

  `);
});

export default app;
