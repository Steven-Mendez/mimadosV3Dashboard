import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
  createCategory,
  listCategories,
  updateCategory,
} from '../../Redux/Actions/CategoryActions';

const CreateCategory = ({ editMode, editCategory, onCancelEdit }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (editMode && editCategory) {
      setName(editCategory.name);
      setDescription(editCategory.description);
    }
  }, [editMode, editCategory]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editMode && editCategory) {
      await dispatch(
        updateCategory({ _id: editCategory._id, name, description })
      );
    } else {
      await dispatch(createCategory(name, description));
    }
    await dispatch(listCategories());
    setName('');
    setDescription('');
    onCancelEdit();
  };

  const buttonText = editMode ? 'Editar categoría' : 'Crear categoría';

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
            {buttonText}
          </button>
          {editMode && (
            <button
              type="button"
              className="btn btn-secondary mt-2"
              onClick={onCancelEdit}
            >
              Cancelar edición
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default CreateCategory;
