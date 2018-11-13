import React from 'react';
import './Panel.css';

export const Panel = (props) => {
    return (
      <button onClick={ props.handleClick } className={ `panel ${props.isBlack ? 'bg-black' : 'bg-white'}` } />
    );
};

export default Panel;