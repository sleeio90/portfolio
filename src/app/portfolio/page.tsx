'use client';

import Layout from '@/components/layout/Layout';
import Portfolio from '@/components/sections/Portfolio';

export default function PortfolioPage() {
  return (
    <Layout>
      <div className="pt-20">
        <Portfolio />
      </div>
    </Layout>
  );
}
