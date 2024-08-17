import dynamic from 'next/dynamic';
import React from 'react';

const MapWithMarkers = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div>
      <MapWithMarkers />
    </div>
  );
};

export default HomePage;