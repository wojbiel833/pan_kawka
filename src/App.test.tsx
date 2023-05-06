import { render, screen } from '@testing-library/react';
import { describe, it } from 'vitest';

import { WrappedApp } from './App';

describe('App', () => {
  it('renders PAN KAWKA in h1 tag', () => {
    // ARRANGE
    render(<WrappedApp />);
    // ACT
    // EXPECT
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'PAN KAWKA'
    );
  });
});
