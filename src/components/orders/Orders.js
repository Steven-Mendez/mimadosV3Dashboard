import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/es';

const Orders = (props) => {
  const { orders } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Correo</th>
          <th scope="col">Total</th>
          <th scope="col">Pagado</th>
          <th scope="col">Fecha</th>
          <th>Estado</th>
          <th scope="col" className="text-end">
            Acciones
          </th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <tr key={order._id}>
            <td>
              <b>{order.user.name}</b>
            </td>
            <td>{order.user.email}</td>
            <td>${order.totalPrice}</td>
            <td>
              {order.isPaid ? (
                <span className="badge rounded-pill alert-success">
                  Pagado {moment(order.paidAt).locale('es').format('MMM D YY')}
                </span>
              ) : (
                <span className="badge rounded-pill alert-danger">
                  No Pagado
                </span>
              )}
            </td>
            <td>{moment(order.createdAt).locale('es').format('MMM D YY')}</td>
            <td>
              {order.isDelivered ? (
                <span className="badge btn-success">Entregado</span>
              ) : (
                <span className="badge btn-dark">No entregado</span>
              )}
            </td>
            <td className="d-flex justify-content-end align-item-center">
              <Link to={`/order/${order._id}`} className="text-success">
                <i className="fas fa-eye"></i>
              </Link>
            </td>
          </tr>
        ))}

        {/* Not paid Not delivered */}
        {/* <tr>
          <td>
            <b>Velcro Sneakers For Boys & Girls (Blue)</b>
          </td>
          <td>user@example.com</td>
          <td>$45,789</td>
          <td>
            <span className="badge rounded-pill alert-danger">Not paid</span>
          </td>
          <td>Dec 12 2021</td>
          <td>
            <span className="badge btn-dark">Not Delivered</span>
          </td>
          <td className="d-flex justify-content-end align-item-center">
            <Link to={`/order`} className="text-success">
              <i className="fas fa-eye"></i>
            </Link>
          </td>
        </tr> */}
      </tbody>
    </table>
  );
};

export default Orders;
