import Table from "react-bootstrap/Table";
import styled from "styled-components";

const TableHeader = styled.thead`
  text-align: center;
`;

export function CheckedOut({ items }) {
  return (
    <>
      <Table striped bordered hover size="sm">
        <TableHeader>
          <tr>
            <th>Item ID</th>
            <th>Name</th>
            <th>Description</th>
            <th>Category</th>
            <th>Sub Category</th>
            <th>Assigned To</th>
          </tr>
        </TableHeader>
        <tbody>
          {items.map((item) => {
            console.log(item.checked_out)
            return (item.checked_out === true && item.user_id !== 1) ? (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.item_name}</td>
                <td>{item.item_description}</td>
                <td>{item.category_name}</td>
                <td>{item.sub_category_name}</td>
                <td>{item.user_name}</td>
              </tr>
            ) : null;
          })}
        </tbody>
      </Table>
    </>
  );
}
