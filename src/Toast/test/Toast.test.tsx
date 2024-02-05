import '@testing-library/jest-dom/extend-expect';
import { act, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Toast from '..';

jest.useFakeTimers(); // 使用 Jest 提供的 FakeTimers 来模拟时间

describe('Toast Component', () => {
  test('renders with message and hides after default duration (3000ms)', () => {
    Toast.show('Hello, Toast!');

    expect(screen.getByText('Hello, Toast!')).toBeInTheDocument();

    // Fast-forward time to default duration (3000ms)
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Assert that the component is no longer in the document
    expect(screen.queryByText('Hello, Toast!')).toBeNull();
  });

  test('renders with message and hides after custom duration', () => {
    Toast.show({
      content: 'Custom Duration Toast',
      duration: 5000,
    });

    expect(screen.getByText('Custom Duration Toast')).toBeInTheDocument();

    // Fast-forward time to custom duration (5000ms)
    act(() => {
      jest.advanceTimersByTime(5000);
    });

    // Assert that the component is no longer in the document
    expect(screen.queryByText('Custom Duration Toast')).toBeNull();
  });

  test('does not render if not visible', () => {
    Toast.show('Hidden Toast');

    expect(screen.getByText('Hidden Toast')).toBeInTheDocument();

    // Fast-forward time to default duration (3000ms)
    act(() => {
      jest.advanceTimersByTime(3000);
    });

    // Assert that the component is not in the document
    expect(screen.queryByText('Hidden Toast')).toBeNull();
  });

  test('hides on user interaction', () => {
    Toast.show('Clickable Toast');

    expect(screen.getByText('Clickable Toast')).toBeInTheDocument();

    // Click to hide
    userEvent.click(screen.getByText('Clickable Toast'));

    // Assert that the component is not in the document
    expect(screen.queryByText('Clickable Toast')).toBeNull();
  });
});
