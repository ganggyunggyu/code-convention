export const setVh = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  return vh;
};
export const setVw = () => {
  const vw = window.innerWidth * 0.01;
  document.documentElement.style.setProperty("--vw", `${vw}px`);
};
