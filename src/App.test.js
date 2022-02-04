import {cleanup, render, screen} from '@testing-library/react';
import Pokemon from './components/Pokemon';
import  '@testing-library/jest-dom/extend-expect';

afterEach(cleanup);

test('titulo h1', () => {

  render(<Pokemon />);
  // eslint-disable-next-line testing-library/prefer-presence-queries
  // expect(screen.getByTestId ('titulo').tagName).toBeInTheDocument();
  const element = screen.getByTestId('titulo');
  console.log('element-->',element);
});
