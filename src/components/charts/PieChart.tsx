import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { cn } from '@/lib/utils';
import type { ChartData } from '@/lib/mockData';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
  data: ChartData;
  title?: string;
  className?: string;
}

export function PieChart({ data, title, className }: PieChartProps) {
  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      borderWidth: 0,
      hoverOffset: 8,
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '60%',
    plugins: {
      legend: {
        position: 'right' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 16,
          color: 'hsl(220, 15%, 55%)',
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 12,
          },
        },
      },
      tooltip: {
        backgroundColor: 'hsl(220, 25%, 9%)',
        titleColor: 'hsl(220, 15%, 95%)',
        bodyColor: 'hsl(220, 15%, 75%)',
        borderColor: 'hsl(220, 20%, 18%)',
        borderWidth: 1,
        padding: 12,
        cornerRadius: 8,
        titleFont: {
          family: 'Inter, system-ui, sans-serif',
          size: 13,
          weight: 600,
        },
        bodyFont: {
          family: 'Inter, system-ui, sans-serif',
          size: 12,
        },
        callbacks: {
          label: (context: any) => {
            const value = context.parsed;
            return `${context.label}: ${value}%`;
          },
        },
      },
    },
  };

  return (
    <div className={cn('glass-card rounded-xl p-6', className)}>
      {title && (
        <h3 className="mb-4 text-lg font-semibold text-foreground">{title}</h3>
      )}
      <div className="h-72">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );
}
