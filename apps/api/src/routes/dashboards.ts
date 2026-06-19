import { FastifyInstance } from 'fastify';
import { v4 as uuidv4 } from 'uuid';

export async function dashboardRoutes(server: FastifyInstance) {
  // List all dashboards
  server.get('/dashboards', async () => {
    // TODO: Fetch from database
    return {
      success: true,
      data: { items: [], total: 0 }
    };
  });

  // Get dashboard by ID
  server.get('/dashboards/:id', async (request) => {
    const { id } = request.params as { id: string };
    
    // TODO: Fetch from database
    return {
      success: true,
      data: { 
        id, 
        name: 'Sample Dashboard',
        description: 'A sample dashboard',
        widgets: [],
        filters: [],
        layout: { columns: 12, rows: 8 }
      }
    };
  });

  // Create dashboard
  server.post('/dashboards', async (request) => {
    const { name, description } = request.body as any;
    
    return {
      success: true,
      data: { 
        id: uuidv4(), 
        name, 
        description,
        widgets: [],
        filters: [],
        layout: { columns: 12, rows: 8 },
        createdAt: new Date().toISOString()
      }
    };
  });

  // Update dashboard
  server.put('/dashboards/:id', async (request) => {
    const { id } = request.params as { id: string };
    const { name, description, widgets, filters, layout } = request.body as any;
    
    return {
      success: true,
      data: { 
        id,
        name, 
        description,
        widgets,
        filters,
        layout,
        updatedAt: new Date().toISOString()
      }
    };
  });

  // Delete dashboard
  server.delete('/dashboards/:id', async (request) => {
    const { id } = request.params as { id: string };
    
    return {
      success: true,
      message: 'Dashboard deleted'
    };
  });

  // Execute widget query
  server.post('/dashboards/:dashboardId/widgets/:widgetId/query', async (request, reply) => {
    const { dashboardId, widgetId } = request.params as { dashboardId: string; widgetId: string };
    const { datasetId, config } = request.body as any;

    try {
      // Build query based on widget config
      let sql = '';
      
      if (config.xAxis && config.yAxis) {
        const agg = config.aggregation || 'sum';
        sql = `SELECT ${config.xAxis}, ${agg}(${config.yAxis}) as value FROM ${datasetId} GROUP BY ${config.xAxis}`;
      } else {
        sql = `SELECT * FROM ${datasetId} LIMIT 100`;
      }

      // TODO: Execute with DuckDB
      const results = []; // await executeQuery(sql);
      
      return {
        success: true,
        data: { results }
      };
    } catch (error: any) {
      return reply.status(500).send({
        success: false,
        error: { code: 'QUERY_ERROR', message: error.message }
      });
    }
  });
}
