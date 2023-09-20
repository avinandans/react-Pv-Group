import React, { useState } from 'react';
import style from './index.module.css'

const Accordion = ({ title, content }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className={`${style.accordion_item}`}>
      <div className={`${style.header}`} onClick={toggleAccordion}>
        <h5 className={`${style.title}`}>{title}</h5>
        <span className={`${style.signel}`}>{isExpanded ? '-' : '+'}</span>
      </div>
      {isExpanded && (
        <div className={`${style.body}`}>
          <p className={`${style.content}`}>{content}</p>
        </div>
      )}
    </div>
  );
};

export default Accordion;