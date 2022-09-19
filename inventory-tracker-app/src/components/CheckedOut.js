import Table from "react-bootstrap/Table";
import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import styled from "styled-components";
import { DarkThemeContext } from "./DarkThemeContext";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TableHeader = styled.thead`
  text-align: center;
`;

export function CheckedOut({ items }) {
  const { tableColor, darkMode } = useContext(DarkThemeContext);
  const StyledDiv = styled.div`
    height: 100vh;
    /* margin-bottom: 15%; */
    padding: 1%;
    background-color: ${darkMode};
  `;
  const handleDownloadTable = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: "#table" });
    pdf.save("checked-out.pdf");
  };

  if (items.length === 0) {
    return (
      <div className="lds-ripple">
        <div></div>
        <div></div>
        <div></div>
      </div>
    );
  } else {
    return (
      <StyledDiv>
        <Table striped bordered hover size="sm" id="table" variant={tableColor}>
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
              console.log(item.checked_out);
              return item.checked_out === true && item.user_id !== 1 ? (
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
        <Button
          style={{ marginRight: "5px", marginLeft: "8px" }}
          onClick={() => handleDownloadTable()}
        >
          Download Inventory
        </Button>
      </StyledDiv>
    );
  }
}
