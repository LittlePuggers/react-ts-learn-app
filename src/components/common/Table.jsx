export function Table({ asStudent, user }) {
  const list = user.list;

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>NAME</th>
          <th>{asStudent ? "SPECIALIZATION" : "STATUS"}</th>
        </tr>
        {list.map((item) => {
          return (
            <tr>
              <td>{item.name}</td>
              <td>{item.extra}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
