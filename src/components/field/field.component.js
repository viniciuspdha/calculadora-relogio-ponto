import './field.style.css';

const normalizeTime = value => {
  const rawValue = value.replace(':', '');
  let normalizedValue;

  normalizedValue = rawValue.replace(/^[^0-9\b\s]+$/g, "").match(/.{1,2}/g)?.join(":").substr(0, 5) || ''

  return normalizedValue;
}

export const Field = ({ label, name, register, errors }) => {
  return (
    <div className="field">
      <label htmlFor={name}>{label}</label>
      <input className={errors[name] && 'error'} 
        type="tel" 
        id={name} 
        name={name} 
        ref={register} 
        inputMode="numeric" 
        minLength="5" 
        maxLength="5" 
        onChange={(event) => {
          const { value } = event.target
          event.target.value = normalizeTime(value);
        }} 
      />
      <p className="error-message">{errors[name]?.message}</p>
    </div>
  )
}