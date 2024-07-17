import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from './Header';

describe('Header component', () => {
  it('renders the company logo', () => {
    render(<Header />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the hamburger menu and toggles it', () => {
    render(<Header />);
    const hamburgerButton = screen.getByRole('button');
    expect(hamburgerButton).toBeInTheDocument();

    // Check initial state (menu should be closed)
    const menu = screen.getByRole('navigation');
    expect(menu).not.toHaveClass('menu__open');

    // Click to open the menu
    fireEvent.click(hamburgerButton);
    expect(menu).toHaveClass('menu__open');

    // Click to close the menu
    fireEvent.click(hamburgerButton);
    expect(menu).not.toHaveClass('menu__open');
  });

  it('renders the navigation links', () => {
    render(<Header />);

    expect(screen.getByText('Solutions')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Prices')).toBeInTheDocument();
    expect(screen.getByText('References')).toBeInTheDocument();
  });

  it('renders the submenus under Solutions', () => {
    render(<Header />);
    const solutionsLink = screen.getByText('Solutions');
    fireEvent.click(solutionsLink);

    expect(screen.getByText('Chat')).toBeInTheDocument();
    expect(screen.getByText('Communities')).toBeInTheDocument();
    expect(screen.getByText('Work and Study')).toBeInTheDocument();
    expect(screen.getByText('Mentoring')).toBeInTheDocument();
  });

  it('renders the login button', () => {
    render(<Header />);
    const loginButton = screen.getByText('Log In');
    expect(loginButton).toBeInTheDocument();
  });
});
