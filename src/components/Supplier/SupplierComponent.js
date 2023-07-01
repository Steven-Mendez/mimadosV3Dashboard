import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { listSuppliers } from '../../Redux/Actions/supplierActions';
import Loading from '../LoadingError/Loading';
import Message from '../LoadingError/Error';

const SupplierComponent = () => {
  const dispatch = useDispatch();

  const supplierList = useSelector((state) => state.supplierList);
  const { loading, error, suppliers } = supplierList;

  useEffect(() => {
    dispatch(listSuppliers());
  }, [dispatch]);

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Proveedores</h2>
        <div>
          <Link to="#" className="btn btn-primary">
            <i className="material-icons md-plus"></i> Crear Nuevo
          </Link>
        </div>
      </div>

      <div className="card mb-4">
        <header className="card-header">
          <div className="row gx-3">
            <div className="col-lg-4 col-md-6 me-auto">
              <input
                type="text"
                placeholder="Buscar..."
                className="form-control"
              />
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Mostrar 20</option>
                <option>Mostrar 30</option>
                <option>Mostrar 40</option>
                <option>Mostrar todos</option>
              </select>
            </div>
            <div className="col-lg-2 col-6 col-md-3">
              <select className="form-select">
                <option>Estado: Todos</option>
                <option>Activos</option>
                <option>Inactivos</option>
              </select>
            </div>
          </div>
        </header>

        {/* Card */}
        <div className="card-body">
          {loading ? (
            <Loading />
          ) : error ? (
            <Message variant="alert-danger">{error}</Message>
          ) : (
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4">
              {suppliers.map((supplier) => (
                <div className="col" key={supplier._id}>
                  <div className="card card-user shadow-sm">
                    <div className="card-header">
                      <img
                        className="img-md img-avatar"
                        src="images/supplier.png"
                        alt="User pic"
                      />
                    </div>
                    <div className="card-body">
                      <h5 className="card-title mt-5">{supplier.name}</h5>
                      <div className="card-text text-muted">
                        <p className="m-0">
                          Persona de contacto: {supplier.contactPerson}
                        </p>
                        <p className="m-0">
                          Correo electrónico:{' '}
                          <a href={`mailto:${supplier.email}`}>
                            {supplier.email}
                          </a>
                        </p>
                        <p className="m-0">
                          Teléfono:{' '}
                          <a href={`tel:${supplier.phone}`}>{supplier.phone}</a>
                        </p>
                        <p className="m-0">
                          Dirección: {supplier.address.street},{' '}
                          {supplier.address.city}, {supplier.address.state},{' '}
                          {supplier.address.postalCode},{' '}
                          {supplier.address.country}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* nav */}
          <nav className="float-end mt-4" aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item disabled">
                <Link className="page-link" to="#">
                  Previous
                </Link>
              </li>
              <li className="page-item active">
                <Link className="page-link" to="#">
                  1
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to="#">
                  Next
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default SupplierComponent;
