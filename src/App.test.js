import { render, screen } from '@testing-library/react';
import App from './App';
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { Provider } from "react-redux";

const middlewares = [thunk]
const mockStore = configureMockStore(middlewares)
const store = mockStore({
  "HeaderReducer": {},
  "MenubarReducer": {
    "initialNavBarWidth": "3",
    "expandedNavBarWidth": "18",
    "width": "3",
    "navData": []
  }
});

test('renders learn react link', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  const linkElement = screen.getByText(/Wayfair/i);
  expect(linkElement).toBeInTheDocument();
});
