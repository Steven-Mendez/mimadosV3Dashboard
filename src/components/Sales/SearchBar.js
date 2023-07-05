import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { listProducts } from '../../Redux/Actions/ProductActions';
import './SearchBar.css';

export const SearchBar = ({ setResults, input, setInput }) => {
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { products } = productList;

  const productDelete = useSelector((state) => state.productDelete);
  const { success: successDelete } = productDelete;

  var filteredProducts = [];

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch, successDelete]);

  const handleChange = (value) => {
    setInput(value);
    filteredProducts =
      value.length > 3
        ? products.filter((product) =>
            product.name.toLowerCase().includes(value.toLowerCase())
          )
        : [];

    setResults(filteredProducts);
  };

  return (
    <div className="input-wrapper">
      <i className="fas fa-search" />
      <input
        placeholder="Escribe para buscar..."
        value={input}
        onChange={(e) => handleChange(e.target.value)}
      />
    </div>
  );
};
