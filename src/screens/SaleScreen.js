import React from 'react';
import Sidebar from './../components/sidebar';
import Header from './../components/Header';

const SaleScreen = () => {
  var tableCount = 1;
  var products = [
    {
      product: {
        _id: '649f144187b034c684c83f73',
        name: 'Alimento Perro Adulto marca Purina Dog Chow Medianos y Grandes -2kg',
      },
      quantity: 4,
      price: 10,
      _id: '649f5aa0561085869e811c7d',
    },
    {
      product: {
        _id: '649f144187b034c684c83f73',
        name: 'Alimento Perro Adulto marca Purina Dog Chow Medianos y Grandes -2kg',
      },
      quantity: 4,
      price: 10,
      _id: '649f5aa0562085869e811c7d',
    },
    {
      product: {
        _id: '649f144187b034c684c83f73',
        name: 'Alimento Perro Adulto marca Purina Dog Chow Medianos y Grandes -2kg',
      },
      quantity: 4,
      price: 10,
      _id: '649f5aa05610f169e811c7d',
    },
    {
      product: {
        _id: '649f144187b034c684c83f73',
        name: 'Alimento Perro Adulto marca Purina Dog Chow Medianos y Grandes -2kg',
      },
      quantity: 4,
      price: 10,
      _id: '6f15aa0561085869e811c7d',
    },
    {
      product: {
        _id: '649f144187b034c6f1f73',
        name: 'Alimento Perro Adulto marca Purina Dog Chow Medianos y Grandes -2kg',
      },
      quantity: 4,
      price: 10,
      _id: '649ff161085869e811c7d',
    },
  ];

  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        {/* Card Header */}
        <div className="row">
          <div className="col-sm-12">
            <div className="card shadow mb-4">
              <div className="card-header py-3 d-flex justify-content-between">
                <span>Facturar</span>
                <button
                  id="btnTerminarGuardarVenta"
                  className="btn btn-warning btn-icon-split btn-sm"
                >
                  <span className="text">Finalizar</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Card Body */}
        <div className="card-body p-2 card-venta">
          {/* Today's Date & Barcode */}
          <div className="row">
            <div className="col-sm-3">
              <div className="input-group input-group-sm mb-2">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text bg-secondary text-white"
                    htmlFor="inputGroupSelect01"
                  >
                    Fecha de Venta
                  </label>
                </div>
                <input
                  id="SaleDateInput"
                  readOnly
                  type="text"
                  className="form-control"
                  value={new Date().toLocaleDateString()}
                />
              </div>
            </div>
            <div className="col-sm-3">
              <div className="input-group input-group-sm mb-2">
                <div className="input-group-prepend">
                  <label
                    className="input-group-text bg-secondary text-white"
                    htmlFor="inputGroupSelect01"
                  >
                    Código de Barra
                  </label>
                </div>
                <input id="BarCodeInput" type="text" className="form-control" />
              </div>
            </div>
          </div>
          {/* Branch & Employee */}
          <div className="row">
            {/* Branch */}
            <div className="col-sm-6">
              <div className="card shadow mb-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-10">
                      <h6 className="card-title mb-1">Sucursal</h6>
                    </div>
                  </div>
                  <div className="row collapse show" id="collapse1">
                    <input id="txtIdTienda" type="hidden" value="0" />
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <label
                          for="BranchNameLabel"
                          className="col-form-label col-form-label-sm"
                        >
                          Nombre:
                        </label>
                        <label
                          id="BranchNameLabel"
                          className="form-control form-control-sm model mb-1"
                          readonly
                        >
                          Sucursal Principal
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Employee */}
            <div className="col-sm-6">
              <div className="card shadow mb-2">
                <div className="card-body">
                  <div className="row">
                    <div className="col-sm-10">
                      <h6 className="card-title mb-1">Empleado</h6>
                    </div>
                  </div>
                  <div className="row collapse show" id="collapse2">
                    <input id="txtIdUsuario" type="hidden" value="0" />
                    <div className="col-sm-6">
                      <div className="form-group mb-0">
                        <label
                          for="SecondNameLabel"
                          className="col-form-label col-form-label-sm"
                        >
                          Apellido:
                        </label>
                        <label
                          id="SecondNameLabel"
                          className="form-control form-control-sm model mb-1"
                          readonly
                        >
                          Mendez Paiz
                        </label>
                      </div>
                    </div>
                    <div className="col-sm-6">
                      <div className="form-group mb-0">
                        <label
                          for="FirstNameLabel"
                          className="col-form-label col-form-label-sm"
                        >
                          Nombre:
                        </label>
                        <label
                          id="FirstNameLabel"
                          className="form-control form-control-sm model mb-1"
                          readonly
                        >
                          Steven Alexander
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Detail */}

          <div className="row">
            <div className="col-sm-6">
              <div className="card shadow mb-2">
                <div className="card-body p-2">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Detalle cliente
                  </h6>
                  <div className="row align-items-end">
                    <div className="col-sm-5">
                      <div className="form-group mb-0">
                        <label
                          for="SecondNameInput"
                          className="col-form-label col-form-label-sm"
                        >
                          Apellido: <span className="required">*</span>{' '}
                        </label>
                        <input
                          id="SecondNameInput"
                          name="SecondName"
                          type="text"
                          className="form-control form-control-sm model"
                          readonly
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-5">
                      <div className="form-group mb-0">
                        <label
                          for="NameInput"
                          className="col-form-label col-form-label-sm"
                        >
                          Nombre: <span className="required">*</span>
                        </label>
                        <input
                          id="NameInput"
                          name="Name"
                          type="text"
                          className="form-control form-control-sm model"
                          readonly
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    <div className="col-sm-2">
                      <div className="form-group mb-0">
                        <button
                          id="SearchCustomerButton"
                          type="button"
                          className="btn btn-sm btn-primary btn-block"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 'auto',
                            padding: '8px 25px',
                          }}
                        >
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Address */}
                  <div className="row">
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <label
                          for="AddressInput"
                          className="col-form-label col-form-label-sm"
                        >
                          Dirección:
                        </label>
                        <input
                          id="AddressInput"
                          name="Address"
                          type="text"
                          className="form-control form-control-sm model"
                          readonly
                          autocomplete="off"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Product Detail */}
            <div className="col-sm-6">
              <div className="card shadow mb-2">
                <div className="card-body p-2">
                  <h6 className="m-0 font-weight-bold text-primary">
                    Detalle Producto
                  </h6>
                  {/* Product ID, Product Code, Product Name */}
                  <div className="row align-items-end">
                    <input id="txtIdProducto" type="hidden" value="0" />
                    {/* Product Code */}
                    <div className="col-sm-2">
                      <div className="form-group mb-0">
                        <label
                          for="ProductCodeInput"
                          className="col-form-label col-form-label-sm"
                        >
                          Código: <span className="required">*</span>
                        </label>
                        <input
                          id="ProductCodeInput"
                          name="Code"
                          type="text"
                          className="form-control form-control-sm model"
                          readonly
                          autocomplete="off"
                        />
                      </div>
                    </div>
                    {/* Product Name */}
                    <div className="col-sm-4">
                      <div className="form-group mb-0">
                        <label
                          for="ProductNameInput"
                          className="col-form-label col-form-label-sm"
                        >
                          Nombre:
                        </label>
                        <input
                          id="ProductNameInput"
                          name="ProductName"
                          type="text"
                          className="form-control form-control-sm model"
                          readonly
                        />
                      </div>
                    </div>
                    {/* Product Search Button */}
                    <div className="col-sm-2">
                      {' '}
                      {/* Increase column width */}
                      <div className="form-group mb-0">
                        <button
                          id="SearchProductButton"
                          type="button"
                          className="btn btn-sm btn-primary btn-block"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 'auto',
                            padding: '8px 25px',
                          }}
                        >
                          <i className="fas fa-search"></i>
                        </button>
                      </div>
                    </div>

                    {/* Add Product Button */}
                    <div className="col-sm-2">
                      {' '}
                      {/* Increase column width */}
                      <div className="form-group mb-0">
                        <button
                          id="AddProductButton"
                          type="button"
                          className="btn btn-sm btn-primary btn-block"
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: 'auto',
                            padding: '8px 25px',
                          }}
                        >
                          <i className="fa fa-plus" aria-hidden="true"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* Product Stock & Product Price & Product Quantity */}
                  <div className="row">
                    {/* Product Stock */}
                    <div className="col-sm-3">
                      <div className="form-group mb-0">
                        <label
                          for="ProductStockInput"
                          className="col-form-label col-form-label-sm"
                        >
                          En Stock:
                        </label>
                        <input
                          id="ProductStockInput"
                          name="ProductStock"
                          type="text"
                          className="form-control form-control-sm model"
                          readonly
                        />
                      </div>
                    </div>
                    {/* Product Price */}
                    <div className="col-sm-3">
                      <div className="form-group mb-0">
                        <label
                          for="ProductPriceInput"
                          className="col-form-label col-form-label-sm"
                        >
                          Precio:
                        </label>
                        <input
                          id="ProductPriceInput"
                          name="ProductPrice"
                          type="text"
                          className="form-control form-control-sm model"
                          readonly
                        />
                      </div>
                    </div>
                    {/* Product Quantity */}
                    <div className="col-sm-3">
                      <div className="form-group mb-0">
                        <label
                          for="ProductQuantityInput"
                          className="col-form-label col-form-label-sm"
                        >
                          Cantidad: <span className="required">*</span>
                        </label>
                        <input
                          id="ProductQuantityInput"
                          name="ProductQuantity"
                          type="number"
                          className="form-control form-control-sm model"
                          autocomplete="off"
                          min="0"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-12">
                <h6 className="m-0 font-weight-bold text-primary">Carrito</h6>
              </div>
            </div>
            {/* Cart Table */}
            <div className="row mt-3">
              <div className="col-sm-12">
                <div className="table-responsive-sm">
                  <table
                    id="CartTable"
                    style={{ width: '100%' }}
                    className="table table-striped table-bordered nowrap table-sm"
                  >
                    <thead>
                      <tr>
                        <th width="3%">#</th>
                        <th width="40%">Producto</th>
                        <th width="8%">Cantidad</th>
                        <th width="14%">Precio</th>
                        <th width="15%">Total</th>
                        <th width="1%"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {products.map((item) => (
                        <tr key={item.product._id}>
                          <td>{tableCount++}</td>
                          <td>{item.product.name}</td>
                          <td>{item.quantity}</td>
                          <td>C${item.price.toFixed(2)}</td>
                          <td>C${(item.price * item.quantity).toFixed(2)}</td>
                          <td>
                            <button className="btn btn-sm btn-danger btn-block">
                              Eliminar
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <hr />
            {/* SubTotal & Total */}
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group input-group-sm mb-2">
                      {/* SubTotal */}
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text bg-secondary text-white"
                          for="inputGroupSelect01"
                        >
                          Sub Total C$.
                        </label>
                      </div>
                      <input
                        id="SubTotalInput"
                        readonly
                        type="text"
                        className="form-control"
                        value="0"
                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="input-group input-group-sm mb-2">
                      {/* Total */}
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text bg-secondary text-white"
                          for="inputGroupSelect01"
                        >
                          Total C$.
                        </label>
                      </div>
                      <input
                        id="TotalInput"
                        readonly
                        type="text"
                        className="form-control"
                        value="0"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <hr />
            {/* Payment */}
            <div className="row">
              <div className="col-sm-12">
                <div className="row">
                  <div className="col-sm-6">
                    <div className="input-group input-group-sm mb-2">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text bg-secondary text-white"
                          for="inputGroupSelect01"
                        >
                          Monto Pago C$.
                        </label>
                      </div>
                      <input
                        id="PaymentInput"
                        type="number"
                        className="form-control"
                        autocomplete="off"
                        min="0"
                        value="0"
                        // onchange="calcularCambio()"
                      />
                    </div>
                  </div>
                  {/* Change */}
                  <div className="col-sm-6">
                    <div className="input-group input-group-sm mb-2">
                      <div className="input-group-prepend">
                        <label
                          className="input-group-text bg-secondary text-white"
                          for="inputGroupSelect01"
                        >
                          Cambio C$.
                        </label>
                      </div>
                      <input
                        id="ChangeInput"
                        readonly
                        type="text"
                        className="form-control"
                        value="0.00"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default SaleScreen;
