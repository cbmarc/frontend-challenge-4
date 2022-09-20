import { useEffect } from 'react';

/**
 * Hook used to scroll bottom of a container described by elementId.
 * @param {string} elementId of the container on which to scroll bottom.
 * @param {Array} dependencyArray used to determine when to run the scroll bottow.
 */
export const useScrollBottom = (elementId, dependencyArray) => {
  useEffect(() => {
    const container = document.getElementById(elementId);
    scrollBottom(container);
  }, [dependencyArray, elementId]);
};

/**
 * Scrolls to the bottom of the provided container.
 * @param {HTMLElement | null} container container in which to scroll bottom.
 */
function scrollBottom(container) {
  if (container) {
    container.scrollTo({
      top: container.scrollHeight,
      behavior: 'smooth',
    });
  }
}
