import { Metadata } from 'next';
import { DataTable } from '@/components/core/panel/table';

export const metadata: Metadata = {
  title: 'Music App',
  description: 'Example music app using the components.',
};

export default function MusicPage() {
  return (
    <div>
      <DataTable data={[]} shopId='SHOPIDdjdkew' />
    </div>
  );
}
