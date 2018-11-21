import React from 'react';
import './Panel.css';

export const Panel = (props) => {
    return (
      <button onClick={ props.handleClick } className={ `animation panel shadow-md m-2 rounded-full h-12 w-12 lg:h-32 lg:w-32 ${props.isBlack ? 'bg-grey-darkest flip-vertical-right' : 'bg-white flip-vertical-left'}` } />
    );
};

export default Panel;