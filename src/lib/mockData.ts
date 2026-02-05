// Mock data simulating API responses for chemical equipment analytics

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
  metrics: {
    label: string;
    value: number;
    unit: string;
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
    name: 'plant_equipment_q4_2025.csv',
    uploadedAt: '2025-02-05T10:30:00Z',
    rowCount: 1542,
    columnCount: 8,
    fileSize: '856 KB',
    status: 'ready',
  },
  {
    id: '2',
    name: 'reactor_readings.csv',
    uploadedAt: '2025-02-04T14:22:00Z',
    rowCount: 892,
    columnCount: 6,
    fileSize: '412 KB',
    status: 'ready',
  },
  {
    id: '3',
    name: 'heat_exchanger_logs.csv',
    uploadedAt: '2025-02-03T09:15:00Z',
    rowCount: 3421,
    columnCount: 7,
    fileSize: '1.2 MB',
    status: 'ready',
  },
  {
    id: '4',
    name: 'pump_station_data.csv',
    uploadedAt: '2025-02-02T16:45:00Z',
    rowCount: 0,
    columnCount: 0,
    fileSize: '432 KB',
    status: 'processing',
  },
  {
    id: '5',
    name: 'compressor_metrics.csv',
    uploadedAt: '2025-02-01T11:00:00Z',
    rowCount: 0,
    columnCount: 0,
    fileSize: '678 KB',
    status: 'error',
  },
];

// Mock summary statistics for chemical equipment
export const mockSummaryStats: SummaryStats = {
  totalRecords: 1542,
  totalColumns: 8,
  missingValues: 23,
  completeness: 98.5,
  metrics: [
    { label: 'Average Flowrate', value: 847.32, unit: 'L/min', change: 5.2 },
    { label: 'Average Pressure', value: 12.8, unit: 'bar', change: -1.4 },
    { label: 'Average Temperature', value: 78.5, unit: '°C', change: 2.8 },
    { label: 'Total Equipment', value: 156, unit: 'units', change: 8.3 },
  ],
};

// Mock line chart data - Flowrate vs Pressure over equipment
export const mockLineChartData: ChartData = {
  labels: ['EQ-001', 'EQ-002', 'EQ-003', 'EQ-004', 'EQ-005', 'EQ-006', 'EQ-007', 'EQ-008', 'EQ-009', 'EQ-010', 'EQ-011', 'EQ-012'],
  datasets: [
    {
      label: 'Flowrate (L/min)',
      data: [650, 720, 810, 780, 950, 1100, 890, 1180, 1020, 1148, 956, 1075],
      borderColor: 'hsl(187, 85%, 53%)',
      backgroundColor: 'hsla(187, 85%, 53%, 0.1)',
    },
    {
      label: 'Pressure (bar)',
      data: [10.5, 11.2, 12.8, 13.1, 11.8, 14.2, 12.5, 15.1, 13.8, 12.9, 14.5, 13.2],
      borderColor: 'hsl(262, 83%, 58%)',
      backgroundColor: 'hsla(262, 83%, 58%, 0.1)',
    },
  ],
};

// Mock bar chart data - Equipment Type Distribution
export const mockBarChartData: ChartData = {
  labels: ['Pumps', 'Reactors', 'Heat Exchangers', 'Compressors', 'Tanks', 'Valves'],
  datasets: [
    {
      label: 'Equipment Count',
      data: [42, 18, 24, 15, 32, 25],
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

// Mock pie chart data - Equipment Status Distribution
export const mockPieChartData: ChartData = {
  labels: ['Operational', 'Maintenance', 'Standby', 'Offline', 'Under Repair', 'Decommissioned'],
  datasets: [
    {
      label: 'Equipment Status',
      data: [68, 12, 8, 5, 4, 3],
      backgroundColor: [
        'hsl(142, 71%, 45%)',
        'hsl(38, 92%, 50%)',
        'hsl(187, 85%, 53%)',
        'hsl(220, 15%, 55%)',
        'hsl(340, 75%, 55%)',
        'hsl(262, 83%, 58%)',
      ],
    },
  ],
};

// Mock table data - Equipment readings
export const mockTableData: TableRow[] = [
  { id: '1', equipment_name: 'Centrifugal Pump A1', type: 'Pump', flowrate: 892.5, pressure: 12.4, temperature: 45.2 },
  { id: '2', equipment_name: 'Reactor R-101', type: 'Reactor', flowrate: 1250.0, pressure: 18.5, temperature: 185.0 },
  { id: '3', equipment_name: 'Shell & Tube HX-01', type: 'Heat Exchanger', flowrate: 2100.0, pressure: 8.2, temperature: 92.5 },
  { id: '4', equipment_name: 'Screw Compressor C1', type: 'Compressor', flowrate: 450.0, pressure: 32.0, temperature: 68.0 },
  { id: '5', equipment_name: 'Storage Tank T-201', type: 'Tank', flowrate: 0.0, pressure: 1.2, temperature: 25.0 },
  { id: '6', equipment_name: 'Control Valve V-101', type: 'Valve', flowrate: 340.0, pressure: 15.8, temperature: 55.0 },
  { id: '7', equipment_name: 'Booster Pump P-301', type: 'Pump', flowrate: 1580.0, pressure: 22.5, temperature: 38.0 },
  { id: '8', equipment_name: 'CSTR Reactor R-202', type: 'Reactor', flowrate: 980.0, pressure: 14.2, temperature: 165.0 },
  { id: '9', equipment_name: 'Plate HX-02', type: 'Heat Exchanger', flowrate: 1850.0, pressure: 6.8, temperature: 78.0 },
  { id: '10', equipment_name: 'Reciprocating Comp C2', type: 'Compressor', flowrate: 380.0, pressure: 45.0, temperature: 85.0 },
];

export const tableColumns = ['equipment_name', 'type', 'flowrate', 'pressure', 'temperature'];
