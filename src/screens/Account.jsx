import React, { useEffect, useState } from "react";

import CandidateForm from "../components/CandidateForm";
import PageTitle from "../components/PageTitle";
import Loader from "../components/Loader";
import { useContext } from "react";
import { AppContext } from "../Context";
import { editCandidate } from "../utils/request";

const Account = ({ updateUser }) => {
  // 1. Subscribe to AppContext data
  const userData = useContext(AppContext);
  const [fields, setFields] = useState(null);

  useEffect(() => {
    // 2. Map with object keys and format your data before setting it in state
    const user = userData.user.personal;
    const formattedUser = Object.keys(user).map(key => ({
      name: key,
      value: user[key]
    }));

    setFields(formattedUser);
  }, []);


  const onFormSubmit = async (values) => {
    const id = userData.user.id;
    const role = userData.user.role;

    const res = await editCandidate(id, role, values);
    updateUser();
  };


  if (!fields) return <Loader />;

  return (
    <>
      <PageTitle>
        <h3>Edit account</h3>
      </PageTitle>
      <CandidateForm onSubmit={onFormSubmit} fields={fields}></CandidateForm>
    </>
  );
};

export default Account;
