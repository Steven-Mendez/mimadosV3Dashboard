import React, { useState } from 'react';
import CreateCategory from './CreateCategory';
import CategoriesTable from './CategoriesTable';

const MainCategories = () => {
  const [editMode, setEditMode] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  const handleEditCategory = (category) => {
    setEditMode(true);
    setEditCategory(category);
  };

  const handleCancelEdit = () => {
    setEditMode(false);
    setEditCategory(null);
  };

  return (
    <section className="content-main">
      <div className="content-header">
        <h2 className="content-title">Categorías</h2>
      </div>

      <div className="card shadow-sm">
        <div className="card-body">
          <div className="row">
            {/* Create category */}
            <CreateCategory
              editMode={editMode}
              editCategory={editCategory}
              onCancelEdit={handleCancelEdit}
            />
            {/* Categories table */}
            <CategoriesTable onEditCategory={handleEditCategory} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainCategories;
