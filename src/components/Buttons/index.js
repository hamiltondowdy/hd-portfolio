import React from  "react";
import Socials from "../Socials";
import Skills from "../Skills";
import Resume from "../Resume";
import { Row } from "react-bootstrap";

function Buttons() {
    return (
        <Row>
        <Socials />
        <Skills />
        <Resume />
</Row>
    )
}

export default Buttons;