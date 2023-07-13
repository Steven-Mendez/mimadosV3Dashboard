import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getSaleDetails } from '../../Redux/Actions/SaleActions';

const InvoiceComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSaleDetails(id));
  }, [dispatch, id]);

  const saleDetails = useSelector((state) => state.saleDetails);
  const { loading, error, sale } = saleDetails;

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.1/css/all.min.css"
        integrity="sha256-2XFplPlrFClt0bIdPgpz8H7ojnk10H69xRqd9+uTShA="
        crossorigin="anonymous"
      />

      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-body">
                <div className="invoice-title">
                  <div className="mb-4">
                    <h2 className="mb-1 text-muted">Mimados</h2>
                  </div>
                  <div className="text-muted">
                    <p className="mb-1">RUC: #####-#####</p>
                    <p className="mb-1">Bo. Larreynaga</p>
                    <p className="mb-1">
                      <i className="uil uil-envelope-alt me-1"></i>{' '}
                      info@mimados.com
                    </p>
                    <p>
                      <i className="uil uil-phone me-1"></i> 8158-7176
                    </p>
                  </div>
                </div>
                <hr className="my-4" />
                <div className="row">
                  <div className="col-sm-6">
                    <div className="text-muted">
                      <h5 className="font-size-16 mb-3">Facturado a:</h5>
                      <h5 className="font-size-15 mb-2">{sale.customerName}</h5>
                      <p className="mb-1"> </p>
                      <p className="mb-1"></p>
                      <p></p>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="text-muted text-sm-end">
                      <div>
                        <h5 className="font-size-15 mb-1">Factura no:</h5>
                        <p>#{id}</p>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-size-15 mb-1">
                          Fecha de la factura:
                        </h5>
                        <p>{new Date(sale.createdAt).toLocaleString()}</p>
                      </div>
                      <div className="mt-4">
                        <h5 className="font-size-15 mb-1"></h5>
                        <p></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="py-2">
                  <h5 className="font-size-15">Resumen</h5>

                  <div className="table-responsive">
                    <table className="table align-middle table-nowrap table-centered mb-0">
                      <thead>
                        <tr>
                          <th style={{ width: '70px' }}>No.</th>
                          <th>Producto</th>
                          <th>Precio</th>
                          <th>Cantidad</th>
                          <th className="text-end" style={{ width: '120px' }}>
                            Total
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {sale.products?.map((item, index) => (
                          <tr>
                            <th scope="row">{index + 1}</th>
                            <td>
                              <div>
                                <h5 className="text-truncate font-size-14 mb-1">
                                  {item.product.name}
                                </h5>
                              </div>
                            </td>
                            <td>C$ {item.price}</td>
                            <td>{item.quantity}</td>
                            <td className="text-end">
                              C$ {item.price * item.quantity}
                            </td>
                          </tr>
                        ))}
                        <tr>
                          <th scope="row" colspan="4" className="text-end">
                            Sub Total
                          </th>
                          <td className="text-end">
                            C${(sale.totalAmount / 1.15)?.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colspan="4"
                            className="border-0 text-end"
                          >
                            Impuesto
                          </th>
                          <td className="border-0 text-end">
                            C$
                            {(
                              sale.totalAmount -
                              sale.totalAmount / 1.15
                            )?.toFixed(2)}
                          </td>
                        </tr>
                        <tr>
                          <th
                            scope="row"
                            colspan="4"
                            className="border-0 text-end"
                          >
                            Total
                          </th>
                          <td className="border-0 text-end">
                            <h4 className="m-0 fw-semibold">
                              C${sale.totalAmount?.toFixed(2)}
                            </h4>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="d-print-none mt-4">
                    <div className="float-end">
                      <a
                        href="javascript:window.print()"
                        className="btn btn-success me-1"
                      >
                        <i className="fa fa-print"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoiceComponent;
