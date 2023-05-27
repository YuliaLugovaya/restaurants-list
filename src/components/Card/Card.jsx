import React from 'react';
import defultImage from '../../assets/images/form/form.jpg';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { deleteCardAC } from '../../store/actions/mainActions';

function Card({ id, text, description, image, location }) {

  const dispatch = useDispatch();

  function removeTask(id) {
    dispatch(deleteCardAC(id));
  }

  return (
    <>
      <div className="card">
        <div className="card-image waves-effect waves-block waves-light">
          <img className="activator image" src={image ? image : defultImage} alt="restaurant" />
        </div>
        <div className="card-content">
          <div className='card-title-wrapper'>
            <span className="card-title grey-text text-darken-4">{text}</span>
            <i className="material-icons right activator card-title">more_vert</i>
          </div>
          <Link to={`/edit_restaurants/${id}`}>
            <button className="btn waves-effect waves-light form-check-btn">
              Edit
            </button>
          </Link>
          <button className="btn waves-effect waves-light form-check-btn btn-remove" onClick={() => removeTask(id)}>
            Delete
          </button>
        </div>
        <div className="card-reveal">
          <span className="card-title grey-text text-darken-4">{text}<i className="material-icons right">close</i></span>
          <p><span className='subtitle'>Description:</span> {description}</p>
          <p><span className='subtitle'>Location:</span> {location}</p>
        </div>
      </div>
    </>
  );
}

export default Card;