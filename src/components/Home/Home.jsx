import React from 'react';
import defultImage from '../../assets/images/form/form.jpg';
import { Link } from 'react-router-dom';

function Home(props) {
  return (
    <>
      <main className='main'>
        <h2 className='pages-title'>Here you will save the best restaurants</h2>
        <div className='home-wrapper'>
          <div className='home-items'>
            <img className='home-image' src={defultImage} alt="Chef" />
          </div>
          <div className='home-items'>
            <p className='home-text'>You can create, edit, and delete restaurant cards. Follow the link and see the list of restaurants. </p>
            <Link to={`/restaurants`}>
              <button className="btn waves-effect waves-light form-check-btn">
                Look restaurants
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;