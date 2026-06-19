import Fastify, { FastifyInstance } from 'fastify';
import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import multipart from '@fastify/multipart';
import { authRoutes } from './routes/auth';
import { datasourceRoutes } from './routes/datasources';
import { dashboardRoutes } from './routes/dashboards';

const server: FastifyInstance = Fastify({
  logger: true,
});

// Register plugins
await server.register(cors, {
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true,
});

await server.register(jwt, {
  secret: process.env.JWT_SECRET || 'zorvia-secret-key-change-in-production',
});

await server.register(multipart);

// Health check
server.get('/health', async () => {
  return { status: 'ok', timestamp: new Date().toISOString() };
});

// API routes
server.get('/', async () => {
  return { 
    name: 'Zorvia API',
    version: '1.0.0',
    description: 'PowerBI-like analytics platform'
  };
});

// Register route modules
await server.register(authRoutes, { prefix: '/api' });
await server.register(datasourceRoutes, { prefix: '/api' });
await server.register(dashboardRoutes, { prefix: '/api' });

// Start server
const start = async () => {
  try {
    await server.listen({ port: 3001, host: '0.0.0.0' });
    console.log('🚀 Zorvia API server running on http://localhost:3001');
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
