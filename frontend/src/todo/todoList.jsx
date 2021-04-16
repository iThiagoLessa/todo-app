import React from "react";
import IconButton from "../template/iconButton";

export default (props) => {
  const renderRows = () => {
    const list = props.list || [];
    return list.map((todo) => (
      //esse _id é gerado pelo mongo, é uma chave dele
      <tr key={todo._id}>
        <td>{todo.description}</td>
        <td>
          <IconButton
            style="danger"
            icon="trash-o"
            onClick={() => props.handleRemove(todo)}
          />
        </td>
      </tr>
    ));
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Decrição</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>{renderRows()}</tbody>
    </table>
  );
};
