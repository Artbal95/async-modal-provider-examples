import React from 'react';
import { render, screen } from '@testing-library/react';

import { useSideBar } from '../hook';

import App from './App';

describe('Get The Texts in Side Bars', () => {
  it('Render SideBar with Go To List', () => {
    render(<App />);
    expect(screen.getAllByText('Go To List')).toBeDefined();
  });
  it('Render SideBar with Go To Create Form', () => {
    render(<App />);
    expect(screen.getByText('Go To Create Form')).toBeDefined();
  });
});

describe('Get The Titles of Page', () => {
  it('Render Page and Get The Title', () => {
    render(<App />);
    expect(screen.getAllByText('List')).toBeDefined();
  });
});
