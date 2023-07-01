import React from 'react';
import Sidebar from '../components/sidebar';
import Header from '../components/Header';
import SupplierComponent from '../components/Supplier/SupplierComponent';

const SupplierScreen = () => {
  return (
    <>
      <Sidebar />
      <main className="main-wrap">
        <Header />
        <SupplierComponent />
      </main>
    </>
  );
};

export default SupplierScreen;
