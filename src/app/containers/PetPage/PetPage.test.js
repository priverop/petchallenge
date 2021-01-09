import { render, screen } from '@testing-library/react';
import PetPage from './PetPage';

test('renders pet page ', () => {
  render(<PetPage />);
  const linkElement = screen.getByTestId('pet-page');
  expect(linkElement).toBeInTheDocument();
});
