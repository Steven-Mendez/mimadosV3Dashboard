import React from 'react';

const ProductsStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Estadísticas de productos</h5>
          <iframe
            style={{
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
              width: '100%',
              height: '480px',
            }}
            src="https://charts.mongodb.com/charts-mimados-cxfux/embed/charts?id=649901bb-32a2-404d-8c9d-153f2886a3af&maxDataAge=3600&theme=light&autoRefresh=true"
            title="MongoDB Charts"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default ProductsStatistics;
