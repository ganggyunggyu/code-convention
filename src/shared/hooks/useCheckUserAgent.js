import { useRouter } from 'vue-router';
import { getOsName } from '../lib/getOsName';
import { getBrowserName } from '../lib/getBrowserName';
import { getIsMobile } from '../lib/getIsMobile';
import { changeBrowser } from '../lib/chacngeBrowser';

export const useCheckUserAgent = (useChange) => {
  const router = useRouter();
  const isMobile = getIsMobile();
  const osName = getOsName();
  const browserName = getBrowserName();

  if (!isMobile) {
    alert('모바일 권장');
    return;
  }
  if (browserName !== 'chrome') {
    alert('본 서비스는 Chrome을 권장합니다. 브라우저 팝업이 나타나면 Chrome을 선택해주세요.');

    changeBrowser();
    return;
  }

  const targetUrl = window.location.host + window.location.pathname + window.location.hash;

  if (osName.match(/iPhone|iPad|iPod/i)) {
    // 아이폰 접속 경우
    alert('아이폰');
    if (browserName === 'kakao') {
      if (useChange === true) {
        let hash = window.location.hash;
        hash = hash.slice(2, hash.length);

        router.push({ path: '/ios', query: { hash: hash } });
      }

      return false;
    }
  } else {
    if (browserName === 'kakao') {
      // 안드로이드
      // 먼저, 카카오 인앱 브라우저 닫기
      if (useChange == true) {
        if (browserName === 'kakao') location.href = 'kakaotalk://inappbrowser/close';

        location.href = 'intent://' + targetUrl + '#Intent;scheme=https;package=com.android.chrome;end';
      }
      return false;
    }
  }

  return true;
};
