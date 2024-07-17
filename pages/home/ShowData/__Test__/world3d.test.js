import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import World from './World';

// Mock @react-three/fiber and @react-three/drei components
jest.mock('@react-three/fiber', () => ({
  ...jest.requireActual('@react-three/fiber'),
  Canvas: ({ children }) => <div data-testid="canvas">{children}</div>,
  useFrame: jest.fn(),
}));

jest.mock('@react-three/drei', () => ({
  ...jest.requireActual('@react-three/drei'),
  OrbitControls: () => <div data-testid="orbit-controls" />,
  Sphere: ({ children }) => <div data-testid="sphere">{children}</div>,
}));

describe('World component', () => {
  it('renders the canvas and controls', () => {
    render(<World />);
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
    expect(screen.getByTestId('orbit-controls')).toBeInTheDocument();
  });

  it('adjusts sphere size based on window width', () => {
    render(<World />);

    const resizeWindow = (width) => {
      global.innerWidth = width;
      global.dispatchEvent(new Event('resize'));
    };

    // Small screens
    act(() => {
      resizeWindow(500);
    });
    expect(screen.queryByTestId('sphere')).toHaveStyle({ display: 'none' });

    // Medium screens
    act(() => {
      resizeWindow(1000);
    });
    expect(screen.queryByTestId('sphere')).not.toHaveStyle({ display: 'none' });

    // Large screens
    act(() => {
      resizeWindow(1600);
    });
    expect(screen.queryByTestId('sphere')).not.toHaveStyle({ display: 'none' });
  });
});
