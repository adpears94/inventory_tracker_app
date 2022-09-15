import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react'
import styled from 'styled-components';

function SplashPage() {

const [username, setUsername] = useState("");
const [base, setBase] = useState("");
const [squadron, setSquadron] = useState("");
// // var strBase = e.options[e.selectedIndex].text;

const StyledForm = styled.div`
display: flex;
width: 500px;
height: 500px;
`
const handleSubmit = () => {
  fetch('http://localhost:8080/users', {
    method: 'POST',
    body: JSON.stringify({
      'user_name': username,
      'squadron': squadron,
      'base': base,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data), alert('User added!'))
    .catch((error) => alert('Cannot add user'));
};

    return (
        // <StyledForm>
        <Form>
          <fieldset enabled>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="enabledTextInput">Username</Form.Label>
              <Form.Control id="enabledTextInput" placeholder="Enter Username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="enabledSelect">Select Base</Form.Label>
              <Form.Select id="enabledSelect" onChange={(e) => setBase(e.target.value)}>
                <option disabled selected>Choose One</option>
                <option>Schriever AFB</option>
                <option>Scott AFB</option>
                <option>Patrick AFB</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label htmlFor="enabledSelect">Select Squadron</Form.Label>
              <Form.Select id="enabledSelect" onChange={(e) => setSquadron(e.target.value)}>
                <option disabled selected>Choose One</option>
                <option>375th CSPTS</option>
                <option>2 SOPS</option>
                <option>45 SFS</option>
              </Form.Select>
            </Form.Group>            
            <Button type="submit" onClick={() => handleSubmit()}>Submit</Button>
          </fieldset>
          {console.log(squadron)}
        </Form>
        // </StyledForm>
      );
}

export default SplashPage;