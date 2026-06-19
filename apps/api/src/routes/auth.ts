import { FastifyInstance } from 'fastify';

export async function authRoutes(server: FastifyInstance) {
  // Register user
  server.post('/auth/register', async (request, reply) => {
    const { email, name, password } = request.body as any;
    
    if (!email || !name || !password) {
      return reply.status(400).send({ 
        success: false, 
        error: { code: 'INVALID_INPUT', message: 'Email, name and password are required' } 
      });
    }

    // TODO: Hash password and save to database
    const token = server.jwt.sign({ email, name });
    
    return {
      success: true,
      data: { token, user: { email, name } }
    };
  });

  // Login
  server.post('/auth/login', async (request, reply) => {
    const { email, password } = request.body as any;
    
    if (!email || !password) {
      return reply.status(400).send({ 
        success: false, 
        error: { code: 'INVALID_INPUT', message: 'Email and password are required' } 
      });
    }

    // TODO: Validate credentials from database
    const token = server.jwt.sign({ email });
    
    return {
      success: true,
      data: { token, user: { email } }
    };
  });

  // Get current user
  server.get('/auth/me', {
    preValidation: [async (request, reply) => {
      await request.jwtVerify();
    }]
  }, async (request) => {
    return {
      success: true,
      data: { user: request.user }
    };
  });
}
