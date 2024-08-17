import dynamic from 'next/dynamic';
import React from 'react';

const MapWithMarkers = dynamic(() => import('../components/Map'), {
  ssr: false,
});

const HomePage = () => {
  return (
    <div>
      <h1>Indian Cities Map with Markers</h1>
      <MapWithMarkers />
    </div>
  );
};

export default HomePage;