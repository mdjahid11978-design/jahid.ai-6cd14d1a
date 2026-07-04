export function renderLanding() {
  return `
    <div class="landing">
      <!-- Hero -->
      <section class="hero">
        <h1>Jahid.AI.01</h1>
        <p>APEX SOVEREIGN HyperAgentic AGI Platform</p>
        <p style="font-size: 1rem; color: #999; margin-bottom: 30px;">Dubai Sovereign Edition v1.0</p>
        <div class="hero-buttons">
          <button class="btn btn-primary" data-action="dashboard">📊 Dashboard</button>
          <button class="btn btn-primary" data-action="todo">📝 Todo App</button>
          <button class="btn btn-secondary" onclick="window.location.href='#features'">Learn More</button>
        </div>
      </section>

      <!-- Features -->
      <section class="features" id="features">
        <h2>Platform Capabilities</h2>
        <div class="features-grid">
          <div class="feature-card">
            <h3>🤖 Agent Swarm</h3>
            <p>27 specialized agents across 2 swarms - JARVIS primary (17 agents) and NEXUS MD security (10 agents) - working in perfect harmony.</p>
          </div>
          <div class="feature-card">
            <h3>🧠 Memory Tiers</h3>
            <p>5-tier memory architecture: Working, Episodic, Semantic, Procedural, and Symbiotic memories powered by Qdrant, ChromaDB, and pgvector.</p>
          </div>
          <div class="feature-card">
            <h3>⚖️ AI Governance</h3>
            <p>Constitution-enforced governance with OPA policy engine, immutable audit logs, and built-in bias detection mechanisms.</p>
          </div>
          <div class="feature-card">
            <h3>📊 Real-time Analytics</h3>
            <p>Comprehensive observability with Langfuse, Grafana, and custom dashboards for complete platform transparency.</p>
          </div>
          <div class="feature-card">
            <h3>🔒 Enterprise Security</h3>
            <p>Military-grade security with NEXUS MD swarm, intrusion detection, threat classification, and auto-response systems.</p>
          </div>
          <div class="feature-card">
            <h3>💰 Token Economy</h3>
            <p>JAHID token system with trading agents, portfolio management, and financial planning capabilities.</p>
          </div>
        </div>
      </section>

      <!-- Platform Info -->
      <section class="cta">
        <h2>Powered by Advanced Architecture</h2>
        <p>Claude Sonnet 4 • FastAPI • React • Docker • Kubernetes • MQTT • Neo4j • vLLM • 29 MCP Integrations</p>
        <div class="hero-buttons" style="margin-top: 30px;">
          <button class="btn btn-primary" data-action="dashboard">Access Dashboard</button>
        </div>
      </section>
    </div>
  `;
}
