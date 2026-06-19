import { FastifyInstance } from 'fastify';
import { v4 as uuidv4 } from 'uuid';

export async function datasourceRoutes(server: FastifyInstance) {
  // List all data sources
  server.get('/datasources', async () => {
    // TODO: Fetch from database
    return {
      success: true,
      data: { items: [], total: 0 }
    };
  });

  // Create data source
  server.post('/datasources', async (request) => {
    const { name, type, config } = request.body as any;
    
    return {
      success: true,
      data: { id: uuidv4(), name, type, config }
    };
  });

  // Upload CSV file
  server.post('/datasources/upload/csv', async (request, reply) => {
    try {
      const data = await request.file();
      
      if (!data) {
        return reply.status(400).send({
          success: false,
          error: { code: 'NO_FILE', message: 'No file uploaded' }
        });
      }

      // For now, just return file info - DuckDB integration will be added later
      const chunks: Buffer[] = [];
      for await (const chunk of data.file) {
        chunks.push(chunk);
      }

      return {
        success: true,
        data: {
          id: uuidv4(),
          name: data.filename,
          type: 'csv',
          size: chunks.length,
          uploadedAt: new Date().toISOString()
        }
      };
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        error: { code: 'UPLOAD_ERROR', message: error.message }
      });
    }
  });

  // Query dataset
  server.post('/datasets/:id/query', async (request, reply) => {
    const { id } = request.params as { id: string };
    const { sql } = request.body as { sql?: string };

    try {
      if (!sql) {
        return reply.status(400).send({
          success: false,
          error: { code: 'INVALID_INPUT', message: 'SQL query is required' }
        });
      }

      // Mock response - real implementation will use DuckDB
      return {
        success: true,
        data: { results: [], message: 'Query engine not yet initialized' }
      };
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        error: { code: 'QUERY_ERROR', message: error.message }
      });
    }
  });
}
