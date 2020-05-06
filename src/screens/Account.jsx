import React from "react";
import styles from "./Account.module.css";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";
import { EDIT_CANDIDATE_FIELDS } from "../mocks";


const Account = () => {

    const logFormData = (data) => {
        console.log(data);
    }

    return (
        <>
            <PageTitle>
                <h3>Edit account</h3>
            </PageTitle>
            
            <div className={styles.accountForm}>
                <CandidateForm
                    inputsData={EDIT_CANDIDATE_FIELDS}
                    sendFormData={logFormData}
                />
            </div>
        </>
    )
}

export default Account;