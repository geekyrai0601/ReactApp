import React from "react";

function CitiesList() {
    let citieslist = ["abcd", "baccd", "dasdsad"];
    let result = citieslist.map( (item,index) => <li key= {index}>{item}</li>)
    return (
        <>
            <ol>
                {result}
            </ol>
        </>
    );
}

export default CitiesList;
