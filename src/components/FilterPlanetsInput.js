import React, { useContext } from 'react';
import MyContext from '../context';

export default function FilterPlanetsByInput() {
  const { filterContext:
    { filters: { filterByName: { setName } } } } = useContext(MyContext);

  const handleChange = ({ target: { value } }) => {
    setName(value);
  };

  return (
    <div className="input-filter-box">
      <span>Digite o nome do Planeta:</span>
      <input
        className="input-filter"
        data-testid="name-filter"
        type="text"
        onChange={ handleChange }
      />
    </div>
  );
}
