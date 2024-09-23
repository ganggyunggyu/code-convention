export const getBrowserName = () => {
  let browserName = '';
  const userAgent = navigator.userAgent.toLowerCase();

  if (userAgent.match(/edg/i)) {
    browserName = 'edge';
    return browserName;
  }
  if (userAgent.match(/kakao/i)) {
    browserName = 'kakao';
    return browserName;
  }
  if (userAgent.match(/NAVER/i)) {
    browserName = 'naver';
    return browserName;
  }
  if (userAgent.match(/whale/i)) {
    browserName = 'whale';
    return browserName;
  }
  if (userAgent.match(/samsung/i)) {
    browserName = 'samsung';
    return browserName;
  }
  if (userAgent.match(/chrome|chromium|crios/i)) {
    browserName = 'chrome';
    return browserName;
  }
  if (userAgent.match(/firefox|fxios/i)) {
    browserName = 'firefox';
    return browserName;
  }
  if (userAgent.match(/safari/i)) {
    browserName = 'safari';
    return browserName;
  }
  if (userAgent.match(/opr\//i)) {
    browserName = 'opera';
    return browserName;
  }

  return null;
};
