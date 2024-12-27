import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import Book from './Book';

describe('Book Component', () => {
  let updateTimesMock;

  beforeAll(() => {
    global.console.log = jest.fn();
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    updateTimesMock = jest.fn();
  });

  test('renders form fields correctly', () => {
    render(<Book availableTimes={[]} updateTimes={updateTimesMock} />);

    expect(screen.getByLabelText(/choose date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/choose time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/number of attendees/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/name/i)).toBeInTheDocument();
  });

  test('handles date selection correctly', () => {
    render(<Book availableTimes={[]} updateTimes={updateTimesMock} />);

    const dateInput = screen.getByLabelText(/choose date/i);

    fireEvent.change(dateInput, { target: { value: '2024-12-24' } });

    expect(dateInput.value).toBe('2024-12-24');
    expect(updateTimesMock).toHaveBeenCalledWith('2024-12-24');
  });

  test('handles time selection correctly', () => {
    render(<Book availableTimes={['10:00 AM', '2:00 PM']} updateTimes={updateTimesMock} />);

    const timeSelect = screen.getByLabelText(/choose time/i);

    fireEvent.change(timeSelect, { target: { value: '10:00 AM' } });

    expect(timeSelect.value).toBe('10:00 AM');
  });

  test('handles attendees selection correctly', () => {
    render(<Book availableTimes={[]} updateTimes={updateTimesMock} />);

    const attendeesInput = screen.getByLabelText(/number of attendees/i);

    fireEvent.change(attendeesInput, { target: { value: '3' } });

    expect(attendeesInput.value).toBe('3');
  });

  test('handles name input correctly', () => {
    render(<Book availableTimes={[]} updateTimes={updateTimesMock} />);

    const nameInput = screen.getByLabelText(/name/i);

    fireEvent.change(nameInput, { target: { value: 'John Doe' } });

    expect(nameInput.value).toBe('John Doe');
  });

  test('submits form with correct values', async () => {
    render(<Book availableTimes={['10:00 AM', '2:00 PM']} updateTimes={updateTimesMock} />);

    fireEvent.change(screen.getByLabelText(/choose date/i), { target: { value: '2024-12-24' } });
    fireEvent.change(screen.getByLabelText(/choose time/i), { target: { value: '10:00 AM' } });
    fireEvent.change(screen.getByLabelText(/number of attendees/i), { target: { value: '3' } });
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'John Doe' } });

    fireEvent.click(screen.getByText(/make your booking/i));

    await waitFor(() => {
      expect(console.log).toHaveBeenCalledWith({
        selectDate: '2024-12-24',
        selectTime: '10:00 AM',
        attendees: '3',
        name: 'John Doe',
      });
    });
  });

  test('shows available times correctly', () => {
    render(<Book availableTimes={['10:00 AM', '2:00 PM']} updateTimes={updateTimesMock} />);

    expect(screen.getByText('10:00 AM')).toBeInTheDocument();
    expect(screen.getByText('2:00 PM')).toBeInTheDocument();
  });

  test('shows "No times available" message when no available times are provided', () => {
    render(<Book availableTimes={[]} updateTimes={updateTimesMock} />);

    expect(screen.getByText(/no times available/i)).toBeInTheDocument();
  });
});
