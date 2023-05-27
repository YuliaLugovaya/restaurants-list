import React from 'react';
import Card from '../Card/Card';
import { useSelector } from 'react-redux';

function CardList() {

  const { list } = useSelector((store) => store.mainStore);

  return (
    <section className='card-container'>
      {list.map((post) => (
        <div key={post.id}>
          <Card id={post.id} text={post.text} image={post.image} description={post.description} location={post.location} />
        </div>
      ))}
    </section>
  );
}

export default CardList;