import React from 'react';
import { GrudgeContext } from './GrudgeContext';

const Grudge = React.memo(({ grudge }) => {
  const { toggleForgiveness } = React.useContext(GrudgeContext);
  
  const forgive = () => toggleForgiveness(grudge.id); // pass grudge id to main app state as toggleForgiveness function lies on App component !

  console.log('Re-rendering new grudge', grudge);
  return (
    <article className="Grudge">
      <h3>{grudge.person}</h3>
      <p>{grudge.reason}</p>
      <div className="Grudge-controls">
        <label className="Grudge-forgiven">
          <input type="checkbox" checked={grudge.forgiven} onChange={forgive} />{' '}
          Forgiven
        </label>
      </div>
    </article>
  );
});

export default Grudge;
