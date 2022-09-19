import { useEffect } from 'react';

export const useScrollBottom = (elementId, dependencyArray) => {
  useEffect(() => {
    const container = document.getElementById(elementId);
    scrollBottom(container);
  }, [dependencyArray, elementId]);
};

function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }
}
