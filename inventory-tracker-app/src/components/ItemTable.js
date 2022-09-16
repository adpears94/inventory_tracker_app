import React, {useContext} from 'react';
import Table from 'react-bootstrap/Table';
import styled from 'styled-components';
import { InventoryContext } from '../App';
import "../App.css";
import DisplayModal from './ItemModal.js';

const TableHeader = styled.thead`
  text-align: center;
`

export function ItemTable({items}) {
  const { allItems } = useContext(InventoryContext);

  if (allItems.length === 0) {
    return(
      <div className="lds-ripple">
        <div></div>
        <div></div>
        <div></div>
      </div>

    );

  } else {

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
            <th>Checked Out</th>
            <th>Assigned To</th>
          </tr>
        </TableHeader>
        <tbody>
          {items.map((item) => {
            return (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.item_name}</td>
                <td>{item.item_description}</td>
                <td>{item.category_name}</td>
                <td>{item.sub_category_name}</td>
                <td>{item.checked_out === false ? 'no' : 'yes'}</td>
                <td>{item.user_id === 1 ? '' : item.user_name}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <DisplayModal/>
    </>
  );
}

}