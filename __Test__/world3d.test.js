import React from 'react';
import { render, screen, act } from '@testing-library/react';
import '@testing-library/jest-dom';
import World from '../pages/home/ShowData/world3d';

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
  it('renders without crashing', () => {
    render(<World />);
    expect(screen.getByTestId('canvas')).toBeInTheDocument();
  });

});