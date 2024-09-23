import { ref } from 'vue';
import { CHARACTER_EN, CHARACTER_KO } from '@/assets/constants/character';
import useGetConstant from './useGetConstant';

const useKeyword = ({ size }) => {
  /**
   * SIZE - 한줄에 몇 개의 키워드가 보여질지 결정시키는 정수
   */
  const SIZE = size || 4;

  const { data } = useGetConstant(CHARACTER_KO, CHARACTER_EN);

  const keywordGroupRef = ref([]);
  const selectedKeywordList = ref([]);
  const selectedKeyword = ref(null);

  keywordGroupRef.value = data.value.reduce((acc, _, index) => {
    if (index % SIZE === 0) {
      acc.push(data.value.slice(index, index + SIZE));
    }
    return acc;
  }, []);

  const addSelectedKeywordList = (id) => {
    if (selectedKeywordList.value.includes(id)) {
      selectedKeywordList.value = selectedKeywordList.value.filter(
        (keyword) => keyword !== id,
      );
    } else if (selectedKeywordList.value.length < 3) {
      selectedKeywordList.value.push(id);
    }
  };
  const setSelectedKeyword = (id) => {
    selectedKeyword.value = id;
  };

  const getIsSelected = (id) => {
    return selectedKeywordList.value.includes(id);
  };

  const getKeywordName = (id) => {
    console.log(data.value);
    const selectedKeywordName = data.value.find((keyword) => keyword.id === id);

    return selectedKeywordName.char;
  };
  /**
    keywordGroupRef - 키워드 리스트를 보여주기 위한 2중 배열
    selectedKeywordList - 2개 이상의 키워드가 필요할때 사용하는 배열 변수
    selectedKeyword - 1개의 키워드만 필요할때 사용하는 변수
    addSelectedKeywordList - selectedKeywordList와 사용되는 함수
    setSelectedKeyword - selectedKeyword와 사용되는 함수
    getIsSelected - Component에서 선택 된 키워드인지 판별해주는 함수
   */
  return {
    keywordGroupRef,
    selectedKeywordList,
    selectedKeyword,
    addSelectedKeywordList,
    setSelectedKeyword,
    getIsSelected,
    getKeywordName,
  };
};

export default useKeyword;
