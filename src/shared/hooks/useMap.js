import { onMounted, ref, onBeforeUnmount } from 'vue';
import { onBeforeRouteLeave } from 'vue-router';
import {
  defaultContentMarkerTemplate,
  selectedContentMarkerTemplate,
  userMarkerTemplate,
} from '../lib/createMarkerTemplate';
import { useContentStore } from '@/app/store/useContentStore';
import { storeToRefs } from 'pinia';

const { naver } = window;
let userMarker;
let map;
const contentMarkerList = [];
const INIT_POSITION = {
  lat: 37.2937501,
  lng: 127.0493446,
  // lat: 37.288993,
  // lng: 127.0043861,
};

const useMap = () => {
  const contentStore = useContentStore();
  const { setSelectedContent, clearSelectedContent } = contentStore;
  const { selectedContentRef } = storeToRefs(contentStore);

  const isUserMarker = ref(!!userMarker);
  const positionRef = ref({ lat: null, lng: null });

  const createMap = () => {
    const option = {
      center: new naver.maps.LatLng(INIT_POSITION),
      zoom: 20,
      zoomControl: false,
    };
    map = new naver.maps.Map('map', option);
  };

  const createUserMarker = ({ lat, lng }) => {
    const position = new naver.maps.LatLng(lat, lng);
    userMarker = new naver.maps.Marker({
      position: position,
      map: map,
      icon: {
        title: 'userPosition',
        content: userMarkerTemplate({ title: 'userPosition' }),
        size: new naver.maps.Size(38, 58),
        anchor: new naver.maps.Point(19, 58),
      },
    });
    userMarker.setMap(map);
  };

  const updateUserMarker = ({ lat, lng }) => {
    const position = new naver.maps.LatLng(lat, lng);
    userMarker.setPosition(position);
  };

  const deleteContentMarker = () => {
    if (contentMarkerList) {
      for (const marker of contentMarkerList) {
        marker.setMap(null);
      }
      contentMarkerList.splice(0, 0);
    }
  };

  const handleMarkerClick = ({ marker, content, isTagging }) => {
    const selectedContentMarker = {
      title: 'selectedMarker',
      content: selectedContentMarkerTemplate({
        imageUrl: content.image,
      }),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(26, 75),
    };
    const defaultContentMarker = {
      title: 'defaultContentMarker',
      content: defaultContentMarkerTemplate({
        floorLevel: content.floorLevel || 0,
        isTagging: isTagging,
      }),
      size: new naver.maps.Size(38, 58),
      anchor: new naver.maps.Point(19, 58),
    };
    if (!selectedContentRef.value) {
      marker.setIcon(selectedContentMarker);
      setSelectedContent({ content });
    } else {
      if (content.id === selectedContentRef.value.id) {
        marker.setIcon(defaultContentMarker);
        clearSelectedContent();
      } else {
        for (const marker of contentMarkerList) {
          marker.setIcon(defaultContentMarker);
        }
        marker.setIcon(selectedContentMarker);
        setSelectedContent({ content });
      }
    }
    map.panTo(marker.getPosition(), { duration: 500 });
  };

  const createContentMarker = ({ contentList, isTagging }) => {
    deleteContentMarker();

    for (const content of contentList) {
      if (!content.latLng) continue;
      const { lat, lng } = content.latLng;
      const position = new naver.maps.LatLng(lat, lng);
      const marker = new naver.maps.Marker({
        position: position,
        map: map,
        icon: {
          title: 'defaultContentMarker',
          content: defaultContentMarkerTemplate({
            floorLevel: content.floorLevel || 0,
            isTagging: isTagging,
          }),
          size: new naver.maps.Size(38, 58),
          anchor: new naver.maps.Point(19, 58),
        },
      });
      marker.setMap(map);
      naver.maps.Event.addListener(marker, 'click', () =>
        handleMarkerClick({
          marker: marker,
          content: content,
          isTagging: isTagging,
        }),
      );
      contentMarkerList.push(marker);
    }
  };
  const setMapCenterByUserMarker = () => {
    console.log(isUserMarker.value);
    console.log(positionRef.value);
    const userMarkerPosition = userMarker.getPosition();

    map.panTo(userMarkerPosition, { duration: 500 });
  };

  const watchSuccessCallback = ({ lat, lng }) => {
    positionRef.value = { lat: lat, lng: lng };
    isUserMarker.value = !!userMarker;
    if (userMarker) {
      updateUserMarker({
        lat: positionRef.value.lat,
        lng: positionRef.value.lng,
      });
    } else {
      createUserMarker({
        lat: positionRef.value.lat,
        lng: positionRef.value.lng,
      });
    }
  };
  const watchErrorCallback = () => {
    userMarker.setMap(null);
    userMarker = null;
  };

  onMounted(() => {
    createMap();
    createContentMarker({ contentList: contentStore.contentListRef });
    console.log(isUserMarker.value);
  });

  onBeforeRouteLeave(() => {
    map = null;
    userMarker = null;
    contentMarkerList.splice(0, 0);
    clearSelectedContent();
  });

  onBeforeUnmount(() => {
    map = null;
    userMarker = null;
    contentMarkerList.splice(0, 0);
    clearSelectedContent();
  });

  return {
    watchSuccessCallback,
    watchErrorCallback,
    createContentMarker,
    setMapCenterByUserMarker,
  };
};

export default useMap;
