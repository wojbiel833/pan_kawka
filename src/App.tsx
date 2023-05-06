import { Provider } from 'react-redux';

import { store } from '@/app/store';

export function App() {
  return (
    <div className="App">
      <h1>PAN KAWKA</h1>
    </div>
  );
}

export function WrappedApp() {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
