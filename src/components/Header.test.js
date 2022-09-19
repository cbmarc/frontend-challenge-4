import { render } from '@testing-library/react';
import React from 'react';

import { Header } from './Header';

describe('Header', () => {
  it('Should render correctly', () => {
    const { baseElement } = render(<Header text="whatever" />);
    expect(baseElement).toBeInTheDocument();
  });

  it('Should have the provided text', () => {
    const headerText = 'Something';
    const { queryByText } = render(<Header text={headerText} />);
    expect(queryByText(headerText)).toBeTruthy();
  });
});
