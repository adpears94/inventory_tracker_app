import React, { useState, useContext } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import { InventoryContext } from "./InventoryContext";
import { DarkThemeContext } from "./DarkThemeContext";
import Button from "react-bootstrap/Button";
import "../App.css";
import DisplayModal from "./ItemModal.js";
import jsPDF from "jspdf";
import "jspdf-autotable";

const TableHeader = styled.thead`
  text-align: center;
`;

export function ItemTable() {
  const { allItems, setAllItems, stateTracker, setStateTracker } =
    useContext(InventoryContext);
  const { darkMode, tableColor } = useContext(DarkThemeContext);
  // const [userName, setUserName] = useState();
  // const [itemState, setItemState] = useState(allItems);
  // const [deleteItem, setDeleteItem] = useState([]);
  const StyledDiv = styled.div`
    height: 100vh;
    // margin-bottom: 15%;
    padding: 1%;
    background-color: ${darkMode};
  `;

  const handleDownloadTable = () => {
    const pdf = new jsPDF();
    pdf.autoTable({ html: "#table" });
    pdf.save("inventory.pdf");
  };

  const fetchToggle = () => {
    stateTracker === false ? setStateTracker(true) : setStateTracker(false);
  };

  const handleDelete = (item) => {
    console.log(item);
    fetch(`http://localhost:8080/items/${item}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => fetchToggle())
      .catch((error) => console.log(error));
  };

  const handleCheckout = (item) => {
    fetch(`http://localhost:8080/items/${item.id}`, {
      method: "PATCH",
      credentials: "include",
      body: JSON.stringify({
        checked_out: !item.checked_out,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(() => {
        setAllItems((allItems) =>
          allItems.map((obj) => {
            if (obj.id === item.id) {
              return { ...obj, checked_out: !item.checked_out };
            } else return obj;
          })
        );
      })
      .then(() => fetchToggle())
      .catch((error) => console.log(error));
  };

  if (allItems.length === 0) {
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
              <th style={{ width: "20px" }}>Delete Item</th>
              <th> Check Out/In</th>
              <th>Item ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Category</th>
              <th>Sub Category</th>
              <th>Checked Out</th>
              {/* <th>Checked In</th> */}
              <th>Assigned To</th>
            </tr>
          </TableHeader>
          <tbody>
            {allItems.map((item) => {
              return (
                <>
                  <tr key={item.id}>
                    <td>
                      <img
                        style={{
                          display: "block",
                          margin: "auto",
                          marginLeft: "auto",
                          marginRight: "auto",
                          cursor: "pointer",
                          // backgroundColor: `${darkMode}`,
                        }}
                        src="./images/delete.png"
                        alt="delete"
                        onClick={() => handleDelete(item.id)}
                      />
                    </td>
                    <td>
                      <img
                        style={{
                          display: "block",
                          margin: "auto",
                          marginLeft: "auto",
                          marginRight: "auto",
                          cursor: "pointer",
                        }}
                        src="./images/checkout.png"
                        alt="checkout"
                        onClick={() => handleCheckout(item)}
                      ></img>
                    </td>
                    <td>{item.id}</td>
                    <td>{item.item_name}</td>
                    <td>{item.item_description}</td>
                    <td>{item.category_name}</td>
                    <td>{item.sub_category_name}</td>
                    <td>{item.checked_out === false ? "no" : "yes"}</td>
                    <td>
                      {item.user_name === "no name" ? "" : item.user_name}
                    </td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </Table>
        <Button
          style={{ marginRight: "5px", marginLeft: "8px" }}
          onClick={() => handleDownloadTable()}
        >
          Download Inventory
        </Button>
        <DisplayModal />
      </StyledDiv>
    );
  }
}
