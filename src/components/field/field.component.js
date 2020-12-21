import { mask, unMask } from 'remask';

import './field.style.css';

const handleChange = (e, pattern) => {
  const originalValue = unMask(e.target.value);

  e.target.value = mask(originalValue, pattern);
}

export const Field = ({ type, label, name, register, errors, pattern }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input className={errors[name] && 'error'} 
        type={type} 
        id={name} 
        name={name} 
        ref={register} 
        onChange={e => handleChange(e, pattern)} 
      />
      <p className="error-message">{errors[name]?.message}</p>
    </div>
  )
}