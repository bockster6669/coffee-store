'use client';

import { useState } from 'react';

type PositionType = {
  coords: { latitude: number; longitude: number };
};

const useTrackLocation = () => {
  const [findingLocation, setIsFindingLocation] = useState(false);
  const [longLat, setlongLat] = useState('');
  const [locationErrorMsg, setLocationErrorMsg] = useState('');

  function success(position: PositionType) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    setlongLat(`${longitude},${latitude}`);
    setIsFindingLocation(false);
    console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
  }

  function error() {
    setIsFindingLocation(false);
    setLocationErrorMsg('Unable to retrive your location');
    console.error('Unable to retrieve your location');
  }

  const handleTrackLocation = () => {
    if (!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      setIsFindingLocation(true);
      navigator.geolocation.getCurrentPosition(success, error);
    }
  };

  return {
    longLat,
    findingLocation,
    handleTrackLocation,
    locationErrorMsg,
  };
};

export default useTrackLocation;
