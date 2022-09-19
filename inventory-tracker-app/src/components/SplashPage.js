import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";
import { StyledImgLeft, StyledImgRight } from "./Styles";
// import pdf from "../../src/af1297.pdf";

function SplashPage() {
  const [username, setUsername] = useState("");
  const [base, setBase] = useState("");
  const [squadron, setSquadron] = useState("");
  const [BaseImg, setBaseImg] = useState("./images/usaf.png");
  const [SquadronImg, setSquadronImg] = useState("./images/ussf.png");

  const handleSubmit = () => {
    fetch("http://localhost:8080/users", {
      method: "POST",
      credentials: "include",
      body: JSON.stringify({
        user_name: username,
        squadron: squadron,
        base: base,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data), alert("User added!"))
      .catch((error) => alert("Cannot add user"));
  };

  const imagePickerBase = (e) => {
    if (e.target.value === "Scott AFB") {
      setBaseImg("./images/amc.png");
    } else if (e.target.value === "Patrick AFB") {
      setBaseImg("./images/spd6.png");
    } else if (e.target.value === "Schriever SFB") {
      setBaseImg("./images/schriever-sfb.png");
    }
  };

  const imagePickerSquadron = (e) => {
    if (e.target.value === "375th CSPTS") {
      setSquadronImg("./images/375cspts.png");
    } else if (e.target.value === "2 SOPS") {
      setSquadronImg("./images/2sops.png");
    } else if (e.target.value === "45 SFS") {
      setSquadronImg("./images/45sfs.png");
    }
  };

  return (
    <>
      <StyledImgLeft src={BaseImg} alt="" />
      <Form>
        <fieldset enabled>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="enabledTextInput">Username</Form.Label>
            <Form.Control
              id="enabledTextInput"
              placeholder="Enter Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="username"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="enabledSelect">Select Base</Form.Label>
            <Form.Select
              id="enabledSelect"
              onChange={(e) => {
                setBase(e.target.value);
                imagePickerBase(e);
              }}
              className="base"
            >
              <option disabled selected>
                Choose One
              </option>
              <option>Schriever SFB</option>
              <option>Scott AFB</option>
              <option>Patrick AFB</option>
            </Form.Select>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="enabledSelect">Select Squadron</Form.Label>
            <Form.Select
              id="enabledSelect"
              onChange={(e) => {
                setSquadron(e.target.value);
                imagePickerSquadron(e);
              }}
              className="squadron"
            >
              <option disabled selected>
                Choose One
              </option>
              <option>375th CSPTS</option>
              <option>2 SOPS</option>
              <option>45 SFS</option>
            </Form.Select>
          </Form.Group>
          <Button
            className="button"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Submit
          </Button>
        </fieldset>
      </Form>
      {/* <StyledImgMid src="./images/1297.png" alt="1297" />
        <a href={pdf}>Click here for af1297.pdf</a> */}
      <StyledImgRight src={SquadronImg} alt="" />
    </>
  );
}

export default SplashPage;
