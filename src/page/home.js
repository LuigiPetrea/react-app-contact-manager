import React from "react";
import InputsContacts from "../Components/inputsContacts";
import { Link } from "react-router-dom";

function Home (){

    return (
        <>
        <div className="content-inputs-home">
        <h1>Contact Manager</h1>
        <InputsContacts />
        <br />
        <Link to="/contacts"><p className="txt-go-list">go to your contact list</p></Link>
        </div>
        </>
    );
}
export default Home;