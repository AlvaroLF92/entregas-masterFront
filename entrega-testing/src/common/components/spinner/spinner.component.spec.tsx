import React from 'react';
import { render, screen } from '@testing-library/react';
import { SpinnerComponent } from './spinner.component';

// Mocks

vi.mock('react-promise-tracker', () => ({
  usePromiseTracker: vi.fn(),
}));

// Importamos después de mockearlo para evitar pisar el mock.

import { usePromiseTracker } from 'react-promise-tracker';

// Test
describe('SpinnerComponent', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render the spinner when promiseInProgress = true', () => {
    // Arrange
    (usePromiseTracker as unknown as () => { promiseInProgress: boolean }) as any;
    (usePromiseTracker as any).mockReturnValue({ promiseInProgress: true });

    // Act
    render(<SpinnerComponent />);

    // Assert
    expect(screen.getByRole('presentation')).toBeInTheDocument();
  });

  it('shouldn´t render spinner when promiseInProgress = false', () => {
    // Arrange
    (usePromiseTracker as any).mockReturnValue({ promiseInProgress: false });

    // Act
    render(<SpinnerComponent />);

    // Assert: el Modal no aparece
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument();
  });
  
});
