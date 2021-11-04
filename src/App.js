import React from 'react';
import Container from './components/objects/container/Container';
import Banner from './components/objects/banner/Banner';
import { store } from './redux/store/store';
import { Provider } from 'react-redux';


function App() {
  return (
    <Provider store={store}>
    <>
      <Banner />
      <Container />
    </>
    </Provider>
  );
}

export default App;
