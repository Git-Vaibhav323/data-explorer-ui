import { cn } from '@/lib/utils';
import { TrendingUp, TrendingDown, Minus } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

interface SummaryCardProps {
  title: string;
  value: string | number;
  change?: number;
  icon?: LucideIcon;
  variant?: 'default' | 'primary' | 'success' | 'warning';
  className?: string;
}

export function SummaryCard({
  title,
  value,
  change,
  icon: Icon,
  variant = 'default',
  className,
}: SummaryCardProps) {
  const formatValue = (val: string | number) => {
    if (typeof val === 'number') {
      if (val >= 1000000) return `${(val / 1000000).toFixed(1)}M`;
      if (val >= 1000) return `${(val / 1000).toFixed(1)}K`;
      return val.toLocaleString();
    }
    return val;
  };

  const getTrendIcon = () => {
    if (change === undefined) return null;
    if (change > 0) return <TrendingUp className="h-4 w-4" />;
    if (change < 0) return <TrendingDown className="h-4 w-4" />;
    return <Minus className="h-4 w-4" />;
  };

  const getTrendColor = () => {
    if (change === undefined) return '';
    if (change > 0) return 'text-success';
    if (change < 0) return 'text-destructive';
    return 'text-muted-foreground';
  };

  const variantStyles = {
    default: 'border-border',
    primary: 'border-primary/30 glow-primary',
    success: 'border-success/30',
    warning: 'border-warning/30',
  };

  return (
    <div
      className={cn(
        'glass-card rounded-xl p-6 transition-all duration-300 hover:scale-[1.02]',
        variantStyles[variant],
        className
      )}
    >
      <div className="flex items-start justify-between">
        <div className="space-y-2">
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="text-3xl font-bold tracking-tight text-foreground">
            {formatValue(value)}
          </p>
          {change !== undefined && (
            <div className={cn('flex items-center gap-1 text-sm font-medium', getTrendColor())}>
              {getTrendIcon()}
              <span>{Math.abs(change)}%</span>
              <span className="text-muted-foreground">vs last period</span>
            </div>
          )}
        </div>
        {Icon && (
          <div
            className={cn(
              'flex h-12 w-12 items-center justify-center rounded-xl',
              variant === 'primary' && 'gradient-primary',
              variant === 'success' && 'gradient-success',
              variant === 'warning' && 'gradient-warning',
              variant === 'default' && 'bg-muted'
            )}
          >
            <Icon className={cn('h-6 w-6', variant === 'default' ? 'text-muted-foreground' : 'text-card')} />
          </div>
        )}
      </div>
    </div>
  );
}
