import { ref, onMounted, onBeforeUnmount } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import { useLatLngStore } from '../../app/store/useLatLngStore.js';
import { getDistance } from '../lib/getDistance.js';
import { useContentStore } from '@/app/store/useContentStore.js';
import { useCurrentPositionStore } from '@/app/store/useCurrentPositionStore.js';

const useWatchPosition = ({ successCallback, errorCallback }) => {
  const isWatchPositionRef = ref(false);
  const { setDistanceForContentList } = useContentStore();
  const { getLatLng } = useLatLngStore();

  const posRef = ref({
    accuracy: null,
    latitude: '',
    longitude: '',
    altitude: null,
    altitudeAccuracy: null,
    heading: null,
    speed: null,
  });
  const watchIdRef = ref(null);
  const distanceRef = ref(null);

  const options = {
    enableHighAccuracy: true,
    maximumAge: 0,
    // timeout: 5000,
  };

  const onSuccess = (result) => {
    const pos = result.coords;
    posRef.value = pos;

    if (successCallback) {
      successCallback({
        lat: posRef.value.latitude,
        lng: posRef.value.longitude,
        heading: posRef.value.heading,
      });
    } else {
      console.warn('successCallback is undefined');
    }

    setDistanceForContentList({
      lat: posRef.value.latitude,
      lng: posRef.value.longitude,
    });
    const latLng = getLatLng({ id: 3 });

    const distance = getDistance({
      lat1: posRef.value.latitude,
      lon1: posRef.value.longitude,
      lat2: latLng.lat,
      lon2: latLng.lng,
    });

    distanceRef.value = distance;
  };

  const onError = (error) => {
    if (errorCallback) {
      errorCallback();
      watchIdRef.value = null;
      const errorMessages = {
        1: '위치 정보를 허용해주세요',
        2: '사용할 수 없는 위치입니다.',
        3: '타임아웃이 발생하였습니다',
        default: '오류가 발생하였습니다.',
      };
      console.warn(errorMessages[error.code] || errorMessages.default);
    } else {
      console.warn('errorCallback is undefinde');
    }
  };

  const startWatchPosition = () => {
    if (!watchIdRef.value) {
      watchIdRef.value = navigator.geolocation.watchPosition(
        onSuccess,
        onError,
        options,
      );
    } else {
      return false;
    }
  };

  const clearWatchPosition = () => {
    if (watchIdRef.value !== null) {
      navigator.geolocation.clearWatch(watchIdRef.value);
      watchIdRef.value = null;
    }
  };
  const setWatchState = ({ state }) => {
    if (state === 'granted') {
      isWatchPositionRef.value = true;
      startWatchPosition();
    } else if (state === 'prompt') {
      isWatchPositionRef.value = true;
      startWatchPosition();
    } else if (state === 'denied') {
      isWatchPositionRef.value = false;
    }
  };

  const getWatchState = () => {
    if ('permissions' in navigator) {
      navigator.permissions.query({ name: 'geolocation' }).then((result) => {
        setWatchState({ state: result.state });
        result.onchange = () => {
          setWatchState({ state: result.state });
        };
      });
    } else {
      alert('지원되지 않는 브라우저입니다.');
    }
  };
  onMounted(() => {
    getWatchState();
  });

  onBeforeUnmount(() => {
    clearWatchPosition();
  });

  onBeforeRouteLeave(() => {
    clearWatchPosition();
  });

  return {
    posRef,
    isWatchPositionRef,
    distanceRef,
    startWatchPosition,
    getWatchState,
  };
};

export default useWatchPosition;
