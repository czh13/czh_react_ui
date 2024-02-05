import '@testing-library/jest-dom/extend-expect';
import { fireEvent, render, screen } from '@testing-library/react';
import React, { useState } from 'react';
import Popup from '..';

test('renders PopComponent when button is clicked', () => {
  const [visible, setvisible] = useState(false);

  render(
    <>
      <button type="button" onClick={() => setvisible(true)}>
        Open Popup
      </button>
      <Popup data-testid="Popup" visible={visible} />
    </>,
  );

  const openButton = screen.getByText('Open Popup');
  expect(openButton).toBeInTheDocument();

  const popupComponent = screen.getByTestId('Popup');
  expect(popupComponent).not.toBeInTheDocument();

  fireEvent.click(openButton);

  expect(screen.getByTestId('Popup')).toBeInTheDocument();
});
