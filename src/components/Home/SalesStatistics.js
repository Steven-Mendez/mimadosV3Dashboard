import React from 'react';

const SaleStatistics = () => {
  return (
    <div className="col-xl-6 col-lg-12">
      <div className="card mb-4 shadow-sm">
        <article className="card-body">
          <h5 className="card-title">Estadísticas de venta</h5>
          <iframe
            style={{
              background: '#FFFFFF',
              border: 'none',
              borderRadius: '2px',
              boxShadow: '0 2px 10px 0 rgba(70, 76, 79, .2)',
              width: '100%',
              height: '480px',
            }}
            src="https://charts.mongodb.com/charts-mimados-cxfux/embed/charts?id=6498ef88-718a-40b6-8c44-266e4264a5fa&maxDataAge=60&theme=light&autoRefresh=true"
            title="MongoDB Charts"
          ></iframe>
        </article>
      </div>
    </div>
  );
};

export default SaleStatistics;
