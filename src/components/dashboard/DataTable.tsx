import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { cn } from '@/lib/utils';
import type { TableRow as TableRowData } from '@/lib/mockData';

interface DataTableProps {
  data: TableRowData[];
  columns: string[];
  className?: string;
}

export function DataTable({ data, columns, className }: DataTableProps) {
  const formatCell = (value: string | number, column: string) => {
    if (column === 'flowrate' && typeof value === 'number') {
      return `${value.toLocaleString('en-US', { minimumFractionDigits: 1 })} L/min`;
    }
    if (column === 'pressure' && typeof value === 'number') {
      return `${value.toFixed(1)} bar`;
    }
    if (column === 'temperature' && typeof value === 'number') {
      return `${value.toFixed(1)} °C`;
    }
    return value;
  };

  const formatHeader = (column: string) => {
    return column.charAt(0).toUpperCase() + column.slice(1).replace(/_/g, ' ');
  };

  return (
    <div className={cn('glass-card rounded-xl overflow-hidden', className)}>
      <div className="border-b border-border px-6 py-4">
        <h3 className="text-lg font-semibold text-foreground">Data Preview</h3>
        <p className="text-sm text-muted-foreground">
          Showing {data.length} records
        </p>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-border hover:bg-transparent">
              {columns.map((column) => (
                <TableHead
                  key={column}
                  className="bg-muted/50 text-xs font-semibold uppercase tracking-wider text-muted-foreground"
                >
                  {formatHeader(column)}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow
                key={row.id}
                className={cn(
                  'border-border transition-colors',
                  index % 2 === 0 ? 'bg-transparent' : 'bg-muted/20'
                )}
              >
                {columns.map((column) => (
                  <TableCell
                    key={column}
                    className={cn(
                      'text-sm',
                      (column === 'flowrate' || column === 'pressure' || column === 'temperature') && 'font-mono font-medium text-primary'
                    )}
                  >
                    {formatCell(row[column], column)}
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
