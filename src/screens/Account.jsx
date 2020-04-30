import React, {useState} from "react";
import styles from "./Account.module.css";

import CandidateForm from "../components/CandidateForm";
import {EDIT_CANDIDATE_FIELDS} from "../mocks";


const Account = () => {

    const logFormData = (data) => {
        console.log(data);
    }

    return (
        <div className={styles.accountForm}>
            <h3 className={styles.title}>Edit Account</h3>
            <CandidateForm 
                inputsData = {EDIT_CANDIDATE_FIELDS} 
                sendFormData = {logFormData}
            />
        </div>
    )
}

export default Account;