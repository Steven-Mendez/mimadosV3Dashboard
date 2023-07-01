import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  createCategory,
  listCategories,
} from '../../Redux/Actions/CategoryActions';

const CreateCategory = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createCategory(name, description));
    dispatch(listCategories()); // Actualización de la lista de categorías
    setName('');
    setDescription('');
  };

  return (
    <div className="col-md-12 col-lg-4">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="product_name" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            placeholder="Escribe aquí"
            className="form-control py-3"
            id="product_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="form-label">Descripción</label>
          <textarea
            placeholder="Escribe aquí"
            className="form-control"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary py-3">
            Crear categoría
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
