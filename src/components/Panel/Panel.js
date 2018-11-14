import React from 'react';
import './Panel.css';

export const Panel = (props) => {
    return (
      <button onClick={ props.handleClick } className={ `panel shadow-md m-2 rounded-full h-48 w-48 ${props.isBlack ? 'bg-grey-darkest' : 'bg-white'}` } />
    );
};

export default Panel;