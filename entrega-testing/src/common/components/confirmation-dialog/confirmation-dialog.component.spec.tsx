import { render, screen, fireEvent } from '@testing-library/react';
import { ConfirmationDialogComponent  } from './confirmation-dialog.component';
import type { Props } from './confirmation-dialog.component';
import React from 'react';
import { vi } from 'vitest';

describe('ConfirmationDialogComponent', () => {
  const mockOnClose = vi.fn();
  const mockOnAccept = vi.fn();

  const defaultProps: Props = {
    isOpen: true,
    onClose: mockOnClose,
    onAccept: mockOnAccept,
    title: 'Confirmación',
    labels: {
      closeButton: 'Cancelar',
      acceptButton: 'Aceptar',
    },
    children: '¿Estás seguro de que deseas continuar?',
  };

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render dialog when isOpen is true', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);
    expect(screen.getByText(/¿Estás seguro de que deseas continuar?/i)).toBeInTheDocument();
  });

  it('should call onClose when clicking Cancel button', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);
    fireEvent.click(screen.getByText(/Cancelar/i));
    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  it('should call onAccept when clicking Accept button', () => {
    render(<ConfirmationDialogComponent {...defaultProps} />);
    fireEvent.click(screen.getByText(/Aceptar/i));
    expect(mockOnAccept).toHaveBeenCalledTimes(1);
  });
});
