import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Footer from './Footer';

describe('Footer component', () => {
  it('renders the company logo', () => {
    render(<Footer />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the company footer rows with correct titles and links', () => {
    render(<Footer />);

    // Check for the titles
    expect(screen.getByText('Company')).toBeInTheDocument();
    expect(screen.getByText('More Links')).toBeInTheDocument();
    expect(screen.getByText('Useful Links')).toBeInTheDocument();

    // Check for some links in "Company" section
    expect(screen.getByText('About us')).toBeInTheDocument();
    expect(screen.getByText('Blog')).toBeInTheDocument();
    expect(screen.getByText('Press')).toBeInTheDocument();

    // Check for some links in "More Links" section
    expect(screen.getByText('Product')).toBeInTheDocument();
    expect(screen.getByText('Services')).toBeInTheDocument();

    // Check for some links in "Useful Links" section
    expect(screen.getByText('Terms & Conditions')).toBeInTheDocument();
    expect(screen.getByText('Refund Policy')).toBeInTheDocument();
  });

  it('renders the footer author section', () => {
    render(<Footer />);
    const newsletterText = screen.getByText('Subscribe to our newsletter for the latest updates and offers.');
    expect(newsletterText).toBeInTheDocument();
  });

  it('renders "All rights reserved" text', () => {
    render(<Footer />);
    const rightsText = screen.getByText('© All rights reserved');
    expect(rightsText).toBeInTheDocument();
  });
});
