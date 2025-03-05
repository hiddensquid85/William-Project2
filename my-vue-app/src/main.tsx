import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './store';
import { ProgressProvider } from './ProgressContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement!);

root.render(
  <Provider store={store}>
    <ProgressProvider>
  <App />
  </ProgressProvider>
  </Provider>
);
