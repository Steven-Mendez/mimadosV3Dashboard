import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Sidebar from './../components/sidebar';
import Header from './../components/Header';
import { SearchBar } from '../components/Sales/SearchBar';
import { SearchResultList } from '../components/Sales/SearchResultList';
import { createSale } from '../Redux/Actions/SaleActions';

const SaleScreen = () => {
  const [id, setId] = useState(0);
  const [name, setName] = useState('');
  const [stock, setStock] = useState(0);
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [subTotal, setSubTotal] = useState(0);
  const [total, setTotal] = useState(0);
  const [payment, setPayment] = useState(0);
  const [change, setChange] = useState(0);
  const [cart, setCart] = useState([]);

  const [customerName, setCustomerName] = useState('');
  const [customerSurname, setCustomerSurname] = useState('');

  const dispatch = useDispatch();

  const saleCreate = useSelector((state) => state.saleCreate);

  const handleProductResultClick = (result) => {
    setId(result._id);
    setName(result.name);
    setStock(result.countInStock);
    setPrice(result.price);

    // Check the cart for the product and substitute the Stock value with the Quantity value of the product in the cart
    const productInCart = cart.find((x) => x.product._id === result._id);
    if (productInCart) {
      setStock(result.countInStock - productInCart.quantity);
    }
  };

  const handleAddProductClick = () => {
    // Check if the product is in blank
    if (id === 0) {
      alert('No se ha seleccionado un producto');
      return;
    }

    // Check if the product is in stock
    if (stock < quantity) {
      alert('No hay suficiente stock');
      return;
    }

    // Check if product is already in cart
    const productInCart = cart.find((x) => x.product._id === id);

    // If the product is already in the cart, update the quantity with quantityInput
    if (productInCart) {
      productInCart.quantity =
        parseInt(quantity) + parseInt(productInCart.quantity);
      setCart([...cart]);
    }
    // If the product is not in the cart, add it
    else {
      cart.push({
        product: {
          _id: id,
          name: name,
        },
        quantity: quantity,
        price: price,
        _id: id,
      });
      setCart([...cart]);
    }

    // Clear the input fields
    setId(0);
    setName('');
    setStock(0);
    setPrice(0);
    setQuantity(0);

    // Calculate the subtotal
    const newSubTotal = cart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0
    );
    setSubTotal(newSubTotal);

    // Calculate the total with taxes
    const newTotal = newSubTotal * 1.15;
    setTotal(newTotal);
  };

  const handleDeleteProductClick = (id) => {
    const newCart = cart.filter((x) => x.product._id !== id);
    setCart(newCart);

    // Calculate the subtotal
    const newSubTotal = newCart.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.quantity * currentValue.price,
      0
    );
    setSubTotal(newSubTotal);

    // Calculate the total with taxes
    const newTotal = newSubTotal * 1.15;
    setTotal(newTotal);
  };

  const handlePaymentChange = (e) => {
    setPayment(e.target.value);
    setChange(e.target.value - total);
  };

  const handleSaveSaleClick = () => {
    // Check if the cart is empty
    if (cart.length === 0) {
      alert('No hay productos para facturar');
      return;
    }

    // Check if the payment is enough
    if (payment < total) {
      alert('El pago no es suficiente');
      return;
    }

    // Check if the payment is in blank
    if (payment === 0) {
      alert('No se ha ingresado un pago');
      return;
    }

    // Check if the payment is NaN
    if (isNaN(payment)) {
      alert('El pago no es válido');
      return;
    }

    // Check if the payment is negative
    if (payment < 0) {
      alert('El pago no es válido');
      return;
    }

    // Check if the payment is 0
    if (payment === 0) {
      alert('El pago no es válido');
      return;
    }

    // Save the sale
    const formattedCart = cart.map((item) => ({
      product: item.product._id,
      quantity: parseInt(item.quantity),
      price: item.price,
    }));

    const sale = {
      customerName: `${customerName} ${customerSurname}`,
      products: formattedCart,
      totalAmount: total,
    };

    // Save with redux if there is an error alert
    dispatch(createSale(sale));

    if (saleCreate.error) {
      alert(saleCreate.error);
      return;
    }

    // Open the invoice in a new tab
    if (saleCreate.sale && saleCreate.sale._id) {
      window.open(`/invoice/${saleCreate.sale._id}`, '_blank');
    }

    // Clear the input fields
    setId(0);
    setName('');
    setStock(0);
    setPrice(0);
    setQuantity(0);
    setSubTotal(0);
    setTotal(0);
    setPayment(0);
    setChange(0);
    setCart([]);
    setCustomerName('');
    setCustomerSurname('');
  };

  const [results, setResults] = useState([]);
  const [input, setInput] = useState('');

  var tableCount = 1;

  return (
    <>
      <Sidebar setResults={setResults} />
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
                  onClick={handleSaveSaleClick}
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
                    <div className="col-sm-6">
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
                          onChange={(e) => {
                            setCustomerSurname(e.target.value);
                          }}
                          value={customerSurname}
                        />
                      </div>
                    </div>
                    <div className="col-sm-6">
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
                          onChange={(e) => {
                            setCustomerName(e.target.value);
                          }}
                          value={customerName}
                        />
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
                  {/* Product ID, Product Name, Product Code, Product Name */}
                  <div className="row align-items-end">
                    <input id="IdProduct" type="hidden" value={id} />
                    <input id="NameProduct" type="hidden" value={name} />
                    {/* Product ID */}
                    {/* Product Name */}
                    <div className="col-sm-12">
                      <div className="form-group mb-0">
                        <label
                          for="ProductNameInput"
                          className="col-form-label col-form-label-sm"
                        >
                          Nombre:
                        </label>
                        <SearchBar
                          setResults={setResults}
                          input={input}
                          setInput={setInput}
                        />
                        <SearchResultList
                          results={results}
                          handleClick={handleProductResultClick}
                          setResults={setResults}
                          setInput={setInput}
                        />
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
                          value={stock}
                          readOnly
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
                          value={price}
                          onChange={(e) => setPrice(e.target.value)}
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
                          value={quantity}
                          onChange={(e) => setQuantity(e.target.value)}
                        />
                      </div>
                    </div>
                    {/* Add Product Button */}
                    <div className="col-sm-3">
                      {/* Increase column width */}
                      <div className="form-group mb-0">
                        <button
                          id="AddProductButton"
                          type="button"
                          className="btn btn-sm btn-primary btn-block mt-4"
                          onClick={handleAddProductClick}
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
                      {cart.map((item) => (
                        <tr key={item.product._id}>
                          <td>{tableCount++}</td>
                          <td>{item.product.name}</td>
                          <td>{item.quantity}</td>
                          <td>C${item.price.toFixed(2)}</td>
                          <td>C${(item.price * item.quantity).toFixed(2)}</td>
                          <td>
                            <button
                              className="btn btn-sm btn-danger btn-block"
                              onClick={() =>
                                handleDeleteProductClick(item.product._id)
                              }
                            >
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
                        value={subTotal.toFixed(2)}
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
                        value={total.toFixed(2)}
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
                        value={payment}
                        onChange={handlePaymentChange}
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
                        value={change.toFixed(2)}
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
