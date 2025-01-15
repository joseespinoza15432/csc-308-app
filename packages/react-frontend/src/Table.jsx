// src/Table.jsx
function TableHeader() {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
}
function TableBody(props) {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td>{row.job}</td>
      </tr>
    );
   }
  );
  return (
      <tbody>
        {rows}
       </tbody>
   );
}

function Table(props) {
    const rows = props.characterData.map((row, index) => (
        <tr key={index}>
            <td>{row.name}</td>
            <td>{row.job}</td>
            <td>
                <button onClick={() => props.removeCharacter(index)}>
                    Delete
                </button>
            </td>
        </tr>
    ));

    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Job</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

export default Table;
