import React from 'react';

export const Input = props => {
  const {
    input,
    label,
    type,
    ID,
    name,
    autoComplete,
    meta: { touched, error, submitFailed }
  } = props;
  return (
    <div>
      <label>{label}</label>
        <input {...input} placeholder={label} type={type} autoComplete={autoComplete} className={(touched && error)?"error_state":""}/>
        {touched && error && <span style={{color: "red"}}>{error}</span>}   
    </div>
  );
};

