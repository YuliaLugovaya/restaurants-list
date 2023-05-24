import React from 'react';
import '../../styles/App.css';
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import Home from '../Home/Home';
import AddCard from '../AddCard/AddCard';
import Edit from '../Edit/Edit';
import { globalContext as GlobalContext } from '../../contexts/globalContext';
import { useReducer, useEffect } from 'react';
import { reducer, initializer, initialState } from '../../reducers/reducer';
import { Route, Routes } from 'react-router-dom';

function App() {

  const [state, dispatch] = useReducer(reducer, initialState, initializer);

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(state));
  }, [state]);

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
