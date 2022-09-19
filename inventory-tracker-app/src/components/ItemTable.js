import React, { useState, useContext, useEffect } from "react";
import Table from "react-bootstrap/Table";
import styled from "styled-components";
import { InventoryContext } from "./InventoryContext";
import { DarkThemeContext } from "./DarkThemeContext";
import "../App.css";
import DisplayModal from "./ItemModal.js";

const TableHeader = styled.thead`
  text-align: center;
`;

export function ItemTable() {
  const { allItems, setAllItems, stateTracker, setStateTracker } =
    useContext(InventoryContext);
  const { darkMode } = useContext(DarkThemeContext);
  const [userName, setUserName] = useState();
  const [itemState, setItemState] = useState(allItems);
  const [deleteItem, setDeleteItem] = useState([]);

  const fetchToggle = () => {
    stateTracker === false ? setStateTracker(true) : setStateTracker(false);
  };

  const handleDelete = (item) => {
    fetch(`http://localhost:8080/items/${item}`, {
      method: "DELETE",
    }).then((data) => setStateTracker(fetchToggle), alert("Item deleted"));
  };

  const handleCheckout = (item) => {
    fetch(`http://localhost:8080/items/${item.id}`, {
      method: "PATCH",
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
      .then(setStateTracker(fetchToggle))
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
      <>
        <Table striped bordered hover size="sm">
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
                          backgroundColor: `${darkMode}`,
                        }}
                        src="./images/delete.png"
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
        <DisplayModal />
      </>
    );
  }
}
