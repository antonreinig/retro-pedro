import { render, screen } from '@testing-library/react';
import React from 'react';

describe('Example', () => {
  it('renders greeting', () => {
    function Greeting() {
      return <h1>Hello</h1>;
    }
    render(<Greeting />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
