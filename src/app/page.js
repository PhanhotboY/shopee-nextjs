'use client';
import HomeBanner from '@/components/HomeBanner';
import HomeContent from '@/components/HomeContent';

export default function Home() {
  return (
    <div className='wrapper'>
      <div className='grid'>
        <HomeBanner />
        <HomeContent />
      </div>
    </div>
  );
}
