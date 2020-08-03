import React from 'react';
import Grudge from './Grudge';
import { GrudgeContext } from './GrudgeContext';

// second level state which pass props ro Grudge component
const Grudges = () => {
  const { grudges } = React.useContext(GrudgeContext);
  return (
    <section className="Grudges">
      <h2>Grudges ({grudges.length})</h2>
      {grudges.map((grudge) => (
        <Grudge key={grudge.id} grudge={grudge} />
      ))}
    </section>
  );
};

export default Grudges;
