// Mock data simulating API responses

export interface DatasetSummary {
  id: string;
  name: string;
  uploadedAt: string;
  rowCount: number;
  columnCount: number;
  fileSize: string;
  status: 'processing' | 'ready' | 'error';
}

export interface SummaryStats {
  totalRecords: number;
  totalColumns: number;
  missingValues: number;
  completeness: number;
  averageValue: number;
  trends: {
    label: string;
    value: number;
    change: number;
  }[];
}

export interface ChartData {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    borderColor?: string;
    backgroundColor?: string | string[];
  }[];
}

export interface TableRow {
  id: string;
  [key: string]: string | number;
}

// Mock datasets history
export const mockDatasets: DatasetSummary[] = [
  {
    id: '1',
    name: 'sales_q4_2025.csv',
    uploadedAt: '2025-02-05T10:30:00Z',
    rowCount: 15420,
    columnCount: 12,
    fileSize: '2.4 MB',
    status: 'ready',
  },
  {
    id: '2',
    name: 'customer_analytics.csv',
    uploadedAt: '2025-02-04T14:22:00Z',
    rowCount: 8932,
    columnCount: 8,
    fileSize: '1.1 MB',
    status: 'ready',
  },
  {
    id: '3',
    name: 'inventory_report.csv',
    uploadedAt: '2025-02-03T09:15:00Z',
    rowCount: 3421,
    columnCount: 15,
    fileSize: '856 KB',
    status: 'ready',
  },
  {
    id: '4',
    name: 'marketing_metrics.csv',
    uploadedAt: '2025-02-02T16:45:00Z',
    rowCount: 0,
    columnCount: 0,
    fileSize: '432 KB',
    status: 'processing',
  },
  {
    id: '5',
    name: 'financial_data.csv',
    uploadedAt: '2025-02-01T11:00:00Z',
    rowCount: 0,
    columnCount: 0,
    fileSize: '3.2 MB',
    status: 'error',
  },
];

// Mock summary statistics
export const mockSummaryStats: SummaryStats = {
  totalRecords: 15420,
  totalColumns: 12,
  missingValues: 142,
  completeness: 99.1,
  averageValue: 2847.32,
  trends: [
    { label: 'Revenue', value: 1284750, change: 12.4 },
    { label: 'Orders', value: 4521, change: -2.1 },
    { label: 'Customers', value: 892, change: 8.7 },
    { label: 'Avg Order', value: 284.21, change: 15.2 },
  ],
};

// Mock line chart data
export const mockLineChartData: ChartData = {
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      label: 'Revenue',
      data: [65000, 72000, 81000, 78000, 95000, 110000, 125000, 118000, 132000, 148000, 156000, 175000],
      borderColor: 'hsl(187, 85%, 53%)',
      backgroundColor: 'hsla(187, 85%, 53%, 0.1)',
    },
    {
      label: 'Expenses',
      data: [45000, 48000, 52000, 54000, 58000, 62000, 68000, 72000, 78000, 82000, 88000, 95000],
      borderColor: 'hsl(262, 83%, 58%)',
      backgroundColor: 'hsla(262, 83%, 58%, 0.1)',
    },
  ],
};

// Mock bar chart data
export const mockBarChartData = {
  labels: ['Electronics', 'Clothing', 'Home & Garden', 'Sports', 'Books', 'Other'],
  datasets: [
    {
      label: 'Sales by Category',
      data: [42500, 38200, 28900, 22100, 15800, 12500],
      backgroundColor: [
        'hsl(187, 85%, 53%)',
        'hsl(142, 71%, 45%)',
        'hsl(262, 83%, 58%)',
        'hsl(38, 92%, 50%)',
        'hsl(340, 75%, 55%)',
        'hsl(220, 15%, 55%)',
      ],
    },
  ],
};

// Mock pie chart data
export const mockPieChartData = {
  labels: ['Direct', 'Organic Search', 'Paid Search', 'Social Media', 'Email', 'Referral'],
  datasets: [
    {
      label: 'Traffic Sources',
      data: [35, 25, 18, 12, 6, 4],
      backgroundColor: [
        'hsl(187, 85%, 53%)',
        'hsl(142, 71%, 45%)',
        'hsl(262, 83%, 58%)',
        'hsl(38, 92%, 50%)',
        'hsl(340, 75%, 55%)',
        'hsl(220, 15%, 55%)',
      ],
    },
  ],
};

// Mock table data
export const mockTableData: TableRow[] = [
  { id: '1', date: '2025-02-05', product: 'Wireless Headphones', category: 'Electronics', quantity: 45, revenue: 4275.00, region: 'North' },
  { id: '2', date: '2025-02-05', product: 'Running Shoes', category: 'Sports', quantity: 32, revenue: 3840.00, region: 'West' },
  { id: '3', date: '2025-02-04', product: 'Coffee Maker', category: 'Home & Garden', quantity: 28, revenue: 2520.00, region: 'East' },
  { id: '4', date: '2025-02-04', product: 'Winter Jacket', category: 'Clothing', quantity: 56, revenue: 5600.00, region: 'North' },
  { id: '5', date: '2025-02-03', product: 'Bluetooth Speaker', category: 'Electronics', quantity: 38, revenue: 2280.00, region: 'South' },
  { id: '6', date: '2025-02-03', product: 'Yoga Mat', category: 'Sports', quantity: 64, revenue: 1920.00, region: 'West' },
  { id: '7', date: '2025-02-02', product: 'Desk Lamp', category: 'Home & Garden', quantity: 41, revenue: 1230.00, region: 'East' },
  { id: '8', date: '2025-02-02', product: 'Novel Collection', category: 'Books', quantity: 89, revenue: 1335.00, region: 'North' },
  { id: '9', date: '2025-02-01', product: 'Smart Watch', category: 'Electronics', quantity: 23, revenue: 5750.00, region: 'South' },
  { id: '10', date: '2025-02-01', product: 'Hiking Backpack', category: 'Sports', quantity: 19, revenue: 1710.00, region: 'West' },
];

export const tableColumns = ['date', 'product', 'category', 'quantity', 'revenue', 'region'];
