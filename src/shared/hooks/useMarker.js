import { userMarker } from '../lib/createMarkerTemplate';

const useMarker = () => {
  const createUserMarker = ({ lat, lng }) => {
    const position = new naver.maps.LatLng(lat, lng);
    markerRef.value = new naver.maps.Marker({
      position: position,
      map: mapRef.value,
      icon: {
        title: 'userPosition',
        content: userMarker({ title: 'userPosition' }),

        size: new naver.maps.Size(38, 58),

        anchor: new naver.maps.Point(19, 58),
      },
    });
  };
};
export default useMarker;
