import React, { useContext } from 'react';
import MyContext from '../context';
import FilterNumericValues from './FilterNumericValues';
import FilterPlanetsByInput from './FilterPlanetsInput';
import TableBody from './TableBody';
import TableHeader from './TableHeader';
import starwarslogo from '../images/starwars.png';
import luke from '../images/luke.png';
import vader from '../images/vader.png';

export default function Table() {
  const { loading } = useContext(MyContext);

  if (loading) return <h1>Loading...</h1>;

  return (
    <>
      <div className="filters">
        <FilterPlanetsByInput />
        <FilterNumericValues />
      </div>
      <div className="table-logos">
        <img className="starwars-chars luke" src={luke} alt="luke" />
        <div className="starwarsbox">
          <img src={starwarslogo} alt="starwarslogo" className="starwarslogo" />
          <h2 className="table-title">PLANETS SEARCH</h2>
        </div>
        <img className="starwars-chars vader" src={vader} alt="vader" />
      </div>
      <div className="row">
        <table id="example" class="table table-striped table-bordered" style={{width:"100%"}}>
          <TableHeader />
          <TableBody />
        </table>
      </div>
    </>
  );
}
