import { useState, useCallback } from 'react';
import { Upload, FileSpreadsheet, X, CheckCircle, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface FileUploadProps {
  onUpload?: (file: File) => void;
  className?: string;
}

export function FileUpload({ onUpload, className }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<'idle' | 'uploading' | 'success' | 'error'>('idle');

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.name.endsWith('.csv')) {
      setFile(droppedFile);
      setUploadState('idle');
    }
  }, []);

  const handleFileSelect = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
      setUploadState('idle');
    }
  }, []);

  const handleUpload = useCallback(() => {
    if (!file) return;

    setUploadState('uploading');
    
    // Simulate upload delay
    setTimeout(() => {
      setUploadState('success');
      onUpload?.(file);
    }, 2000);
  }, [file, onUpload]);

  const handleRemove = useCallback(() => {
    setFile(null);
    setUploadState('idle');
  }, []);

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024) return `${bytes} B`;
    if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  return (
    <div className={cn('w-full', className)}>
      {!file ? (
        <label
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
          className={cn(
            'flex flex-col items-center justify-center gap-4 rounded-2xl border-2 border-dashed p-12 transition-all duration-300 cursor-pointer',
            isDragging
              ? 'border-primary bg-primary/5 scale-[1.02]'
              : 'border-border bg-muted/30 hover:border-primary/50 hover:bg-muted/50'
          )}
        >
          <input
            type="file"
            accept=".csv"
            onChange={handleFileSelect}
            className="hidden"
          />
          <div
            className={cn(
              'flex h-20 w-20 items-center justify-center rounded-2xl transition-all duration-300',
              isDragging ? 'gradient-primary scale-110' : 'bg-muted'
            )}
          >
            <Upload
              className={cn(
                'h-10 w-10 transition-colors',
                isDragging ? 'text-primary-foreground' : 'text-muted-foreground'
              )}
            />
          </div>
          <div className="text-center">
            <p className="text-lg font-medium text-foreground">
              {isDragging ? 'Drop your CSV file here' : 'Drag & drop your CSV file'}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              or click to browse from your computer
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2">
            <FileSpreadsheet className="h-4 w-4 text-muted-foreground" />
            <span className="text-sm text-muted-foreground">CSV files only</span>
          </div>
        </label>
      ) : (
        <div className="glass-card rounded-2xl p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                <FileSpreadsheet className="h-7 w-7 text-primary" />
              </div>
              <div>
                <p className="font-medium text-foreground">{file.name}</p>
                <p className="text-sm text-muted-foreground">
                  {formatFileSize(file.size)}
                </p>
              </div>
            </div>
            {uploadState === 'idle' && (
              <button
                onClick={handleRemove}
                className="rounded-lg p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                <X className="h-5 w-5" />
              </button>
            )}
            {uploadState === 'success' && (
              <CheckCircle className="h-6 w-6 text-success" />
            )}
          </div>

          {uploadState !== 'success' && (
            <div className="mt-6 flex gap-3">
              <Button
                onClick={handleUpload}
                disabled={uploadState === 'uploading'}
                className="flex-1 gradient-primary text-primary-foreground hover:opacity-90"
              >
                {uploadState === 'uploading' ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Uploading...
                  </>
                ) : (
                  <>
                    <Upload className="mr-2 h-4 w-4" />
                    Upload & Analyze
                  </>
                )}
              </Button>
              <Button
                variant="outline"
                onClick={handleRemove}
                disabled={uploadState === 'uploading'}
              >
                Cancel
              </Button>
            </div>
          )}

          {uploadState === 'success' && (
            <div className="mt-4 flex items-center gap-2 rounded-lg bg-success/10 px-4 py-3">
              <CheckCircle className="h-5 w-5 text-success" />
              <span className="text-sm font-medium text-success">
                File uploaded successfully! Redirecting to dashboard...
              </span>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
