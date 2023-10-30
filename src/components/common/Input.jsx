export function Input({
  name,
  labelText,
  placeholder,
  inputType,
  icon,
  selectArray,
}) {
  return (
    <div className="input">
      <label for={name}>{labelText}</label>
      {inputType !== "select" ? (
        <input
          id={name}
          placeholder={placeholder}
          type={inputType}
          style={{ backgroundImage: `url(${icon})` }}
        />
      ) : (
        <>
          <select id={name}>
            <option value="">{placeholder}</option>
            {selectArray.map((item) => {
              return <option value={item}>{item}</option>;
            })}
          </select>
        </>
      )}
    </div>
  );
}
