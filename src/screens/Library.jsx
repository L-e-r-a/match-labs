import React from "react";
import { useState, useEffect } from 'react';

import Card from "../components/Card";
import Loader from "../components/Loader";
import Button from "../components/Button";

import getDataFromApi from '../utils';


const Library = (props) => {
    // Toggle State
    const [toggle, updateToggle] = useState(false);

    // API URL by Toggle State
    const apiUrl = toggle ?
        "https://match-labs-api.herokuapp.com/api/no_auth/candidates" :
        "https://match-labs-api.herokuapp.com/api/no_auth/labs";
    const [jsonData, updateData] = useState([]);
    const [loading, updateLoading] = useState(true);


    // Request Data from API on Toggle State Change
    useEffect(() => {
        const stopLoading = getDataFromApi(apiUrl, updateData, () => { });
        updateLoading(stopLoading);
    }, [toggle]);


    // Set Card Data by Card Type
    const card = {}

    const setCardData = (data) => {
        if (toggle) {
            // Candidate card
            card.name = `${data.first_name} ${data.last_name}`;
            card.image = data.profile_image;
        } else {
            // Company card
            card.name = data.name;
            card.image = data.company && data.company.profile_image;
        }
        card.technologies = data.technologies;
    }



    return (
        <>

            {/* Toggle Button */}
            <div onClick={() => { updateToggle(!toggle); updateLoading(true); }}>
                <Button
                    size="small" variant="primary">
                    {toggle ? "Switch to Companies" : "Switch to Candidates"}
                </Button>
            </div>

            {/* Show Loading Component until API response */}
            {loading ? (<Loader />) : (
                <>
                    {jsonData.map((data) => (
                        <div key={data.id} onClick={() => !toggle && props.history.push(`/profile/${data.id}`)}>
                            {setCardData(data)}
                            <Card
                                outline
                                name={card.name}
                                imgUrl={card.image}
                                technologies={card.technologies}
                            ></Card>
                        </div>
                    ))}
                </>
            )}

        </>
    );


};

export default Library;