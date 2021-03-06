import React from 'react';

export default function Planets({ planets }) {
  return (
    planets.map((result) => (
      <tr key={ result.name }>
        <td data-testid="planet-name">{result.name}</td>
        <td>{result.rotation_period}</td>
        <td>{result.orbital_period}</td>
        <td>{result.diameter}</td>
        <td>{result.climate}</td>
        <td>{result.gravity}</td>
        <td>{result.terrain}</td>
        <td>{result.surface_water}</td>
        <td>{result.population}</td>
        <td>{result.films}</td>
        <td>{result.created}</td>
        <td>{result.edited}</td>
        <td>{result.url}</td>
      </tr>
    ))
  );
}
