import React, { useEffect, useContext } from 'react';
import { NewsContext } from './NewsContext';

function Categories({ cat }) {
  const { changeCategory } = useContext(NewsContext);

  // Change the news category when the component renders
  useEffect(() => {
    changeCategory(cat); // Update the category in the context
  }, [cat, changeCategory]);

  return (
    <div>
      <h2>Showing {cat} News</h2>
    </div>
  );
}

export default Categories;
