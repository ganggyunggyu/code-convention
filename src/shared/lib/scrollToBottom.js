export const scrollToBottom = ({ className }) => {
  const element = document.querySelector(`.${className}`);

  element.scrollTo(0, element.scrollHeight);
};
export const scrollToTop = ({ className }) => {
  const element = document.querySelector(`.${className}`);
  element.scrollTo(0, 0);
};
