import React, { useContext } from 'react';
import Card from '../Card/Card';
import { globalContext } from '../../contexts/globalContext';

function CardList() {

  const { state } = useContext(globalContext);

  return (
    <section className='card-container'>
      {state.list.map((post) => (
        <div key={post.id}>
          <Card id={post.id} text={post.text} image={post.image} description={post.description} location={post.location} />
        </div>
      ))}
    </section>
  );
}

export default CardList;