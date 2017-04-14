import React from 'react';

const Counter = () =>
  <div className="counter">
    <button onClick={e => console.log(e)}>Increment after 1 second</button>
    <hr />
    <div>Clicked: times</div>
  </div>;

export default Counter;
