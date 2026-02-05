import { Layout } from '@/components/layout/Layout';
import { SummaryCard } from '@/components/dashboard/SummaryCard';
import { DataTable } from '@/components/dashboard/DataTable';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { Gauge, Thermometer, Activity, Boxes } from 'lucide-react';
import { mockSummaryStats, mockLineChartData, mockBarChartData, mockPieChartData, mockTableData, tableColumns } from '@/lib/mockData';

export default function Dashboard() {
  const metrics = mockSummaryStats.metrics;

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Equipment Analytics</h1>
          <p className="mt-1 text-muted-foreground">plant_equipment_q4_2025.csv analysis</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SummaryCard 
            title="Average Flowrate" 
            value={`${metrics[0].value} ${metrics[0].unit}`} 
            change={metrics[0].change} 
            icon={Activity} 
            variant="primary" 
          />
          <SummaryCard 
            title="Average Pressure" 
            value={`${metrics[1].value} ${metrics[1].unit}`} 
            change={metrics[1].change} 
            icon={Gauge} 
            variant="success" 
          />
          <SummaryCard 
            title="Average Temperature" 
            value={`${metrics[2].value} ${metrics[2].unit}`} 
            change={metrics[2].change} 
            icon={Thermometer} 
            variant="warning" 
          />
          <SummaryCard 
            title="Total Equipment" 
            value={`${metrics[3].value} ${metrics[3].unit}`} 
            change={metrics[3].change} 
            icon={Boxes} 
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <LineChart data={mockLineChartData} title="Flowrate vs Pressure by Equipment" />
          <BarChart data={mockBarChartData} title="Equipment Type Distribution" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DataTable data={mockTableData} columns={tableColumns} />
          </div>
          <PieChart data={mockPieChartData} title="Equipment Status" />
        </div>
      </div>
    </Layout>
  );
}
