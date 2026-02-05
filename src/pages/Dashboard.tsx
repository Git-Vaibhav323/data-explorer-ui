import { Layout } from '@/components/layout/Layout';
import { SummaryCard } from '@/components/dashboard/SummaryCard';
import { DataTable } from '@/components/dashboard/DataTable';
import { LineChart } from '@/components/charts/LineChart';
import { BarChart } from '@/components/charts/BarChart';
import { PieChart } from '@/components/charts/PieChart';
import { DollarSign, Users, ShoppingCart, TrendingUp } from 'lucide-react';
import { mockSummaryStats, mockLineChartData, mockBarChartData, mockPieChartData, mockTableData, tableColumns } from '@/lib/mockData';

export default function Dashboard() {
  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="mt-1 text-muted-foreground">sales_q4_2025.csv analysis</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <SummaryCard title="Revenue" value={mockSummaryStats.trends[0].value} change={mockSummaryStats.trends[0].change} icon={DollarSign} variant="primary" />
          <SummaryCard title="Orders" value={mockSummaryStats.trends[1].value} change={mockSummaryStats.trends[1].change} icon={ShoppingCart} variant="success" />
          <SummaryCard title="Customers" value={mockSummaryStats.trends[2].value} change={mockSummaryStats.trends[2].change} icon={Users} variant="warning" />
          <SummaryCard title="Avg Order Value" value={`$${mockSummaryStats.trends[3].value}`} change={mockSummaryStats.trends[3].change} icon={TrendingUp} />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <LineChart data={mockLineChartData} title="Revenue vs Expenses" />
          <BarChart data={mockBarChartData} title="Sales by Category" />
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DataTable data={mockTableData} columns={tableColumns} />
          </div>
          <PieChart data={mockPieChartData} title="Traffic Sources" />
        </div>
      </div>
    </Layout>
  );
}
