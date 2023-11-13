export function Input({
  name,
  labelText,
  placeholder,
  inputType,
  icon,
  selectArray,
  error,
  onChange,
  value,
}) {
  return (
    <div className={`input ${error ? "input-error" : null}`}>
      <label htmlFor={name}>{labelText}</label>
      {inputType !== "select" ? (
        <input
          id={name}
          placeholder={placeholder}
          value={value}
          type={inputType}
          style={{ backgroundImage: `url(${icon})` }}
          onChange={(e) => onChange(e.target.value)}
        />
      ) : (
        <>
          <select id={name} onChange={(e) => onChange(e.target.value)}>
            <option value="">{placeholder}</option>
            {selectArray.map((item, index) => {
              return (
                <option value={item} key={index}>
                  {item}
                </option>
              );
            })}
          </select>
        </>
      )}
    </div>
  );
}
