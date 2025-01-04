import { render, screen ,fireEvent} from '@testing-library/react';
import App from './App';


test('renders learn react link', () => {
  render(<App />);
  const countElement = screen.getByText(/count:/i);
  const buttonElement = screen.getByText(/increment/i);

  expect(countElement).toBeInTheDocument();
  expect(buttonElement).toBeInTheDocument();

  fireEvent.click(buttonElement);
  expect(screen.getByText(/count:1/i)).toBeInTheDocument();
});

