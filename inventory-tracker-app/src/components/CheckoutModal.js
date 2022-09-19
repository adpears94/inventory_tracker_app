import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { InventoryContext } from "./InventoryContext.js";
import { StyledModalDiv } from "./Styles.js";
import "../styles/itemModal.css";

export function CheckoutModal(props) {
  const [userName, setUserName] = useState();
  const [itemId, setItemId] = useState();
  const { allUsers } = useContext(InventoryContext);

  const handleCheckout = (item) => {
    fetch(`http://localhost:8080/items/${item}`, {
      method: "PATCH",
      body: JSON.stringify({
        // 'user_id': userName,
        checked_out: checkedOut,
      }),
    })
      .then((data) => data.json())
      .then(() => setCheckedOut(!checkedOut));
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    console.log(searchWord);
    if (searchWord.length !== 0) {
      const newFilter = allUsers.filter((item) => {
        return item.user_name.toLowerCase().includes(searchWord.toLowerCase());
      });
      setFilteredNames(newFilter);
    } else {
      setFilteredNames([]);
    }
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Check-out Item
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <StyledModalDiv>
          <label htmlFor="item_name">Item ID:</label>
          {"\u00A0"}
          <input
            type="number"
            id="item_name"
            name="item_name"
            onChange={(e) => setItemId(e.target.value)}
          ></input>
          <br></br>
          <label htmlFor="user_id">Username:</label>
          {"\u00A0"}
          {"\u00A0"}
          <input
            type="text"
            id="user_id"
            name="user_id"
            onChange={handleFilter}
          />
          <div className="autoBoxRollOut">
            {filteredNames.map((data) => {
              return (
                <li key={data.id} className="dataResult">
                  <div className="dataResult">
                    {data.user_name}
                    <p onClick={changeUserName}>
                      {/* <p onClick={() => setUserName(data)}> */}
                      {data.fullName}
                      {console.log(userName)}
                    </p>
                  </div>
                </li>
              );
            })}
          </div>

          <br></br>
        </StyledModalDiv>
        <Button type="submit" value="Add item" onClick={handleCheckOut}>
          Check-out Item
        </Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function DisplayCheckoutModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Checkout-item
      </Button>

      <ItemModal show={modalShow} onHide={() => setModalShow(false)} />
    </>
  );
}

export default DisplayCheckoutModal;
