import { FileSpreadsheet, Clock, Rows3, Columns3, HardDrive, CheckCircle, Loader2, XCircle, MoreVertical } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { DatasetSummary } from '@/lib/mockData';

interface DatasetHistoryProps {
  datasets: DatasetSummary[];
  onSelect?: (dataset: DatasetSummary) => void;
  className?: string;
}

export function DatasetHistory({ datasets, onSelect, className }: DatasetHistoryProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  const getStatusIcon = (status: DatasetSummary['status']) => {
    switch (status) {
      case 'ready':
        return <CheckCircle className="h-4 w-4 text-success" />;
      case 'processing':
        return <Loader2 className="h-4 w-4 text-warning animate-spin" />;
      case 'error':
        return <XCircle className="h-4 w-4 text-destructive" />;
    }
  };

  const getStatusLabel = (status: DatasetSummary['status']) => {
    switch (status) {
      case 'ready':
        return 'Ready';
      case 'processing':
        return 'Processing';
      case 'error':
        return 'Failed';
    }
  };

  return (
    <div className={cn('space-y-4', className)}>
      {datasets.map((dataset, index) => (
        <div
          key={dataset.id}
          className={cn(
            'glass-card rounded-xl p-5 transition-all duration-300 hover:scale-[1.01] animate-fade-in',
            dataset.status === 'ready' && 'cursor-pointer hover:border-primary/50'
          )}
          style={{ animationDelay: `${index * 50}ms` }}
          onClick={() => dataset.status === 'ready' && onSelect?.(dataset)}
        >
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div
                className={cn(
                  'flex h-12 w-12 items-center justify-center rounded-xl',
                  dataset.status === 'ready' && 'bg-primary/10',
                  dataset.status === 'processing' && 'bg-warning/10',
                  dataset.status === 'error' && 'bg-destructive/10'
                )}
              >
                <FileSpreadsheet
                  className={cn(
                    'h-6 w-6',
                    dataset.status === 'ready' && 'text-primary',
                    dataset.status === 'processing' && 'text-warning',
                    dataset.status === 'error' && 'text-destructive'
                  )}
                />
              </div>
              <div className="space-y-1">
                <p className="font-medium text-foreground">{dataset.name}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Clock className="h-3.5 w-3.5" />
                    {formatDate(dataset.uploadedAt)}
                  </span>
                  {dataset.status === 'ready' && (
                    <>
                      <span className="flex items-center gap-1">
                        <Rows3 className="h-3.5 w-3.5" />
                        {dataset.rowCount.toLocaleString()} rows
                      </span>
                      <span className="flex items-center gap-1">
                        <Columns3 className="h-3.5 w-3.5" />
                        {dataset.columnCount} cols
                      </span>
                    </>
                  )}
                  <span className="flex items-center gap-1">
                    <HardDrive className="h-3.5 w-3.5" />
                    {dataset.fileSize}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div
                className={cn(
                  'flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium',
                  dataset.status === 'ready' && 'bg-success/10 text-success',
                  dataset.status === 'processing' && 'bg-warning/10 text-warning',
                  dataset.status === 'error' && 'bg-destructive/10 text-destructive'
                )}
              >
                {getStatusIcon(dataset.status)}
                {getStatusLabel(dataset.status)}
              </div>

              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreVertical className="h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="bg-popover border-border">
                  <DropdownMenuItem>View Details</DropdownMenuItem>
                  <DropdownMenuItem>Download</DropdownMenuItem>
                  <DropdownMenuItem className="text-destructive">Delete</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
