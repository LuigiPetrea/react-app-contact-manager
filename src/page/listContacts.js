import React from "react";
import { Link } from "react-router-dom";

function ContactsList (){
    const table = <table border={"1px"}>
    <tr>
        <th>ID</th>
        <th>Name</th>
        <th>Phone</th>
    </tr>
    <tr>
        <td>#1</td>
        <td>Levi</td>
        <td>+40 721 767 905</td>
    </tr>
</table>;

    return (
        <div className="content-inputs-home">
            <h1>List Contacts</h1>
            {table}
            <Link to="/"><p className="txt-go-list">go to home page</p></Link>
        </div>
    );
}
export default ContactsList;