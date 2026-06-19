# Zorvia - PowerBI-like Analytics Tool

## Project Plan

### Phase 1: Foundation & Core Architecture
- [x] Project setup with monorepo structure
- [ ] Backend API server (Node.js + Express/Fastify)
- [ ] Frontend application (React + TypeScript + Vite)
- [ ] Database setup (PostgreSQL for metadata, DuckDB for analytics)
- [ ] Authentication system (JWT-based)

### Phase 2: Data Connectors
- [ ] REST API connector
- [ ] CSV/Excel file upload
- [ ] PostgreSQL database connector
- [ ] MySQL database connector
- [ ] JSON data source
- [ ] Connector management UI

### Phase 3: Data Modeling Engine
- [ ] Data schema detection
- [ ] Relationship builder (one-to-many, many-to-many)
- [ ] Calculated columns (DAX-like expressions)
- [ ] Data transformation pipeline
- [ ] Query optimizer using DuckDB

### Phase 4: Visualization Library
- [ ] Bar charts (vertical, horizontal, stacked)
- [ ] Line charts (single, multi-series)
- [ ] Pie/Donut charts
- [ ] Area charts
- [ ] Scatter plots
- [ ] Tables and grids
- [ ] KPI cards
- [ ] Gauge charts
- [ ] Map visualizations

### Phase 5: Dashboard Builder
- [ ] Drag-and-drop canvas
- [ ] Widget resizing and positioning
- [ ] Filter panel with slicers
- [ ] Cross-filtering between visuals
- [ ] Dashboard templates
- [ ] Responsive layout engine

### Phase 6: Real-time & Collaboration
- [ ] WebSocket server for real-time updates
- [ ] Live data refresh
- [ ] Shared dashboards
- [ ] Comments and annotations
- [ ] Version history

### Phase 7: Export & Sharing
- [ ] PDF export
- [ ] PNG/SVG export
- [ ] Excel export
- [ ] Public sharing links
- [ ] Embed codes

### Phase 8: Advanced Features
- [ ] AI-powered insights
- [ ] Natural language queries
- [ ] Anomaly detection
- [ ] Forecasting
- [ ] Custom visual extensions

---

## Tech Stack

**Frontend:**
- React 18 + TypeScript
- Vite (build tool)
- TailwindCSS (styling)
- Recharts/Visx (charting)
- React DnD (drag-and-drop)
- Zustand (state management)
- React Query (data fetching)

**Backend:**
- Node.js + Fastify
- TypeScript
- PostgreSQL (metadata storage)
- DuckDB (analytics engine)
- Redis (caching)
- JWT (authentication)

**Infrastructure:**
- Docker & Docker Compose
- GitHub Actions (CI/CD)

---

## Directory Structure

```
zorvia/
├── apps/
│   ├── web/                 # Frontend React app
│   └── api/                 # Backend API server
├── packages/
│   ├── ui/                  # Shared UI components
│   ├── connectors/          # Data connector library
│   ├── query-engine/        # DuckDB query layer
│   └── types/               # Shared TypeScript types
├── docker-compose.yml
├── package.json
└── README.md
```

---

## Implementation Order

1. **Setup** - Monorepo, dependencies, basic config
2. **Backend Core** - API server, auth, database models
3. **Data Connectors** - File upload, basic connectors
4. **Query Engine** - DuckDB integration
5. **Frontend Shell** - Layout, navigation, auth UI
6. **Visualizations** - Chart components library
7. **Dashboard Builder** - Canvas, widgets, filters
8. **Real-time** - WebSockets, live updates
9. **Polish** - Export, sharing, optimizations

Let's build! 🚀
