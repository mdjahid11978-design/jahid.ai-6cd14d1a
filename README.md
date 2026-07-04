# Jahid.AI.01 — APEX SOVEREIGN HyperAgentic AGI Platform

**Version**: 1.0.0 | **Edition**: Dubai Sovereign Edition v4.0  
**Registry**: APEX-2026-MJ-001 | **License**: MIT  
**Location**: Dubai, UAE | **Year**: 2026

---

## 🚀 Overview

Jahid.AI.01 is a **sovereign AI platform** combining 27 specialized agents across two swarms (JARVIS primary + NEXUS MD security), advanced memory architectures, enterprise governance, and real-time observability. Built for maximum autonomy with built-in safeguards.

### Core Features

✅ **Agent Swarm Architecture**
- 17 JARVIS primary agents (orchestration, research, coding, DevOps, security, trading, finance, voice, vision, automation, governance, memory, evolution, QA, UX, data, legal)
- 10 NEXUS MD security agents (network monitoring, port scanning, intrusion detection, log analysis, threat classification, incident response, auto-remediation, vulnerability scanning, certificate monitoring, swarm coordination)

✅ **5-Tier Memory System**
- Working Memory (Context Window)
- Episodic Memory (ChromaDB)
- Semantic Memory (Qdrant)
- Procedural Memory (PostgreSQL)
- Symbiotic Memory (User profiles)

✅ **Enterprise Features**
- AI Constitution with 10 enforced rules
- OPA policy engine
- Immutable audit logs
- Real-time governance checks
- Self-improvement loops enabled
- Token economy system (JAHID)

✅ **Tech Stack**
- Backend: FastAPI / Express.js
- Frontend: React (dashboard), Vanilla JS (web apps)
- Database: MongoDB, PostgreSQL, Neo4j
- Vector DB: Qdrant, ChromaDB, pgvector
- LLM: Claude Sonnet 4 (Anthropic API)
- Messaging: MQTT (Mosquitto)
- Observability: Langfuse, Grafana
- Policy: OPA (Open Policy Agent)
- Inference: Ollama, vLLM
- Speech: Whisper (input), ElevenLabs (output)
- Container: Docker, Kubernetes

---

## 📁 Project Structure

```
jahid-ai-platform/
├── public/                    # Static files & frontend
│   ├── index.html            # Landing page
│   ├── dashboard.html        # Admin dashboard
│   ├── todo.html             # Todo application
│   ├── styles/
│   │   ├── main.css          # Landing page styles
│   │   ├── dashboard.css     # Dashboard styles
│   │   └── todo.css          # Todo app styles
│   └── js/
│       ├── app.js            # Landing page logic
│       ├── components.js     # Reusable components
│       ├── dashboard.js      # Dashboard logic
│       └── todo.js           # Todo app logic
├── server.js                 # Express server
├── package.json              # Dependencies
├── .env.example              # Environment template
├── Dockerfile                # Container image
├── docker-compose.yml        # Multi-container setup
└── README.md                 # This file
```

---

## 🛠️ Installation & Setup

### Prerequisites

- Node.js 18+ 
- npm/yarn
- Docker & Docker Compose (optional)

### Local Development

1. **Clone repository**
   ```bash
   git clone https://github.com/mdjahid11978-design/jahid.ai.git
   cd jahid.ai
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure environment**
   ```bash
   cp .env.example .env
   # Edit .env with your settings
   ```

4. **Start server**
   ```bash
   npm run dev
   ```

5. **Access applications**
   - Landing Page: http://localhost:5000
   - Dashboard: http://localhost:5000/dashboard
   - Todo App: http://localhost:5000/todo
   - API Health: http://localhost:5000/api/health

### Docker Deployment

```bash
# Build image
docker build -t jahid-ai:latest .

# Run container
docker run -p 5000:5000 -e NODE_ENV=production jahid-ai:latest

# Or use docker-compose
docker-compose up
```

---

## 🌐 Platform Ownership

### Primary Admin
- **Name**: Syan (Md Jahid)
- **Handle**: @mdjahid11978
- **Email**: mdjahid11978@gmail.com
- **Permissions**: All platform notifications, IP ownership registration, system configuration, agent control, financial approvals, user management, deployments, governance
- **Badge**: PRIMARY OWNER

### Secondary Admin
- **Name**: Rina
- **Handle**: @rina.sons
- **Email**: rina.sons@icloud.com
- **Permissions**: User role management, agent monitoring, governance review, audit log access, secondary notifications
- **Badge**: CO-OWNER

---

## 📊 Available Applications

### 1. Landing Page
Hero section with feature overview and platform capabilities.
- URL: `/`
- Features listed: Agent Swarm, Memory Tiers, AI Governance, Analytics, Security, Token Economy

### 2. Dashboard
Comprehensive admin dashboard with:
- Real-time system metrics
- Agent status matrix
- Activity logs
- Settings management
- Quick actions

URL: `/dashboard`

### 3. Todo Application
Full-featured task management with:
- Add/edit/delete tasks
- Filter (All/Active/Completed)
- Real-time statistics
- Local storage persistence
- Responsive design

URL: `/todo`

---

## 🔌 API Endpoints

### Health & Platform Info

**GET** `/api/health`
```json
{
  "status": "OK",
  "timestamp": "2026-07-04T05:26:55Z",
  "uptime": 124.567,
  "platform": "Jahid.AI"
}
```

**GET** `/api/platform`
```json
{
  "name": "Jahid.AI.01",
  "version": "1.0.0",
  "edition": "Dubai Sovereign Edition",
  "location": "Dubai, UAE",
  "primaryAdmin": "Syan (mdjahid11978)",
  "secondaryAdmin": "Rina (rina.sons)"
}
```

---

## 🎨 UI/UX Features

- **Dark Theme**: Professional dark interface with cyan/gold accents
- **Responsive**: Mobile-first design, works on all devices
- **Animations**: Smooth transitions and loading states
- **Accessibility**: Semantic HTML, keyboard navigation
- **Performance**: Optimized assets, lazy loading

---

## 🔐 Security Checklist

✅ Secrets in environment variables  
✅ No hardcoded credentials  
✅ .gitignore includes .env  
✅ Input validation  
✅ CORS configured  
✅ Rate limiting ready  
✅ HTTPS enforced (production)  
✅ XSS protection  
✅ CSRF tokens ready  

---

## 📦 Deployment

### Environment Variables Required

```bash
PORT=5000
NODE_ENV=production
FRONTEND_URL=https://your-domain.com
MONGODB_URI=mongodb://user:pass@host/db
JWT_SECRET=your_secret_key
ANTHROPIC_API_KEY=your_api_key
```

### Production Checklist

- [ ] Set `NODE_ENV=production`
- [ ] Use strong JWT secret
- [ ] Configure HTTPS
- [ ] Set up database backups
- [ ] Enable rate limiting
- [ ] Configure CORS properly
- [ ] Set up monitoring/logging
- [ ] Use environment secrets manager

---

## 📈 Roadmap

- [ ] Database integration (MongoDB/PostgreSQL)
- [ ] User authentication system
- [ ] Advanced analytics dashboard
- [ ] Real-time WebSocket support
- [ ] Agent management UI
- [ ] Trading dashboard
- [ ] API documentation (Swagger)
- [ ] Mobile app

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open Pull Request

---

## 📞 Support

**Primary Admin**: mdjahid11978@gmail.com  
**Secondary Admin**: rina.sons@icloud.com  
**Issues**: GitHub Issues  
**Documentation**: See README sections above

---

## 📄 License

MIT License © 2026 Syan (mdjahid11978) + Rina (rina.sons)  
All rights reserved.

---

## 🌟 Acknowledgments

Built with modern web technologies and inspired by sovereign AI principles.

```
╔════════════════════════════════════════════════════════════╗
║   JAHID.AI.01 — APEX SOVEREIGN PLATFORM — DUBAI, UAE      ║
║        © 2026 Syan (mdjahid11978) + Rina (rina.sons)      ║
║              Registry: APEX-2026-MJ-001                   ║
║          License: APEX-PROPRIETARY-1.0 (with MIT track)   ║
╚════════════════════════════════════════════════════════════╝
```
