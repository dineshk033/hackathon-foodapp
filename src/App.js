import React from 'react';
import { Provider } from "react-redux";
import { createStore } from "redux";

import './App.css';
import reducers from './redux/reducer'
import Navbar from './component/nav-bar';
import Food from './component/food-receipe';
function App() {
  const storeReducer = createStore(reducers);
  return (
    <Provider store={storeReducer}>
      <Navbar />
      <Food />
    </Provider>
  );
}

export default App;
