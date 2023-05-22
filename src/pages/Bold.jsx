import React from 'react';

const Bold = ({ value, textSpanish, textEnglish, className }) => {
  return (
    <p className={className || ''}>
      <strong>
        { value ? textSpanish : textEnglish}
      </strong>
    </p>
  );
};

export default Bold;