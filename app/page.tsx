import { LeafIcon } from '@/components/brand/LeafIcon';

export default function Home() {
  return (
    <nav className="fixed inset-x-0 top-0 flex w-full items-center justify-between p-4">
      <div className="flex items-center gap-12">
        <LeafIcon />
        <div className="flex items-center gap-6">
          <a href="#">Product</a>
          <a href="#">Demo</a>
          <a href="#">Pricing</a>
        </div>
      </div>
    </nav>
  );
}
