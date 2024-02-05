// Loading.test.js
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import React from 'react';
import Loading from '..';

describe('Loading Component', () => {
  test('renders Loading component by default', () => {
    render(<Loading dataTestid="loading-component" />);
    expect(screen.getByTestId('loading-component')).toBeInTheDocument();
  });

  test('renders Loading component with size', () => {
    const container = render(<Loading dataTestid="loading-component" size={40} />).container;
    console.log('🚀 ~ test ~ container:', container);
    // expect(screen.getByTestId('loading-component')).toHaveProperty('size')
  });
});
