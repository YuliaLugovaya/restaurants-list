import React from 'react';
import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Home from '../Home/Home';
import AddCard from '../AddCard/AddCard';
import Edit from '../Edit/Edit';
import { globalContext as GlobalContext } from '../../contexts/globalContext';
import { Route, Routes } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLS';

function App() {

  const initialState = {
    list: []
  }

  const [state, dispatch] = useLocalStorage('tasks', initialState);

  return (
    <div className="App wrapper">
      <Header />
      <GlobalContext.Provider value={{ state, dispatch }}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/restaurants' element={<Main />} />
          <Route path='/add_restaurants' element={<AddCard />} />
          <Route path='/edit_restaurants/:id' element={<Edit />} />
        </Routes>
      </GlobalContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
