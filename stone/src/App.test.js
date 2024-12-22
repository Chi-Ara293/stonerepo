import { render, screen } from '@testing-library/react';
import Book from './Book';

test('renders from elements', () => {
  render(<Book availableTimes={[]} updateTimes={() => {}}/>);
  const dateLabel = screen.getByLabelText("Choose date")
  expect(dateLabel).toBeInTheDocument();
});
