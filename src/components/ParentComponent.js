import React, { useState } from "react";
import Form from './Form.js'
import DisplayData from "./DisplayData.js";

function ParentComponent() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    //Each element of the form needs to be updated so we have to add state to each element in order to pickup changes and help re-render the form.
    //Once we have set up the state array we implement the handle event functions one for each element that takes in the target value on the browser.
    //Last step is to include the event listener to the input elemets in the JSX syntax that picks up the changes that are handled in our below functions.
    //If desired, we can pass the form values that are stored in state down as props or sent upward via a function suppled in props.

    function handleFirstNameChange(e) {
        setFirstName(e.target.value);
    }

    function handleLastNameChange(e) {
        setLastName(e.target.value);
    }

    return (
        <div>
        <Form
            firstName = {firstName}
            lastName = {lastName}
            handleFirstNameChange = {handleFirstNameChange}
            handleLastNameChange = {handleLastNameChange}
        />
        <DisplayData firstName={firstName} lastName={lastName} />
        </div>
    );
}

export default ParentComponent;