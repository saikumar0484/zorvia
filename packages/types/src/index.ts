// Data source types
export interface DataSource {
  id: string;
  name: string;
  type: 'csv' | 'excel' | 'postgres' | 'mysql' | 'json' | 'rest';
  config: DataSourceConfig;
  createdAt: Date;
  updatedAt: Date;
}

export interface DataSourceConfig {
  // File-based sources
  filePath?: string;
  
  // Database sources
  host?: string;
  port?: number;
  database?: string;
  username?: string;
  password?: string;
  
  // API sources
  url?: string;
  headers?: Record<string, string>;
  method?: 'GET' | 'POST';
}

// Dataset types
export interface Dataset {
  id: string;
  dataSourceId: string;
  name: string;
  schema: Column[];
  rowCount: number;
  lastRefreshedAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface Column {
  name: string;
  type: 'string' | 'number' | 'boolean' | 'date' | 'datetime';
  nullable: boolean;
}

// Dashboard types
export interface Dashboard {
  id: string;
  name: string;
  description?: string;
  widgets: Widget[];
  filters: DashboardFilter[];
  layout: DashboardLayout;
  createdAt: Date;
  updatedAt: Date;
}

export interface Widget {
  id: string;
  type: WidgetType;
  title: string;
  datasetId: string;
  config: WidgetConfig;
  position: WidgetPosition;
  size: WidgetSize;
}

export type WidgetType = 
  | 'bar-chart'
  | 'line-chart'
  | 'pie-chart'
  | 'donut-chart'
  | 'area-chart'
  | 'scatter-plot'
  | 'table'
  | 'kpi-card'
  | 'gauge-chart';

export interface WidgetConfig {
  // Chart-specific config
  xAxis?: string;
  yAxis?: string;
  series?: string[];
  aggregation?: 'sum' | 'avg' | 'count' | 'min' | 'max';
  
  // KPI-specific config
  metric?: string;
  comparisonMetric?: string;
  
  // Table-specific config
  columns?: string[];
  sortable?: boolean;
  filterable?: boolean;
  
  // Common
  colors?: string[];
  showLegend?: boolean;
  showGrid?: boolean;
}

export interface WidgetPosition {
  x: number;
  y: number;
}

export interface WidgetSize {
  width: number;
  height: number;
}

export interface DashboardFilter {
  id: string;
  field: string;
  operator: 'equals' | 'contains' | 'greaterThan' | 'lessThan' | 'between' | 'in';
  value: any;
}

export interface DashboardLayout {
  columns: number;
  rows: number;
  responsive: boolean;
}

// Query types
export interface Query {
  id: string;
  datasetId: string;
  select: string[];
  where?: QueryCondition;
  groupBy?: string[];
  orderBy?: QueryOrder[];
  limit?: number;
  offset?: number;
}

export interface QueryCondition {
  field: string;
  operator: 'eq' | 'ne' | 'gt' | 'lt' | 'gte' | 'lte' | 'in' | 'like';
  value: any;
  and?: QueryCondition[];
  or?: QueryCondition[];
}

export interface QueryOrder {
  field: string;
  direction: 'asc' | 'desc';
}

// User & Auth types
export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthToken {
  token: string;
  userId: string;
  expiresAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: ApiError;
}

export interface ApiError {
  code: string;
  message: string;
  details?: any;
}

// Pagination
export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
