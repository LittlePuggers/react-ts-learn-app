export function Table({ asStudent = true, list, onCheckboxChange }) {
  const showCheckboxColumn = list.some((item) => item.selected === false);

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            {showCheckboxColumn && <th></th>}
            <th>NAME</th>
            <th>{asStudent ? "SPECIALIZATION" : "STATUS"}</th>
          </tr>
        </thead>
        <tbody>
          {list.map((item, index) => {
            return (
              <tr key={index}>
                {showCheckboxColumn && (
                  <td>
                    <input
                      type="checkbox"
                      checked={item.selected}
                      onChange={() => onCheckboxChange(index)}
                    />
                  </td>
                )}
                <td className="bold">{item.name}</td>
                <td>{item.status || item.specialization}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
