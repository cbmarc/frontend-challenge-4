export const concatenateClassNames = (...classNames) =>
  classNames.filter(Boolean).join(' ');
