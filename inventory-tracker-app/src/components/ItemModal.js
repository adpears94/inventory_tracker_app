import React, { useState, useEffect, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { InventoryContext } from '../App';
import "../styles/itemModal.css";

export function ItemModal(props) {
  const [itemName, setItemName] = useState();
  const [userName, setUserName] = useState();
  const [itemDescription, setItemDescription] = useState();
  const [category, setCategory] = useState();
  const [subCategory, setSubCategory] = useState();
  const [filteredNames, setFilteredNames] = useState([]);
  const {allUsers} = useContext(InventoryContext);
    
    const handleSubmit = () => {
      fetch('http://localhost:8080/items', {
        method: 'POST',
        body: JSON.stringify({
          'item_name': itemName,
          'user_id': userName,
          'item_description': itemDescription,
          'category_id': parseInt(category),
          'sub_category_id': parseInt(subCategory)      
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
        .then((response) => response.json())
        .then((data) => console.log(data), alert('Item added! Please refresh the page to see the new item.'))
        .catch((error) => alert('Cannot add item'));
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

    function changeUserName() {
      var txt = 'type user name';
      document.getElementById('user_id').value = txt;
    }
  


  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Add Item</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <label htmlFor="item_name">Item name:</label>{'\u00A0'}
        <input
          type="text"
          id="item_name"
          name="item_name"
          onChange={(e) => setItemName(e.target.value)}
        ></input>
        <br></br>
        <label htmlFor="user_id">Username:</label>{'\u00A0'}{'\u00A0'}
        <input
          type="text"
          id="user_id"
          name="user_id"
          onChange={ handleFilter}
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
        <label htmlFor="item_description">Item Description:</label>{'\u00A0'}{'\u00A0'}
        <textarea style={{paddingTop: '2px'}}
          type="text"
          id="item_description"
          name="item_description"
          onChange={(e) => setItemDescription(e.target.value)}
        ></textarea>
        <br></br>
        <label htmlFor="category_id">Category:</label>{'\u00A0'}{'\u00A0'}{'\u00A0'}
        <select
          name="category_id"
          id="category_id"
          onChange={(e) => setCategory(e.target.value)}
        >
          <option disabled selected>
            {" "}
            Choose One
          </option>
          <option value="1">Technology</option>
          <option value="2">Furniture</option>
          <option value="3">Vehicles</option>
        </select>
        <br></br>
        <label htmlFor="sub_category_id">Subcategory:</label>{'\u00A0'}
        <select
          name="sub_category_id"
          id="sub_category_id"
          onChange={(e) => setSubCategory(e.target.value)}
        >
          <option disabled selected>
            {" "}
            Choose One
          </option>
          <option value="1">Displays</option>
          <option value="2">Laptop</option>
          <option value="3">Desktop</option>
          <option value="4">Peripherals</option>
          <option value="5">Office Supplies</option>
          <option value="6">Charging Stations</option>
          <option value="7">Couch</option>
          <option value="8">Table</option>
          <option value="9">Chair</option>
          <option value="10">Truck</option>
          <option value="11">Sedan</option>
          <option value="12">SUV</option>
        </select>
        <br></br>
        <Button type="submit" value="Add item" onClick={handleSubmit}>Add item</Button>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

 
function DisplayModal() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Button variant="primary" onClick={() => setModalShow(true)}>
        Add Item
      </Button>

      <ItemModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}  

export default DisplayModal;
