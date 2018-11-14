import React from 'react';
import './Panel.css';

export const Panel = (props) => {
    return (
      <button onClick={ props.handleClick } className={ `panel shadow-md m-2 rounded-full h-16 w-16 lg:h-48 lg:w-48 ${props.isBlack ? 'bg-grey-darkest' : 'bg-white'}` } />
    );
};

export default Panel;