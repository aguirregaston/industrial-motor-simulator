:root {
  --bg: #0d1321;
  --panel: #121d2f;
  --panel-alt: #17263d;
  --line: #2d3a57;
  --text: #edf3ff;
  --muted: #8da1c7;
  --accent: #4cc9f0;
  --ok: #2dd4bf;
  --warn: #fbbf24;
  --danger: #f87171;
  --shadow: rgba(7, 14, 28, 0.5);
}

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  min-height: 100vh;
  background: radial-gradient(circle at top, #1b2a42 0%, var(--bg) 45%);
  color: var(--text);
  font-family: Arial, sans-serif;
}

button,
input,
select {
  font: inherit;
}

.app-shell {
  max-width: 1200px;
  margin: 0 auto;
  padding: 28px 20px 40px;
}

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  margin-bottom: 22px;
}

.eyebrow {
  margin: 0 0 6px;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  font-size: 11px;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 2vw + 1rem, 2.8rem);
}

h2,
h3 {
  margin-top: 0;
}

.status-chip {
  padding: 8px 14px;
  border-radius: 999px;
  background: rgba(248, 113, 113, 0.1);
  border: 1px solid rgba(248, 113, 113, 0.35);
  color: #ffd7d7;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.main-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr 1fr;
  gap: 20px;
}

.panel {
  background: rgba(18, 29, 47, 0.92);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 18px;
  box-shadow: 0 18px 30px var(--shadow);
  padding: 20px;
}

.field-grid {
  display: grid;
  gap: 16px;
}

label {
  display: block;
  color: var(--muted);
  font-size: 0.92rem;
}

input[type="range"] {
  width: 100%;
  margin-top: 8px;
}

select,
input[type="number"] {
  width: 100%;
  margin-top: 8px;
  padding: 10px 12px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.03);
  color: var(--text);
}

.inline-value {
  margin-top: 8px;
  color: var(--text);
  font-weight: 700;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 20px;
}

.button-row.small-gap {
  margin-top: 12px;
}

button {
  border: none;
  border-radius: 10px;
  padding: 11px 14px;
  cursor: pointer;
  transition: transform 0.15s ease, opacity 0.15s ease;
  font-weight: 700;
}

button:hover {
  transform: translateY(-1px);
}

button.primary {
  background: linear-gradient(135deg, var(--ok), #1bb9a6);
  color: #062a25;
}

button.secondary {
  background: rgba(76, 201, 240, 0.2);
  color: var(--text);
  border: 1px solid rgba(76, 201, 240, 0.3);
}

button.warning {
  background: rgba(251, 191, 36, 0.15);
  color: #f8d57c;
  border: 1px solid rgba(251, 191, 36, 0.35);
}

button.muted {
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
}

.diagram {
  display: grid;
  gap: 18px;
  padding-top: 6px;
}

.inline-bus {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  text-align: center;
}

.bus-label {
  background: rgba(76, 201, 240, 0.08);
  border: 1px solid rgba(76, 201, 240, 0.2);
  color: var(--accent);
  border-radius: 10px;
  padding: 8px 10px;
  font-weight: 700;
}

.circuit-row {
  display: grid;
  grid-template-columns: repeat(4, minmax(90px, 1fr));
  gap: 12px;
}

.circuit-row.second-row {
  grid-template-columns: repeat(3, minmax(90px, 1fr));
}

.device {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 82px;
  text-align: center;
  background: rgba(29, 43, 67, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 12px;
  padding: 12px;
  color: var(--text);
  font-weight: 700;
}

.device.active {
  box-shadow: 0 0 0 2px rgba(45, 212, 191, 0.7), 0 0 18px rgba(45, 212, 191, 0.25);
  background: rgba(45, 212, 191, 0.12);
}

.device.trip {
  box-shadow: 0 0 0 2px rgba(248, 113, 113, 0.8), 0 0 18px rgba(248, 113, 113, 0.2);
  background: rgba(248, 113, 113, 0.14);
}

.device.motor {
  background: rgba(76, 201, 240, 0.08);
  border-color: rgba(76, 201, 240, 0.25);
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 1fr));
  gap: 12px;
}

.stat-box {
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px;
}

.stat-box span {
  display: block;
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 6px;
}

.stat-box strong {
  font-size: 1.15rem;
}

.fault-panel {
  margin-top: 18px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 12px;
  border: 1px solid var(--line);
  padding: 18px 16px;
}

.fault-panel ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
  color: var(--muted);
}

@media (max-width: 980px) {
  .main-layout {
    grid-template-columns: 1fr;
  }
}
