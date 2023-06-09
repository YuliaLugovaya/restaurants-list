import React, { useContext, useState } from 'react';
import { globalContext } from '../../contexts/globalContext';
import { useNavigate } from 'react-router-dom';

function Form() {

  const { dispatch } = useContext(globalContext);

  const [text, setText] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    if (text) {
      dispatch({
        type: 'ADD_CARD',
        payload: {
          text,
          image,
          description,
          location,
          id: Date.now(),
        }
      });
      navigate('/restaurants');
    }
    setText('');
    setImage('');
    setDescription('');
    setLocation('');
  }

  return (
    <section className='task add'>
      <h2 className='pages-title'>Add restaurant</h2>
      <form className='mb-3 add__field' onSubmit={handleSubmit}>
        <label htmlFor="exampleInput" className="form-label"></label>
        <input
          className="form-control validation"
          placeholder="Write the restaurant name *"
          onChange={(event) => setText(event.target.value)}
          value={text}
        />
        <input
          className="form-control"
          placeholder="Add a restaurant description"
          onChange={(event) => setDescription(event.target.value)}
          value={description}
        />
        <input
          className="form-control"
          placeholder="Add a restaurant location"
          onChange={(event) => setLocation(event.target.value)}
          value={location}
        />
        <input
          className="form-control"
          placeholder="Add a picture link"
          onChange={(event) => setImage(event.target.value)}
          value={image}
        />
        <button type="submit" className="btn waves-effect waves-light btn-add">Add</button>
      </form>
    </section>
  );
}

export default Form;