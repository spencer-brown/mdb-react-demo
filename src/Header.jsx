import React, { Fragment } from 'react';


function Header(props) {
  return (
    <Fragment>
      <h1>{props.title}</h1>
      <h3>{props.subtitle}</h3>
    </Fragment>
  );
}

export default Header;
