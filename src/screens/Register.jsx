import React from "react";

import styles from "./Register.module.css";
import CandidateForm from "../components/CandidateForm";

import {CREATE_CANDIDATE_FIELDS} from "../mocks";


const Register = () => {
    return (
        <div className={styles.accountForm}>
            <h3 className={styles.title}>Register</h3>
            <CandidateForm inputsData = {CREATE_CANDIDATE_FIELDS} />
        </div>
    )
}

export default Register;