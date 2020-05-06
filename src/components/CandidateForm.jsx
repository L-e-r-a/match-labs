import React, { useState } from "react";

import styles from "./CandidateForm.module.css";
import Button from "./Button";



const CanditateForm = ({ inputsData, sendFormData }) => {
  //const inputs = inputsData;
  const [inputs, setInputs] = useState(inputsData);

  const getFormData = (e) => {
    e.preventDefault();
    sendFormData(inputs);
  }

  const onChange = (e) => {
    const newInputs = inputs.map(input =>
        input.name !== e.target.name 
          ? { ...input } 
          : { ...input, value: e.target.value }
    )
    setInputs(newInputs);
  }

  return (
    <form className={styles.form} onSubmit={(e) => { getFormData(e) }}>
      {inputs.map((input) => (
        <div className={styles.field} key={input.name}>
          <input
            type="text"
            name={input.name}
            value={input.value}
            placeholder={input.placeholder}
            onChange={onChange} 
          />
        </div>
      ))}
      <Button
        type="submit"
        variant="secondary"
        size="huge"
      >
        Submit
        </Button>
    </form>
  )


}

export default CanditateForm;