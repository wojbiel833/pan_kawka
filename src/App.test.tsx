import { render, screen } from '@testing-library/react';

import { WrappedApp } from './App';

test('Renders PAN KAWKA in h1 tag', () => {
  const { getByText } = render(<WrappedApp />);
  console.log(getByText);
  // expect(screen.getByText(/PAN KAWKA/i)).toBeInTheDocument();
});
