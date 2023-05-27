import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import defultImage from '../../assets/images/form/form.jpg';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { editCardAC } from '../../store/actions/mainActions';


function Edit(props) {
  const { id } = useParams();
  const navigate = useNavigate();

  const { list } = useSelector((store) => store.mainStore);
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(null);
  const [value, setValue] = useState('');
  const [descriptionEdit, setDescriptionEdit] = useState('');
  const [imageEdit, setImageEdit] = useState('');
  const [locationEdit, setLocationEdit] = useState('');

  const currentCard = list.find((el) => el.id === +id);

  function editTask(id, text, description, image, location) {
    setEdit(id);
    setValue(text);
    setDescriptionEdit(description);
    setImageEdit(image);
    setLocationEdit(location);
  }

  function handleSubmitEdit(e) {
    e.preventDefault();
    dispatch(editCardAC({
        id: +id,
        value,
        descriptionEdit,
        imageEdit,
        locationEdit,
      }));
    setEdit(null);
    navigate('/restaurants');
  }

  return (
    <>
      <div className='main'>
        {edit === id ? (
          <div className='card-edit-wrapper'>
            <div className='card-wrapper'>
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator image" src={imageEdit ? imageEdit : defultImage} alt="restaurant" />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{value}</span>
                </div>
              </div>
              <div className="card">
                <div className='card-content'>
                  <p className='edit-text'><span className='subtitle'>Description:</span> {descriptionEdit}</p>
                  <p className='edit-text'><span className='subtitle'>Location:</span> {locationEdit}</p>
                </div>
              </div>
            </div>
            <form className='mb-3 add__field' onSubmit={handleSubmitEdit}>
              <label htmlFor="exampleInput" className="form-label"></label>
              <input
                className="form-control"
                onChange={(event) => setValue(event.target.value)}
                value={value}
              />
              <input
                className="form-control"
                onChange={(event) => setDescriptionEdit(event.target.value)}
                value={descriptionEdit}
              />
              <input
                className="form-control"
                onChange={(event) => setLocationEdit(event.target.value)}
                value={locationEdit}
              />
              <input
                className="form-control"
                onChange={(event) => setImageEdit(event.target.value)}
                value={imageEdit}
              />
              <button type="submit" className="btn waves-effect waves-light btn-add">Update</button>
            </form>
          </div>
        ) : (
          <div className='card-edit-wrapper'>
            <div className='card-wrapper'>
              <div className="card">
                <div className="card-image waves-effect waves-block waves-light">
                  <img className="activator image" src={currentCard.image ? currentCard.image : defultImage} alt="restaurant" />
                </div>
                <div className="card-content">
                  <span className="card-title activator grey-text text-darken-4">{currentCard.text}</span>
                </div>
              </div>
              <div className="card">
                <div className='card-content'>
                  <p><span className='subtitle'>Description:</span> {currentCard.description}</p>
                  <p><span className='subtitle'>Location:</span> {currentCard.location}</p>
                </div>
              </div>
            </div>
            <Link to={`/edit_restaurants/${id}`}>
              <button className="btn waves-effect waves-light form-check-btn" onClick={() => editTask(id, currentCard.text, currentCard.description, currentCard.image, currentCard.location)}>
                Edit
              </button>
            </Link>
          </div>

        )}
      </div>
    </>
  );
}

export default Edit;