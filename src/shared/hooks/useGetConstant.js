import { ref, watchEffect } from 'vue';

const useGetConstant = (kData, eData) => {
  const data = ref(null);
  const language = ref(localStorage.getItem('language') || 'ko');

  const getData = () => {
    if (language.value === 'ko') return kData.dataList;
    if (language.value === 'en') return eData.dataList;
    return kData.dataList;
  };

  const toggleLanguage = () => {
    language.value = language.value === 'ko' ? 'en' : 'ko';
    localStorage.setItem('language', language.value);
  };

  watchEffect(() => {
    data.value = getData();
  });

  return { data, toggleLanguage };
};

export default useGetConstant;
