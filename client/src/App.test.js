import React from 'react';
import { render } from '@testing-library/react';
import App from './App';
import { isMainThread } from 'worker_threads';

test(" app renders without crashing", () => {
  render(<App />) });

describe("cards class"), () => {
  it('exists', () => {
    const element = document.getElementById('cards');
    expect(element).toBeDefined();
  })
}

