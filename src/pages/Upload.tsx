import { useNavigate } from 'react-router-dom';
import { Layout } from '@/components/layout/Layout';
import { FileUpload } from '@/components/upload/FileUpload';

export default function Upload() {
  const navigate = useNavigate();

  const handleUpload = () => {
    setTimeout(() => navigate('/dashboard'), 1500);
  };

  return (
    <Layout>
      <div className="mx-auto max-w-2xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground">Upload Equipment Data</h1>
          <p className="mt-2 text-muted-foreground">
            Upload a CSV file containing equipment name, type, flowrate, pressure, and temperature
          </p>
        </div>
        <FileUpload onUpload={handleUpload} />
      </div>
    </Layout>
  );
}
