import { render, screen, fireEvent } from '@testing-library/react';
import Book from './Book';

describe('Book Component', () => {
  const mockUpdateTimes = jest.fn();

  beforeEach(() => {
    render(<Book availableTimes={['9:00 AM', '10:00 AM', '11:00 AM']} updateTimes={mockUpdateTimes} />);
  });

it('logs the correct data on form submission', () => {
  console.log = jest.fn();

  fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-23' } });
  fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '10:00 AM' } });
  fireEvent.change(screen.getByLabelText(/number of attendees/i), { target: { value: '2' } }); // '2' as a string
  fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John' } });

  fireEvent.click(screen.getByText(/make your booking/i));

  expect(console.log).toHaveBeenCalledWith({
    selectDate: '2024-12-23',
    selectTime: '10:00 AM',
    attendees: '2',
    name: 'John',
  });
});
})