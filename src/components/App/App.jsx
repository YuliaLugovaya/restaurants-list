import React from 'react';
import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Home from '../Home/Home';
import AddCard from '../AddCard/AddCard';
import Edit from '../Edit/Edit';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../store/store';

function App() {

  return (
    <div className="App wrapper">
      <Header />
      <Provider store={store}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurants' element={<Main />} />
          <Route path='/add_restaurants' element={<AddCard />} />
          <Route path='/edit_restaurants/:id' element={<Edit />} />
        </Routes>
      </Provider>
      <Footer />
    </div>
  );
}

export default App;
