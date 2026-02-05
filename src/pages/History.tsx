import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { DatasetHistory } from '@/components/history/DatasetHistory';
import { mockDatasets } from '@/lib/mockData';

export default function History() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dataset History</h1>
          <p className="mt-1 text-muted-foreground">View and manage your uploaded datasets</p>
        </div>
        <DatasetHistory datasets={mockDatasets} onSelect={() => navigate('/dashboard')} />
      </div>
    </Layout>
  );
}
