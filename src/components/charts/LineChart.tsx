import { useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { cn } from '@/lib/utils';
import type { ChartData } from '@/lib/mockData';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

interface LineChartProps {
  data: ChartData;
  title?: string;
  className?: string;
}

export function LineChart({ data, title, className }: LineChartProps) {
  const chartRef = useRef<ChartJS<'line'>>(null);

  const chartData = {
    labels: data.labels,
    datasets: data.datasets.map((dataset) => ({
      ...dataset,
      tension: 0.4,
      fill: true,
      pointRadius: 4,
      pointHoverRadius: 6,
      pointBackgroundColor: dataset.borderColor,
      pointBorderColor: 'transparent',
    })),
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    interaction: {
      mode: 'index' as const,
      intersect: false,
    },
    plugins: {
      legend: {
        position: 'top' as const,
        align: 'end' as const,
        labels: {
          usePointStyle: true,
          pointStyle: 'circle',
          padding: 20,
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
            const value = context.parsed.y;
            return `${context.dataset.label}: $${value.toLocaleString()}`;
          },
        },
      },
    },
    scales: {
      x: {
        grid: {
          color: 'hsl(220, 20%, 14%)',
          drawBorder: false,
        },
        ticks: {
          color: 'hsl(220, 15%, 55%)',
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 11,
          },
        },
      },
      y: {
        grid: {
          color: 'hsl(220, 20%, 14%)',
          drawBorder: false,
        },
        ticks: {
          color: 'hsl(220, 15%, 55%)',
          font: {
            family: 'Inter, system-ui, sans-serif',
            size: 11,
          },
          callback: (value: any) => `$${(value / 1000).toFixed(0)}K`,
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
        <Line ref={chartRef} data={chartData} options={options} />
      </div>
    </div>
  );
}
