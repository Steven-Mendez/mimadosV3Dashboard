import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  listCategories,
  deleteCategory,
} from '../../Redux/Actions/CategoryActions';

const CategoriesTable = () => {
  const dispatch = useDispatch();

  const categoryList = useSelector((state) => state.categoryList);
  const { loading, error, categories } = categoryList;

  const categoryDelete = useSelector((state) => state.categoryDelete);
  const { success: successDelete } = categoryDelete;

  useEffect(() => {
    dispatch(listCategories());
  }, [dispatch, successDelete]);

  const deleteHandler = (categoryId) => {
    if (
      window.confirm('¿Estás seguro de que deseas eliminar esta categoría?')
    ) {
      dispatch(deleteCategory(categoryId));
    }
  };

  return (
    <div className="col-md-12 col-lg-8">
      <table className="table">
        <thead>
          <tr>
            <th>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" />
              </div>
            </th>
            <th style={{ display: 'none' }}>Id</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th className="text-end">Acción</th>
          </tr>
        </thead>
        <tbody>
          {loading ? (
            <tr>
              <td colSpan="5">Cargando...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan="5">{error}</td>
            </tr>
          ) : (
            categories.map((category) => (
              <tr key={category._id}>
                <td>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                    />
                  </div>
                </td>
                <td style={{ display: 'none' }}>{category._id}</td>
                <td>
                  <b>{category.name}</b>
                </td>
                <td>{category.description}</td>
                <td className="text-end">
                  <div className="dropdown">
                    <Link
                      to="#"
                      data-bs-toggle="dropdown"
                      className="btn btn-light"
                    >
                      <i className="fas fa-ellipsis-h"></i>
                    </Link>
                    <div className="dropdown-menu">
                      <Link className="dropdown-item" to="#">
                        Editar información
                      </Link>
                      <button
                        className="dropdown-item text-danger"
                        onClick={() => deleteHandler(category._id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default CategoriesTable;
