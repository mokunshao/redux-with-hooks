import React from 'react';
import './App.css';
import Form from './components/Form';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
const store = configureStore();

const App = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Form />
      </div>
    </Provider>
  );
};

export default App;
