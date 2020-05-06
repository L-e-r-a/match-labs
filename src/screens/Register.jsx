import React from "react";

import styles from "./Register.module.css";
import CandidateForm from "../components/CandidateForm";

import { CREATE_CANDIDATE_FIELDS } from "../mocks";
import PageTitle from "../components/PageTitle";



const Register = () => {

    const logFormData = (data) => {
        console.log(data);
    };

    return (
        <>
            <PageTitle>
                <h3>Register</h3>
            </PageTitle>

            <div className={styles.accountForm}>
                <CandidateForm
                    inputsData={CREATE_CANDIDATE_FIELDS}
                    sendFormData={logFormData}
                />
            </div>
        </>
    )
}

export default Register;